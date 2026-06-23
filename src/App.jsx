import { motion } from "framer-motion";
import {
  Globe,
  CreditCard,
  BarChart3,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

export default function App() {
  const services = [
    {
      icon: Globe,
      title: "Global IT Consulting",
      desc: "Enterprise architecture, digital transformation, and scalable systems.",
    },
    {
      icon: CreditCard,
      title: "Payment Solutions",
      desc: "Secure payment systems, PSP integration, and fintech innovation.",
    },
    {
      icon: BarChart3,
      title: "Finance & Investment",
      desc: "Strategic finance, trading systems, and investment analysis.",
    },
    {
      icon: Briefcase,
      title: "Program & Project Management",
      desc: "Agile delivery, PMO governance, and global transformation programs.",
    },
    {
      icon: ShieldCheck,
      title: "Risk & Compliance",
      desc: "Cybersecurity, governance, regulatory compliance, and operational resilience.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="text-center py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-white"
        >
          Global IT, Payments & Finance Expertise
        </motion.h1>

        <p className="mt-8 text-xl text-slate-300 max-w-3xl mx-auto">
          Delivering world-class consulting, payment transformation,
          financial technology solutions, and program management services
          across international markets.
        </p>

        <button className="mt-10 px-8 py-4 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
          Get In Touch
        </button>
      </section>


      {/* Services */}
      <section className="max-w-7xl mx-auto py-20 px-6">

        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Our Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition"
            >

              <service.icon className="w-10 h-10 text-blue-400 mb-4" />

              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-slate-400">
                {service.desc}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* About */}

      <section className="bg-slate-900 py-20 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-white">
            Who We Are
          </h2>

          <p className="mt-6 text-slate-300 text-lg">
            FirstStoneX is a global consulting firm specialized in
            Information Technology, Payment Systems, Financial Services,
            and Program Management.

            We help organizations transform technology platforms,
            modernize payment ecosystems, optimize financial operations,
            and successfully deliver strategic programs worldwide.
          </p>

        </div>

      </section>


      {/* Contact */}

      <section className="py-20 px-6 text-center">

        <h2 className="text-4xl font-bold text-white">
          Let's Build Something Global
        </h2>

        <p className="text-slate-400 mt-4">
          Reach out to discuss your next transformation program.
        </p>

        <button className="mt-8 px-8 py-4 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
          Get In Touch
        </button>

      </section>


      {/* Privacy Policy */}

      <section
        id="privacy"
        className="bg-slate-900 py-20 px-6"
      >

        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold text-white mb-8">
            Privacy Policy
          </h2>

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

      </section>


      {/* Terms & Conditions */}

      <section
        id="terms"
        className="py-20 px-6"
      >

        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold text-white mb-8">
            Terms & Conditions
          </h2>

          <p className="text-slate-300 mb-6">
            The information on this website is provided for general
            informational purposes only. FirstStoneX makes no warranties
            regarding the completeness, accuracy or reliability of the
            information provided.
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

      </section>


      {/* Footer */}

      <footer className="border-t border-slate-800 py-8 px-6 text-slate-500">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">

          <div>
            © {new Date().getFullYear()} FirstStoneX.
            All rights reserved.
          </div>

          <div className="flex gap-6 mt-4 md:mt-0">

            <a href="#privacy" className="hover:text-white transition">
              Privacy Policy
            </a>

            <a href="#terms" className="hover:text-white transition">
              Terms & Conditions
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
}

