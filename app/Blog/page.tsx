"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Globe, PackageCheck, ShieldCheck, TrendingUp } from "lucide-react";
import { AnimatedBanner } from "@/components/animated-banner";

const features = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Reach",
    description: "Export services covering major markets worldwide"
  },
  {
    icon: <PackageCheck className="w-6 h-6" />,
    title: "Quality Assurance",
    description: "Strict quality control measures for all exports"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Compliance",
    description: "Full compliance with international trade regulations"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Growth",
    description: "Continuous expansion of export markets"
  }
];

export default function ExportsPage() {
  return (
    <main className="pt-16">
      <AnimatedBanner
        imageUrl="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2574"
        title="Export Services"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Global Export Excellence</h2>
              <p className="text-gray-600 mb-4">
                Our export services ensure that premium fruits, vegetables, and juices reach international markets while maintaining their freshness and quality. We handle all aspects of the export process, from documentation to delivery.
              </p>
              <p className="text-gray-600">
                With established relationships in major markets worldwide, we provide reliable and efficient export solutions for our clients.
              </p>
            </div>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1586528116493-ce42b0f3a3ed?q=80&w=2574"
                alt="Export Operations"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Export Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-[#9AC450] rounded-full flex items-center justify-center mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}