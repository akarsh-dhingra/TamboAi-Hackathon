import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const prisma = new PrismaClient();

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});
// Root route
app.get("/", (req, res) => res.send("Expense Tracker API"));

// Optional: require x-api-key for auth routes when BACKEND_API_KEY is set
const requireApiKey = (req, res, next) => {
  const apiKey = process.env.BACKEND_API_KEY;
  if (!apiKey) return next();
  const key = req.headers["x-api-key"];
  if (key !== apiKey) {
    return res.status(401).json({ error: "Invalid or missing API key" });
  }
  next();
};

// Auth Routes (used by NextAuth Credentials provider)
app.post("/api/v1/auth/register", requireApiKey, async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!email) return res.status(400).json({ error: "Email required" });
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return res.status(400).json({ error: "Email already registered" });
    const hashed = password ? await bcrypt.hash(password, 10) : null;
    const user = await prisma.user.create({
      data: { name: name ?? null, email, password: hashed },
    });
    const { password: _, ...safe } = user;
    res.status(201).json({ user: safe });
  } catch (err) {
    res.status(500).json({ error: "Failed to register" });
  }
});

app.post("/api/v1/auth/login", requireApiKey, async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) return res.status(400).json({ error: "Email required" });
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ error: "Invalid email or password" });
    if (user.password) {
      const ok = await bcrypt.compare(password || "", user.password);
      if (!ok) return res.status(401).json({ error: "Invalid email or password" });
    }
    const { password: _, ...safe } = user;
    const token = jwt.sign(
      { sub: user.id },
      process.env.JWT_SECRET || "change-me-in-production",
      { expiresIn: "7d" }
    );
    res.json({ user: safe, token });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
});

// User Routes
app.post("/api/v1/users",async(req,res)=>{
   try {
     const { name, email } = req.body;
     const user = await prisma.user.create({ data: { name, email } });
     res.json(user);
   } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
   }
});

app.get("/api/v1/users", async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

// Group Endpoints
app.post("/api/v1/groups", async (req, res) => {
    const { name, memberIds } = req.body;

    const group = await prisma.group.create({
      data: {
        name,
        members: {
          create: memberIds.map((id) => ({ userId: id })),
        },
      },
    });
    res.json(group);
});

app.get("/api/v1/groups", async (req, res) => {
    const groups = await prisma.group.findMany({
      include: { members: true },
    });
    res.json(groups);
  });

//   Expense Endpoints
app.post("/api/v1/groups/:groupId/expenses", async (req, res) => {
    const { title, amount, paidBy } = req.body;
    const { groupId } = req.params;

    const expense = await prisma.expense.create({
      data: { title, amount: parseFloat(amount), paidBy, groupId },
    });
  
    res.json(expense);
  });
  
  
app.get("/api/v1/expenses", async (req, res) => {
    const { groupId } = req.params;
    const expenses = await prisma.expense.findMany({
      where: { groupId },
    });
  
    res.json(expenses);
  });
  
// Settle Balance Logic Endpoints
app.get("/api/v1/groups/:id/balance", async (req, res) => {
    const { id } = req.params;
  
    const expenses = await prisma.expense.findMany({ where: { groupId: id } });
  
    const totals = {};
    expenses.forEach((e) => {
      totals[e.paidBy] = (totals[e.paidBy] || 0) + e.amount;
    });
  
    const members = await prisma.membership.findMany({ where: { groupId: id } });
    const share = Object.values(totals).reduce((a, c) => a + c, 0) / members.length;
  
    const balances = members.map((m) => ({
      userId: m.userId,
      balance: (totals[m.userId] || 0) - share,
    }));
  
    res.json(balances);
  });
  
  
  
  
  
  
  