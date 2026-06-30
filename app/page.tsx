import DemoChat from "../components/DemoChat";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-xl font-black">Volunteer AI Solutions</div>
            <div className="text-xs text-slate-400">AI Automation • Websites • SEO • Ads • CRM</div>
          </div>
          <nav className="hidden gap-6 text-sm font-semibold md:flex">
            <a href="#services">Services</a>
            <a href="#demos">AI Demos</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full bg-orange-500 px-5 py-3 font-bold text-white">Book Demo</a>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-orange-400 font-bold">Local business AI systems</p>
          <h1 className="text-5xl font-black leading-tight md:text-7xl">AI Employees That Never Miss A Customer</h1>
          <p className="mt-6 text-xl text-slate-300">AI receptionists, websites, SEO, Google Ads, email/SMS follow-up, CRM dashboards, and automation systems for service businesses.</p>
          <div className="mt-8 flex gap-4">
            <a href="#demos" className="rounded-xl bg-orange-500 px-6 py-4 font-bold">Try Demo</a>
            <a href="#contact" className="rounded-xl bg-slate-800 px-6 py-4 font-bold">Book Free Demo</a>
          </div>
        </div>
        <div className="rounded-[2rem] border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-950 p-8 shadow-2xl">
          <div className="rounded-3xl bg-white p-10 text-center text-slate-900">
            <div className="text-4xl font-black text-orange-600">Volunteer</div>
            <div className="mt-2 text-xl font-bold text-blue-900">AI SOLUTIONS</div>
            <p className="mt-4 text-sm">Automation built for real local businesses.</p>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-4xl font-black">Services</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {["AI Receptionists", "Websites & Landing Pages", "SEO & Google Ads", "CRM Dashboards", "SMS/Email Follow-up", "Lead Capture Automation"].map((s) => (
            <div key={s} className="rounded-2xl border border-slate-800 bg-slate-900 p-6"><h3 className="text-xl font-bold">{s}</h3><p className="mt-2 text-slate-400">Professional systems designed to capture leads and save time.</p></div>
          ))}
        </div>
      </section>

      <DemoChat />

      <section id="pricing" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-4xl font-black">Simple Pricing</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["Starter", "$497 setup", "Website or basic AI demo"],
            ["Growth", "$997 setup", "AI chatbot + lead capture"],
            ["Pro", "$1,497+ setup", "Automation + CRM + follow-up"]
          ].map(([name, price, desc]) => <div key={name} className="rounded-3xl border border-slate-700 bg-slate-900 p-8"><h3 className="text-2xl font-bold">{name}</h3><p className="mt-4 text-3xl font-black text-orange-400">{price}</p><p className="mt-3 text-slate-300">{desc}</p></div>)}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-orange-500 p-10 text-slate-950 md:p-14">
          <h2 className="text-4xl font-black">Ready to automate your business?</h2>
          <p className="mt-4 text-xl font-semibold">Call (423) 534-5554 or book a free demo today.</p>
          <a href="tel:4235345554" className="mt-8 inline-block rounded-xl bg-slate-950 px-6 py-4 font-bold text-white">Call Now</a>
        </div>
      </section>
    </main>
  );
}
