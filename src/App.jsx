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

/* ---------------- GLOBAL LAYOUT ---------------- */

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-white text-slate-900">
      {children}
    </div>
  );
}

/* ---------------- NAV ---------------- */

function Nav() {
  return (
    <header className="flex justify-between items-center px-10 py-6 bg-white/60 backdrop-blur-xl border-b border-slate-200/60">
      <div className="font-semibold text-lg tracking-tight">
        FirstStoneX
      </div>

      <nav className="hidden md:flex gap-8 text-sm text-slate-600">
        <Link className="hover:text-slate-900" to="/">Home</Link>
        <Link className="hover:text-slate-900" to="/pricing">Pricing</Link>
        <Link className="hover:text-slate-900" to="/contact">Contact</Link>
        <Link className="hover:text-slate-900" to="/dashboard">Dashboard</Link>
      </nav>

      <Link
        to="/contact"
        className="px-4 py-2 rounded-xl bg-slate-900 text-white text-sm hover:opacity-90"
      >
        Get started
      </Link>
    </header>
  );
}

/* ---------------- HOME ---------------- */

function Home() {
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
          Financial infrastructure<br />
          for modern companies
        </motion.h1>

        <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg">
          Build secure, scalable and elegant financial systems inspired by
          the world’s best digital products.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link className="px-6 py-3 rounded-2xl bg-slate-900 text-white flex items-center gap-2">
            Get started <ArrowRight size={16} />
          </Link>

          <Link className="px-6 py-3 rounded-2xl border border-slate-300">
            Learn more
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">

        <Card icon={CreditCard} title="Payments" />
        <Card icon={BarChart3} title="Analytics" />
        <Card icon={Shield} title="Security" />
        <Card icon={Zap} title="Performance" />

      </section>
    </Layout>
  );
}

/* ---------------- CARD ---------------- */

function Card({ icon: Icon, title }) {
  return (
    <div className="p-6 rounded-3xl bg-white/70 border border-slate-200 shadow-sm hover:shadow-md transition backdrop-blur-xl">
      <Icon className="text-slate-700 mb-3" />
      <h3 className="font-medium text-slate-900">{title}</h3>
      <p className="text-slate-500 text-sm mt-2">
        Clean, scalable financial infrastructure.
      </p>
    </div>
  );
}

/* ---------------- PRICING ---------------- */

function Pricing() {
  return (
    <Layout>
      <Nav />

      <section className="px-6 py-20 text-center">
        <h1 className="text-4xl font-semibold">Pricing</h1>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mt-12">

          <Plan name="Starter" price="$0" />
          <Plan name="Pro" price="$29" highlight />
          <Plan name="Enterprise" price="Custom" />

        </div>
      </section>
    </Layout>
  );
}

function Plan({ name, price, highlight }) {
  return (
    <div className={`p-6 rounded-3xl border shadow-sm backdrop-blur-xl
      ${highlight ? "bg-white border-slate-300" : "bg-white/60 border-slate-200"}
    `}>
      <h3 className="font-medium">{name}</h3>
      <p className="text-3xl font-semibold mt-3">{price}</p>

      <ul className="mt-4 text-sm text-slate-600 space-y-2">
        <li className="flex gap-2"><Check size={16} /> Feature</li>
        <li className="flex gap-2"><Check size={16} /> Feature</li>
        <li className="flex gap-2"><Check size={16} /> Feature</li>
      </ul>

      <button className="mt-6 w-full py-2 rounded-xl bg-slate-900 text-white">
        Choose plan
      </button>
    </div>
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
          <p className="text-slate-500 mt-2 mb-6">
            We usually respond within 24 hours.
          </p>

          <div className="space-y-4">

            <input className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-300 outline-none" placeholder="Full name" />

            <input className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-300 outline-none" placeholder="Email" />

            <textarea className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-300 outline-none" rows="5" placeholder="Message" />

            <button className="w-full py-3 rounded-xl bg-slate-900 text-white hover:opacity-90">
              Send message
            </button>

          </div>

        </div>
      </section>
    </Layout>
  );
}

/* ---------------- DASHBOARD ---------------- */

function Dashboard() {
  return (
    <Layout>
      <Nav />

      <div className="flex">

        <aside className="w-64 min-h-screen bg-white/60 border-r border-slate-200 p-6 backdrop-blur-xl">
          <h2 className="font-semibold">Dashboard</h2>

          <nav className="mt-6 space-y-3 text-slate-600 text-sm">
            <p>Overview</p>
            <p>Payments</p>
            <p>Analytics</p>
            <p>Settings</p>
          </nav>
        </aside>

        <main className="flex-1 p-10">

          <h1 className="text-3xl font-semibold">Welcome back</h1>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <MiniCard title="Revenue" value="$12,430" />
            <MiniCard title="Transactions" value="1,240" />
            <MiniCard title="Success rate" value="99.2%" />

          </div>

        </main>

      </div>
    </Layout>
  );
}

function MiniCard({ title, value }) {
  return (
    <div className="p-6 rounded-3xl bg-white/70 border border-slate-200 shadow-sm backdrop-blur-xl">
      <p className="text-slate-500 text-sm">{title}</p>
      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  );
}

/* ---------------- LEGAL ---------------- */

function PrivacyPolicy() {
  return (
    <Layout>
      <Nav />
      <div className="p-10 max-w-2xl">
        <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
        <p className="text-slate-600">
          We protect your data according to modern privacy standards.
        </p>
      </div>
    </Layout>
  );
}

function Terms() {
  return (
    <Layout>
      <Nav />
      <div className="p-10 max-w-2xl">
        <h1 className="text-3xl font-semibold mb-4">Terms & Conditions</h1>
        <p className="text-slate-600">
          These terms govern your use of the platform.
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
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<Terms />} />
    </Routes>
  );
}