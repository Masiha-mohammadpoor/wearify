"use client";

import { useState } from "react";
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "sent"

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // TODO: wire this up to a real /api/contact route once ready
    await new Promise((r) => setTimeout(r, 800));

    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  };

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-[#f4ece4] p-8 text-center">
        <p className="text-lg font-semibold text-[#82181a]">Message sent!</p>
        <p className="mt-2 text-sm text-[#8e7973]">
          We&apos;ll get back to you within 1-2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        required
        placeholder="Your name"
        className="rounded-xl border border-[#dfcec6] bg-[#FDF8F6] px-4 py-3 outline-none focus:border-[#82181a]"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
        placeholder="Your email"
        className="rounded-xl border border-[#dfcec6] bg-[#FDF8F6] px-4 py-3 outline-none focus:border-[#82181a]"
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        required
        rows={5}
        placeholder="How can we help?"
        className="resize-none rounded-xl border border-[#dfcec6] bg-[#FDF8F6] px-4 py-3 outline-none focus:border-[#82181a]"
      />
      <button
        disabled={status === "sending"}
        className="group flex w-fit items-center gap-x-3 rounded-full bg-[#82181a] px-7 py-3.5 font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#681416] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
        <FiSend size={16} className="transition group-hover:translate-x-1" />
      </button>
    </form>
  );
};

export default ContactForm;
