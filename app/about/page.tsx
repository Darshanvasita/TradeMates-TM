"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Clock, Globe, Truck, Users } from "lucide-react";
import { AnimatedBanner } from "@/components/animated-banner";

export default function AboutPage() {
  return (
    <main className="pt-16">
      <AnimatedBanner
        imageUrl="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574"
        title="About TradeMates"
      />

      {/* Company Overview */}
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
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                TradeMates has been at the forefront of international trade since our inception. We specialize in the export of premium fruits, vegetables, and juices, connecting quality producers with global markets.
              </p>
              <p className="text-gray-600">
                Our commitment to quality and customer satisfaction has made us a trusted partner for businesses worldwide. We ensure that every product meets the highest standards of quality and freshness.
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
                src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=2574"
                alt="Our Story"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: <Globe className="w-8 h-8 text-white" />, number: "50+", text: "Countries Served", color: "bg-[#9AC450]" },
              { icon: <Users className="w-8 h-8 text-white" />, number: "1000+", text: "Happy Clients", color: "bg-[#BFB840]" },
              { icon: <Truck className="w-8 h-8 text-white" />, number: "5M+", text: "Products Delivered", color: "bg-[#F29C22]" },
              { icon: <Clock className="w-8 h-8 text-white" />, number: "15+", text: "Years Experience", color: "bg-[#8B7E6A]" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}