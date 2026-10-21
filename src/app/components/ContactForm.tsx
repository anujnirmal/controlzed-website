"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState("sending");
    setMessage("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setState("error");
      setMessage("The form is not connected yet. Please email us directly while EmailJS is being set up.");
      return;
    }

    const formData = new FormData(form);
    const payload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: String(formData.get("from_name") || ""),
        reply_to: String(formData.get("reply_to") || ""),
        message: String(formData.get("message") || ""),
      },
    };

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("EmailJS request failed");
      setState("success");
      setMessage("Thanks — your note is on its way. We’ll be in touch soon.");
      form.reset();
    } catch {
      setState("error");
      setMessage("That didn’t send. Please try again, or email us directly at anuj@controlzed.in.");
    }
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit} className="border border-white/10 bg-[#100c1d]/90 p-5 shadow-[0_0_55px_rgba(86,246,255,.06)] md:p-7">
      <p className="mono mb-6 text-[9px] text-[#56f6ff]">Tell us what you’re working on</p>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-xs text-white/60">Your name
          <input required name="from_name" autoComplete="name" maxLength={100} className="mt-2 w-full border border-white/15 bg-[#080611] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#56f6ff]/70" placeholder="Name" />
        </label>
        <label className="block text-xs text-white/60">Email address
          <input required type="email" name="reply_to" autoComplete="email" maxLength={254} className="mt-2 w-full border border-white/15 bg-[#080611] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#56f6ff]/70" placeholder="you@company.com" />
        </label>
      </div>
      <label className="mt-5 block text-xs text-white/60">A little about the project
        <textarea required name="message" rows={4} maxLength={3000} className="mt-2 w-full resize-y border border-white/15 bg-[#080611] px-4 py-3 text-sm leading-relaxed text-white outline-none transition placeholder:text-white/25 focus:border-[#56f6ff]/70" placeholder="What are you hoping to build or untangle?" />
      </label>
      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={state === "sending"} className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#56f6ff] px-5 py-3 text-xs font-bold text-[#080611] shadow-[0_0_25px_rgba(86,246,255,.2)] transition hover:shadow-[0_0_36px_rgba(86,246,255,.35)] disabled:cursor-wait disabled:opacity-60">
          {state === "sending" ? "Sending…" : "Send project note"}<span aria-hidden="true">↗</span>
        </button>
        <p role="status" aria-live="polite" className={`min-h-5 text-xs leading-relaxed ${state === "success" ? "text-[#d6ff3f]" : state === "error" ? "text-[#ff8bd8]" : "text-white/45"}`}>
          {message || "Or email us directly at anuj@controlzed.in"}
        </p>
      </div>
    </form>
  );
}
