import { FiMail, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import Header from "@/components/Header";

const contactReasons = [
  {
    title: "Order Issues",
    description:
      "Damaged, misprinted, or wrong item? Let us know and we'll make it right.",
    href: "/refund",
    linkLabel: "Read our Refund Policy",
  },
  {
    title: "General Questions",
    description:
      "Questions about a design, sizing, or anything else — we're happy to help.",
    href: "/about",
    linkLabel: "Learn about us",
  },
  {
    title: "Business Inquiries",
    description:
      "Collaborations, wholesale, or partnership opportunities — reach out anytime.",
    href: null,
  },
];

const quickLinks = [
  {
    href: "/refund",
    label: "Return & Refund Policy",
    description: "Our policy on returns, refunds, and damaged items.",
  },
  {
    href: "/privacy",
    label: "Privacy Policy",
    description: "How we collect, use, and protect your data.",
  },
  {
    href: "/terms",
    label: "Terms of Service",
    description: "The rules for using our website and services.",
  },
  {
    href: "/about",
    label: "About Us",
    description: "Learn more about Wearify and our story.",
  },
];

const ContactPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FDF8F6] overflow-x-hidden text-[#181313]">
        {/* =========================================================
            HEADER
        ========================================================= */}
        <section className="mx-auto max-w-275 px-6 pt-20 pb-10 sm:px-8 lg:px-14">
          <div className="mb-6 flex items-center gap-x-3">
            <span className="h-px w-8 bg-[#82181a]" />
            <span className="text-xs font-semibold tracking-[0.3em] text-[#82181a]">
              GET IN TOUCH
            </span>
          </div>

          <h1 className="max-w-2xl text-4xl font-black leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            We&apos;d love
            <span className="text-red-900"> to hear from you</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#8e7973] sm:text-lg">
            Whether you have a question about your order, need help with a
            design, or just want to say hi — drop us a line. We read every
            message and usually reply within 1–2 business days.
          </p>
        </section>

        {/* =========================================================
            EMAIL CARD
        ========================================================= */}
        <section className="mx-auto max-w-275 px-6 pb-16 sm:px-8 lg:px-14">
          <div className="rounded-3xl bg-[#f4ece4] p-8 sm:p-12">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-x-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#82181a] text-white">
                  <FiMail size={22} />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-[0.3em] text-[#82181a]">
                    EMAIL US
                  </p>
                  <Link
                    href="mailto:wearifyCollection.support@gmail.com"
                    className="mt-1 block text-xl font-semibold hover:text-[#82181a] transition"
                  >
                    wearifyCollection.support@gmail.com
                  </Link>
                </div>
              </div>

              <Link
                href="mailto:wearifyCollection.support@gmail.com"
                className="group flex items-center gap-x-3 rounded-full bg-[#82181a] px-6 py-3 font-medium text-white transition hover:bg-[#681416]"
              >
                Send Email
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition group-hover:translate-x-1">
                  <FiArrowRight size={14} />
                </span>
              </Link>
            </div>

            <p className="mt-8 text-sm leading-6 text-[#8e7973]">
              When contacting us about an existing order, please include your
              order number so we can help you faster.
            </p>
          </div>
        </section>

        {/* =========================================================
            CONTACT REASONS
        ========================================================= */}
        <section className="mx-auto max-w-275 px-6 pb-24 sm:px-8 lg:px-14">
          <div className="mb-6 flex items-center gap-x-3">
            <span className="h-px w-8 bg-[#82181a]" />
            <span className="text-xs font-semibold tracking-[0.3em] text-[#82181a]">
              HOW WE CAN HELP
            </span>
          </div>

          <h2 className="max-w-2xl text-3xl font-black leading-tight sm:text-4xl">
            What can we help
            <br />
            <span className="text-red-900">you with?</span>
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {contactReasons.map((reason) => (
              <div
                key={reason.title}
                className="flex flex-col rounded-2xl bg-[#f4ece4] p-6 transition hover:-translate-y-1"
              >
                <h3 className="font-semibold text-lg">{reason.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#8e7973]">
                  {reason.description}
                </p>

                {reason.href && (
                  <Link
                    href={reason.href}
                    className="group mt-5 inline-flex items-center gap-x-2 text-sm font-medium text-[#82181a]"
                  >
                    {reason.linkLabel}
                    <FiArrowRight
                      size={14}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            QUICK LINKS
        ========================================================= */}
        <section className="mx-auto max-w-275 px-6 pb-24 sm:px-8 lg:px-14">
          <div className="mb-6 flex items-center gap-x-3">
            <span className="h-px w-8 bg-[#82181a]" />
            <span className="text-xs font-semibold tracking-[0.3em] text-[#82181a]">
              QUICK LINKS
            </span>
          </div>

          <h2 className="max-w-2xl text-3xl font-black leading-tight sm:text-4xl">
            Everything you need
            <br />
            <span className="text-red-900">to shop with confidence</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#8e7973] sm:text-lg">
            Read about our terms, how we handle your data, and what to do if
            something isn&apos;t right with your order. We keep it simple and
            transparent.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-start justify-between gap-4 rounded-2xl bg-[#f4ece4] p-6 transition hover:-translate-y-1 hover:bg-[#eadfd7]"
              >
                <div>
                  <h3 className="font-semibold text-lg">{link.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#8e7973]">
                    {link.description}
                  </p>
                </div>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#82181a] text-white transition group-hover:translate-x-1">
                  <FiArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
