import { motion } from "framer-motion";
import { Routes, Route, Link } from "react-router-dom";
import {
  Globe,
  CreditCard,
  BarChart3,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

/* ---------------- LAYOUT SERENITE ---------------- */

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#F7F9FC] text-slate-900">
      {children}
    </div>
  );
}

/* ---------------- NAV ---------------- */

function Nav() {
  return (
    <header className="flex justify-between items-center px-10 py-6 bg-white border-b border-slate-200">
      <div className="text-lg font-semibold tracking-tight">
        FirstStoneX
      </div>

      <nav className="hidden md:flex gap-8 text-sm text-slate-500">
        <Link className="hover:text-slate-900" to="/">Home</Link>
        <Link className="hover:text-slate-900" to="/contact">Contact</Link>
      </nav>

      <Link
        to="/contact"
        className="px-4 py-2 rounded-lg bg-[#4F7CFF] text-white hover:bg-[#3f6cf0]"
      >
        Get started
      </Link>
    </header>
  );
}

/* ---------------- HOME (TON CONTENU SERENITE STYLE) ---------------- */

function Home() {
  const services = [
    {
      icon: Globe,
      title: "Global IT Architecture",
      desc: "Enterprise-grade systems designed for scale, resilience, and global operations.",
    },
    {
      icon: CreditCard,
      title: "Payment Infrastructure",
      desc: "Secure, scalable and compliant payment ecosystems and PSP integrations.",
    },
    {
      icon: BarChart3,
      title: "Financial Systems",
      desc: "Data-driven finance platforms, trading systems and analytics engines.",
    },
    {
      icon: Briefcase,
      title: "Program Delivery",
      desc: "End-to-end transformation programs with agile execution and governance.",
    },
    {
      icon: ShieldCheck,
      title: "Risk & Compliance",
      desc: "Security, regulatory compliance, and enterprise resilience frameworks.",
    },
  ];

  return (
    <Layout>

      <Nav />

      {/* HERO */}
      <section className="text-center px-6 py-28 bg-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-semibold tracking-tight"
        >
          Modern financial & IT systems<br />
          built for scale
        </motion.h1>

        <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-lg">
          We design enterprise-grade technology, payment infrastructure,
          and financial systems for global organizations.
        </p>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-20 max-w-6xl mx-auto">

        <h2 className="text-2xl font-semibold text-center mb-12">
          Enterprise capabilities
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {services.map((s, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-white border border-slate-200 hover:shadow-sm transition"
            >
              <s.icon className="w-7 h-7 text-[#4F7CFF] mb-4" />

              <h3 className="text-lg font-semibold mb-2">
                {s.title}
              </h3>

              <p className="text-slate-500 text-sm">
                {s.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 py-24 max-w-4xl mx-auto text-center">

        <h2 className="text-2xl font-semibold mb-6">
          Built for enterprise transformation
        </h2>

        <p className="text-slate-500 leading-relaxed">
          FirstStoneX helps organizations modernize technology stacks,
          payment ecosystems, and financial operations with scalable,
          secure architecture and global delivery standards.
        </p>

      </section>

      {/* CONTACT CTA */}
      <section className="px-6 py-20 text-center bg-white">

        <h2 className="text-2xl font-semibold">
          Start your transformation
        </h2>

        <p className="text-slate-500 mt-4">
          Let’s design a scalable and secure system together.
        </p>

        <Link
          to="/contact"
          className="mt-8 inline-block px-6 py-3 rounded-lg bg-[#4F7CFF] text-white hover:bg-[#3f6cf0]"
        >
          Contact us
        </Link>

      </section>
	  
	  {/* FOOTER */}
		<footer className="bg-white border-t border-slate-200 px-10 py-8 mt-20">

		  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">

			<div>
			  © {new Date().getFullYear()} FirstStoneX. All rights reserved.
			</div>

			<div className="flex gap-6 mt-4 md:mt-0">

			  <Link
				to="/privacy-policy"
				className="hover:text-slate-900 transition"
			  >
				Privacy Policy
			  </Link>

			  <Link
				to="/terms-and-conditions"
				className="hover:text-slate-900 transition"
			  >
				Terms & Conditions
			  </Link>

			</div>

		  </div>

		</footer>

    </Layout>
  );
}

/* ---------------- CONTACT (SERENITE CLEAN FORM) ---------------- */

function Contact() {
  return (
    <Layout>

      <Nav />

      <section className="flex justify-center items-center py-20 px-6">

        <div className="w-full max-w-xl bg-white border border-slate-200 rounded-xl p-10">

          <h1 className="text-3xl font-semibold mb-2">
            Contact us
          </h1>

          <p className="text-slate-500 mb-6">
            Let’s discuss your project.
          </p>

          <form className="space-y-4">

            <input className="w-full p-3 border border-slate-200 rounded-lg focus:border-[#4F7CFF] outline-none"
              placeholder="Full name"
            />

            <input className="w-full p-3 border border-slate-200 rounded-lg focus:border-[#4F7CFF] outline-none"
              placeholder="Email address"
            />

            <textarea className="w-full p-3 border border-slate-200 rounded-lg focus:border-[#4F7CFF] outline-none"
              rows="5"
              placeholder="Your message"
            />

            <button className="w-full py-3 rounded-lg bg-[#4F7CFF] text-white hover:bg-[#3f6cf0]">
              Send message
            </button>

          </form>

        </div>

      </section>

    </Layout>
  );
}

/* ---------------- PRIVACY ---------------- */

function PrivacyPolicy() {
  return (
    <Layout>
      <Nav />
      <div className="p-10 max-w-2xl">
		<h1 className="text-3xl font-semibold text-white mb-4">
        Privacy Policy
		</h1>
        <p className="text-slate-300 mb-6">
          At FirstStoneX, we are committed to protecting your privacy.
          Any information submitted through this website is used solely
          for business communication and service delivery purposes.
        </p>

        <p className="text-slate-300 mb-6">
          We do not sell, rent, or disclose your personal information
          to third parties except where required by law or necessary
          to provide our services.
        </p>

        <p className="text-slate-300">
          By using this website, you agree to this Privacy Policy.
        </p>
      </div>
    </Layout>
  );
}

/* ---------------- TERMS ---------------- */

function Terms() {
  return (
    <Layout>
      <Nav />
      <div className="p-10 max-w-2xl">
		<h1 className="text-3xl font-semibold text-white mb-4">
        Terms & Conditions
		</h1>
        <p className="text-slate-300 mb-6">
          The information on this website is provided for general
          informational purposes only.
        </p>

        <p className="text-slate-300 mb-6">
          FirstStoneX makes no warranties regarding the completeness,
          accuracy or reliability of the information provided.
        </p>

        <p className="text-slate-300 mb-6">
          All content, including text, graphics, logos and software,
          is the property of FirstStoneX and may not be reproduced
          without prior written permission.
        </p>

        <p className="text-slate-300">
          By accessing this website, you agree to these Terms &
          Conditions and all applicable laws and regulations.
        </p>
      </div>
    </Layout>
  );
}

/* ---------------- ROUTER ---------------- */

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<Terms />} />
    </Routes>
  );
}