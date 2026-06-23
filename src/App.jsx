import { motion } from "framer-motion";
import { Routes, Route, Link } from "react-router-dom";
import {
  Globe,
  CreditCard,
  BarChart3,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

/* ---------------- LAYOUT APPLE ---------------- */

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-white text-slate-900">
      {children}
    </div>
  );
}

/* ---------------- NAV APPLE ---------------- */

function Nav() {
  return (
    <header className="flex justify-between items-center px-10 py-6 bg-white/70 backdrop-blur-xl border-b border-slate-200/60">
      <div className="text-lg font-semibold tracking-tight">
        FirstStoneX
      </div>

      <nav className="hidden md:flex gap-8 text-sm text-slate-600">
        <Link to="/" className="hover:text-slate-900">Home</Link>
        <Link to="/contact" className="hover:text-slate-900">Contact</Link>
      </nav>

      <Link
        to="/contact"
        className="px-4 py-2 rounded-xl bg-slate-900 text-white text-sm"
      >
        Get started
      </Link>
    </header>
  );
}

/* ---------------- HOME (TON CONTENU) ---------------- */

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
      <section className="text-center px-6 py-28">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight"
        >
          Modern financial & IT systems<br />
          built for scale
        </motion.h1>

        <p className="mt-8 text-lg text-slate-600 max-w-2xl mx-auto">
          We design enterprise-grade technology, payment infrastructure,
          and financial systems for global organizations.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-20 max-w-6xl mx-auto">

        <h2 className="text-3xl font-semibold text-center mb-12">
          Enterprise capabilities
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-white/70 border border-slate-200 shadow-sm backdrop-blur-xl hover:shadow-md transition"
            >
              <s.icon className="w-8 h-8 text-slate-700 mb-4" />

              <h3 className="text-lg font-semibold mb-2">
                {s.title}
              </h3>

              <p className="text-slate-600 text-sm">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24 max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-semibold mb-6">
          Built for enterprise transformation
        </h2>

        <p className="text-slate-600 leading-relaxed">
          FirstStoneX helps organizations modernize technology stacks,
          payment ecosystems, and financial operations with scalable,
          secure architecture and global delivery standards.
        </p>

      </section>

      {/* CONTACT CTA */}
      <section className="px-6 py-24 text-center">

        <h2 className="text-3xl font-semibold">
          Start your transformation
        </h2>

        <p className="text-slate-600 mt-4">
          Let’s design a scalable and secure system together.
        </p>

        <Link
          to="/contact"
          className="mt-8 inline-block px-6 py-3 rounded-xl bg-slate-900 text-white"
        >
          Contact us
        </Link>

      </section>
	  
	  
	        {/* FOOTER */}
      <footer className="border-t border-white/5 px-10 py-8 flex flex-col md:flex-row justify-between text-white/40 text-sm">

        <div className="hover:text-slate-900"> © {new Date().getFullYear()} FirstStoneX</div>

        <div className="flex gap-6 mt-4 md:mt-0">
          <Link to="/privacy-policy" className="hover:text-slate-900">
            Privacy Policy
          </Link>

          <Link to="/terms-and-conditions" className="hover:text-slate-900">
            Terms & Conditions
          </Link>
        </div>

      </footer>

    </Layout>
  );
}

/* ---------------- CONTACT (APPLE STYLE) ---------------- */

function Contact() {
  return (
    <Layout>

      <Nav />

      <section className="flex justify-center items-center py-20 px-6">

        <div className="w-full max-w-xl bg-white/70 border border-slate-200 rounded-3xl p-10 shadow-lg backdrop-blur-xl">

          <h1 className="text-3xl font-semibold">Contact us</h1>

          <p className="text-slate-600 mt-2 mb-6">
            Let’s discuss your project and build something scalable.
          </p>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Full name"
              className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-300 outline-none"
            />

            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-300 outline-none"
            />

            <textarea
              placeholder="Your message"
              rows="5"
              className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-300 outline-none"
            />

            <button
              type="button"
              className="w-full py-3 rounded-xl bg-slate-900 text-white hover:opacity-90"
            >
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
    <div className="min-h-screen bg-[#05070d] text-white p-10">
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
  );
}

function Terms() {
  return (
    <div className="min-h-screen bg-[#05070d] text-white p-10">
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