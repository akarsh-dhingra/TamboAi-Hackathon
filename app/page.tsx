// app/page.tsx
import Link from "next/link";

export default function J() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
              LP
            </span>
            <span>LaunchPad</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="#features" className="text-slate-600 hover:text-slate-900">
              Features
            </a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900">
              Pricing
            </a>
            <a href="#faq" className="text-slate-600 hover:text-slate-900">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 md:inline-flex"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Get started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Ship faster with a modern landing page
            </p>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">
              Turn visitors into customers with a simple, high-converting landing
              page.
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              LaunchPad helps you present your product clearly, build trust, and
              drive signups—without spending weeks on design.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Start free
              </Link>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                See features
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
              <span>✓ No credit card required</span>
              <span>✓ Setup in minutes</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>

          {/* Hero card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 p-6 text-white">
              <p className="text-sm opacity-90">Live preview</p>
              <p className="mt-2 text-2xl font-semibold">
                Your next launch—made easy.
              </p>
              <p className="mt-2 text-sm opacity-90">
                Swap this card for screenshots, a product demo, or a signup form.
              </p>
            </div>

            <div className="mt-6 grid gap-4">
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-sm font-semibold">Conversion-focused layout</p>
                <p className="mt-1 text-sm text-slate-600">
                  Hero, features, social proof, pricing, and CTA—done.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-sm font-semibold">Responsive by default</p>
                <p className="mt-1 text-sm text-slate-600">
                  Looks great on mobile, tablet, and desktop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Everything you need to launch
          </h2>
          <p className="mt-3 text-slate-600">
            A pragmatic landing page structure that’s easy to customize.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Fast setup",
              desc: "Drop in your copy and ship. No complex components required.",
            },
            {
              title: "SEO-friendly",
              desc: "Semantic sections and clean markup that search engines like.",
            },
            {
              title: "Built for conversion",
              desc: "Clear CTAs, social proof, and scannable feature blocks.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-16 md:pb-24">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 md:p-12">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Ready to launch?
              </h2>
              <p className="mt-3 text-slate-600">
                Customize the copy and links, add screenshots, and go live.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Create your account
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Talk to sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-slate-600">
            © {new Date().getFullYear()} LaunchPad. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-slate-600 hover:text-slate-900">
              Privacy
            </Link>
            <Link href="/terms" className="text-slate-600 hover:text-slate-900">
              Terms
            </Link>
            <Link href="/contact" className="text-slate-600 hover:text-slate-900">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
