"use client";
import { useState } from "react";

const demos = {
  roofing: {
    title: "Roofing AI",
    services: ["roof leak", "storm damage", "inspection", "roof repair", "estimate", "shingles", "gutters"],
    hello: "Hello, thanks for contacting the roofing team. I can help with roof leaks, storm damage, inspections, and roofing estimates. What can I help you with today?",
    reply: "I can help with that roofing request. Is this an emergency leak, storm damage, inspection, or estimate? Please share your name, callback number, and property address."
  },
  auto: {
    title: "Auto Repair AI",
    services: ["car", "brakes", "oil", "tire", "engine", "diagnostic", "vehicle", "battery"],
    hello: "Hello, thanks for contacting the auto repair shop. I can help with diagnostics, brakes, tires, oil changes, repairs, and estimates. What is going on with your vehicle?",
    reply: "Absolutely — I can help with auto repair. What year, make, and model is your vehicle, and what problem are you having?"
  },
  dental: {
    title: "Dental AI",
    services: ["tooth", "teeth", "dental", "dentist", "cleaning", "pain", "crown", "appointment"],
    hello: "Hello, thanks for contacting the dental office. I can help with new patient appointments, cleanings, tooth pain, and general scheduling. How can I help?",
    reply: "I can help with that dental request. Are you having pain, needing a cleaning, or trying to schedule a new patient appointment?"
  },
  marketing: {
    title: "Marketing AI",
    services: ["website", "seo", "ads", "google", "marketing", "crm", "leads", "automation"],
    hello: "Hello, thanks for contacting the marketing team. I can help with websites, SEO, Google Ads, CRM, and follow-up automation. What are you trying to improve?",
    reply: "I can help with that marketing request. Are you looking for more leads, a better website, SEO, ads, or automated follow-up?"
  }
};

type DemoKey = keyof typeof demos;

export default function DemoChat() {
  const [active, setActive] = useState<DemoKey>("roofing");
  const [messages, setMessages] = useState([{ role: "ai", text: demos.roofing.hello }]);
  const [input, setInput] = useState("");

  function switchDemo(key: DemoKey) {
    setActive(key);
    setMessages([{ role: "ai", text: demos[key].hello }]);
    setInput("");
  }

  function send() {
    const text = input.trim();
    if (!text) return;
    const demo = demos[active];
    const lower = text.toLowerCase();
    const allowed = demo.services.some((word) => lower.includes(word)) || ["hi", "hello", "hey"].includes(lower);
    const response = allowed
      ? demo.reply
      : `This is the ${demo.title} demo, so it only handles ${demo.services.slice(0, 5).join(", ")}. Please choose the matching demo for that request.`;
    setMessages((m) => [...m, { role: "customer", text }, { role: "ai", text: response }]);
    setInput("");
  }

  return (
    <section id="demos" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8">
        <p className="text-orange-400 font-semibold">Live AI Demo</p>
        <h2 className="text-3xl md:text-5xl font-bold">Industry-specific AI receptionists</h2>
        <p className="mt-3 text-slate-300">Each demo only answers questions for the selected industry.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-[280px_1fr]">
        <div className="rounded-3xl border border-slate-700 bg-slate-900/70 p-4">
          {(Object.keys(demos) as DemoKey[]).map((key) => (
            <button key={key} onClick={() => switchDemo(key)} className={`mb-3 w-full rounded-2xl px-4 py-4 text-left font-semibold ${active === key ? "bg-orange-500 text-white" : "bg-slate-800 text-slate-200"}`}>
              {demos[key].title}
            </button>
          ))}
          <div className="mt-6 text-sm text-slate-300">
            <p className="font-bold text-white">What it demonstrates</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Handles basic questions</li>
              <li>Rejects wrong-industry requests</li>
              <li>Captures lead details</li>
              <li>Prepares alerts and CRM notes</li>
            </ul>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-700 bg-slate-950 p-5">
          <div className="space-y-4 min-h-[360px]">
            {messages.map((msg, i) => (
              <div key={i} className={`max-w-[85%] rounded-2xl px-5 py-4 ${msg.role === "customer" ? "ml-auto bg-orange-500 text-white" : "bg-blue-900 text-white"}`}>
                <b>{msg.role === "customer" ? "Customer" : "AI Receptionist"}:</b> {msg.text}
              </div>
            ))}
          </div>
          <div className="mt-5 flex gap-3">
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} placeholder="Type like a customer..." className="flex-1 rounded-xl border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none" />
            <button onClick={send} className="rounded-xl bg-orange-500 px-6 font-bold text-white">Send</button>
          </div>
        </div>
      </div>
    </section>
  );
}
