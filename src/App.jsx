import { Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CreditCard,
  BarChart3,
  Shield,
  Zap,
} from "lucide-react";

/* ---------------- NAV HELP ---------------- */

function Nav() {
  return (
    <header className="flex justify-between items-center px-10 py-6 border-b border-white/5">
      <div className="text-lg font-semibold">FirstStoneX</div>

      <nav className="hidden md:flex gap-8 text-white/60 text-sm">
        <Link to="/" className="hover:text-white">Home</Link>
        <Link to="/pricing" className="hover:text-white">Pricing</Link>
        <Link to="/contact" className="hover:text-white">Contact</Link>
        <Link to="/dashboard" className="hover:text-white">Dashboard</Link>
      </nav>

      <Link
        to="/contact"
        className="px-4 py-2 rounded-lg bg-white text-black text-sm font-medium"
      >
        Get started
      </Link>
    </header>
  );
}

/* ---------------- HOME ---------------- */

function Home() {
  return (
    <div className="min-h-screen bg-[#05070d] text-white overflow-hidden">

      <Nav />

      {/* HERO */}
      <section className="text-center px-6 py-28">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-semibold"
        >
          Financial infrastructure<br />
          for modern businesses
        </motion.h1>

        <p className="text-white/60 mt-6 max-w-2xl mx-auto">
          Build scalable payment systems, fintech platforms and enterprise solutions.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link to="/pricing" className="px-6 py-3 bg-blue-600 rounded-xl flex items-center gap-2">
            Get started <ArrowRight size={16} />
          </Link>

          <Link to="/contact" className="px-6 py-3 border border-white/10 rounded-xl">
            Contact sales
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-6">

        <Feature icon={CreditCard} title="Payments" />
        <Feature icon={BarChart3} title="Analytics" />
        <Feature icon={Shield} title="Security" />
        <Feature icon={Zap} title="Performance" />

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-10 py-8 flex justify-between text-white/40 text-sm">
        <div>© {new Date().getFullYear()} FirstStoneX</div>

        <div className="flex gap-6">
          <Link to="/privacy-policy" className="hover:text-white">Privacy</Link>
          <Link to="/terms-and-conditions" className="hover:text-white">Terms</Link>
        </div>
      </footer>

    </div>
  );
}

/* ---------------- FEATURE CARD ---------------- */

function Feature({ icon: Icon, title }) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition">
      <Icon className="text-blue-400 mb-3" />
      <h3 className="text-white font-medium">{title}</h3>
      <p className="text-white/60 text-sm mt-2">
        Enterprise-grade infrastructure.
      </p>
    </div>
  );
}

/* ---------------- PRICING ---------------- */

function Pricing() {
  return (
    <div className="min-h-screen bg-[#05070d] text-white px-6 py-20">

      <h1 className="text-4xl font-semibold text-center mb-12">
        Pricing
      </h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

        <Plan name="Starter" price="$0" />
        <Plan name="Pro" price="$29" highlight />
        <Plan name="Enterprise" price="Custom" />

      </div>
    </div>
  );
}

function Plan({ name, price, highlight }) {
  return (
    <div className={`p-6 rounded-2xl border backdrop-blur-xl
      ${highlight ? "bg-blue-500/10 border-blue-500/40" : "bg-white/5 border-white/10"}
    `}>
      <h3 className="text-lg font-medium">{name}</h3>
      <p className="text-3xl font-semibold mt-3">{price}</p>

      <ul className="mt-4 space-y-2 text-white/60 text-sm">
        <li className="flex gap-2"><Check size={16} /> Feature</li>
        <li className="flex gap-2"><Check size={16} /> Feature</li>
        <li className="flex gap-2"><Check size={16} /> Feature</li>
      </ul>

      <button className="mt-6 w-full py-2 rounded-lg bg-white text-black">
        Choose plan
      </button>
    </div>
  );
}

/* ---------------- CONTACT (ULTRA PREMIUM) ---------------- */

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05070d] text-white px-6">

      <div className="w-full max-w-xl p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl">

        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="text-white/60 mt-2 mb-6">
          Let’s build something scalable.
        </p>

        <div className="space-y-4">

          <input className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-blue-500/30 outline-none" placeholder="Name" />

          <input className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-cyan-500/30 outline-none" placeholder="Email" />

          <textarea className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-purple-500/30 outline-none" rows="5" placeholder="Message" />

          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500">
            Send message
          </button>

        </div>
      </div>

    </div>
  );
}

/* ---------------- DASHBOARD ---------------- */

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#05070d] text-white flex">

      <div className="w-64 border-r border-white/10 p-6">
        <h2 className="text-lg font-semibold">Dashboard</h2>

        <nav className="mt-6 space-y-3 text-white/60 text-sm">
          <p>Overview</p>
          <p>Payments</p>
          <p>Analytics</p>
          <p>Settings</p>
        </nav>
      </div>

      <div className="flex-1 p-10">

        <h1 className="text-3xl font-semibold">Welcome back</h1>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card title="Revenue" value="$12,430" />
          <Card title="Transactions" value="1,240" />
          <Card title="Success rate" value="99.2%" />
        </div>

      </div>

    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
      <p className="text-white/60 text-sm">{title}</p>
      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  );
}

/* ---------------- LEGAL PAGES ---------------- */

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
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<Terms />} />
    </Routes>
  );
}