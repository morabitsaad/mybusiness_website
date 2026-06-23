import { motion } from "framer-motion";
import { Routes, Route, Link } from "react-router-dom";
import {
  Globe,
  CreditCard,
  BarChart3,
  Briefcase,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

/* ---------------- HOME ---------------- */

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
    <div className="min-h-screen bg-[#05070d] text-white overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_40%)]" />

      {/* NAV */}
      <header className="relative flex justify-between items-center px-10 py-6 border-b border-white/5">
        <div className="text-xl font-semibold">FirstStoneX</div>

        <nav className="hidden md:flex gap-8 text-sm text-white/60">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>


      </header>

      {/* HERO */}
      <section className="relative text-center px-6 py-28">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-semibold leading-tight text-white"
        >
          Modern financial & IT systems<br />
          built for scale
        </motion.h1>

        <p className="mt-8 text-lg text-white/60 max-w-2xl mx-auto">
          We design enterprise-grade technology, payment infrastructure,
          and financial systems for global organizations.
        </p>

  
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-20 max-w-6xl mx-auto">

        <h2 className="text-3xl font-semibold text-white text-center mb-12">
          Enterprise capabilities
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition"
            >
              <s.icon className="w-8 h-8 text-blue-400 mb-4" />

              <h3 className="text-lg font-semibold text-white mb-2">
                {s.title}
              </h3>

              <p className="text-white/60 text-sm">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24 max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-semibold text-white mb-6">
          Built for enterprise transformation
        </h2>

        <p className="text-white/60 leading-relaxed">
          FirstStoneX helps organizations modernize technology stacks,
          payment ecosystems, and financial operations with scalable,
          secure architecture and global delivery standards.
        </p>

      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24 text-center">

        <h2 className="text-3xl font-semibold text-white">
          Start your transformation
        </h2>

        <p className="text-white/60 mt-4">
          Let’s design a scalable and secure system together.
        </p>

		<Link
		  to="/contact"
		  className="mt-8 inline-block px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition"
		>
		  Contact us
		</Link>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-10 py-8 flex flex-col md:flex-row justify-between text-white/40 text-sm">

        <div>© {new Date().getFullYear()} FirstStoneX</div>

        <div className="flex gap-6 mt-4 md:mt-0">
          <Link to="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>

          <Link to="/terms-and-conditions" className="hover:text-white">
            Terms & Conditions
          </Link>
        </div>

      </footer>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />

    </div>
  );
}

/* ---------------- PAGES ---------------- */

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


function Contact() {
  return (
    <div className="min-h-screen bg-[#05070d] text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full">

        <h1 className="text-4xl font-semibold text-white mb-4">
          Contact us
        </h1>

        <p className="text-white/60 mb-8">
          Let’s discuss your project and build something scalable.
        </p>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Full name"
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white outline-none"
          />

          <input
            type="email"
            placeholder="Email address"
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white outline-none"
          />

          <textarea
            placeholder="Your message"
            rows="5"
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white outline-none"
          />

          <button
            type="button"
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition"
          >
            Send message
          </button>

        </form>

      </div>
    </div>
  );
}
/* ---------------- ROUTER ---------------- */

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<Terms />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}