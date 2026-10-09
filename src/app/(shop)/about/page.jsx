import { FiHeart, FiFeather, FiGlobe, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import Header from "@/components/Header";

const values = [
  {
    icon: <FiHeart size={22} />,
    title: "Made with care",
    text: "Every piece is printed on demand, so nothing is wasted.",
  },
  {
    icon: <FiGlobe size={22} />,
    title: "Shipped worldwide",
    text: "We deliver to most countries across Europe, North America, Asia, and beyond.",
  },
  {
    icon: <FiFeather size={22} />,
    title: "Designs you'll actually wear",
    text: "We put real effort into every design — no lazy copies, no generic filler. Just stuff we'd wear ourselves.",
  },
];

const legalLinks = [
  {
    href: "/terms",
    label: "Terms of Service",
    description: "The rules for using our website and services.",
  },
  {
    href: "/privacy",
    label: "Privacy Policy",
    description: "How we collect, use, and protect your data.",
  },
  {
    href: "/refund",
    label: "Return & Refund Policy",
    description: "Our policy on returns, refunds, and damaged items.",
  },
  {
    href: "/contact",
    label: "Contact Us",
    description: "Get in touch with our support team.",
  },
];

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FDF8F6] overflow-x-hidden text-[#181313]">
        {/* =========================================================
            ABOUT
        ========================================================= */}
        <section className="mx-auto max-w-275 px-6 pt-20 pb-16 sm:px-8 lg:px-14">
          <div className="mb-6 flex items-center gap-x-3">
            <span className="h-px w-8 bg-[#82181a]" />
            <span className="text-xs font-semibold tracking-[0.3em] text-[#82181a]">
              ABOUT WEARIFY
            </span>
          </div>

          <h1 className="text-4xl font-black leading-15 tracking-[-0.03em] sm:text-5xl">
            Each design has its own story
            <br />
            <span className="text-red-900">
              Wear a story, not just a shirt
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#8e7973] sm:text-lg">
            Wearify started in a small room with a laptop and a stubborn
            idea: that you shouldn&apos;t have to choose between clothes that
            look good and clothes that mean something. Every design here was
            made by us, for people who actually care what they put on.
          </p>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#8e7973] sm:text-lg">
            We work with global print-on-demand partners to produce and ship
            each item only after you order it. That means no mass production,
            no wasted inventory, and every piece made specifically for you.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-[#f4ece4] p-6 transition hover:-translate-y-1"
              >
                <div className="text-[#82181a]">{v.icon}</div>
                <h3 className="mt-4 font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#8e7973]">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            POLICIES & CONTACT LINKS
        ========================================================= */}
        <section className="mx-auto max-w-275 px-6 pb-24 sm:px-8 lg:px-14">
          <div className="mb-6 flex items-center gap-x-3">
            <span className="h-px w-8 bg-[#82181a]" />
            <span className="text-xs font-semibold tracking-[0.3em] text-[#82181a]">
              POLICIES & SUPPORT
            </span>
          </div>

          <h2 className="text-3xl font-black leading-tight sm:text-4xl">
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
            {legalLinks.map((link) => (
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

export default AboutPage;