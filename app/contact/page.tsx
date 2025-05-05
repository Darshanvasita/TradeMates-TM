"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { AnimatedBanner } from "@/components/animated-banner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { 
      repeat: Infinity, 
      repeatType: "reverse", 
      duration: 2 
    }
  };
  
  const floatAnimation = {
    y: [0, -10, 0],
    transition: { 
      repeat: Infinity, 
      repeatType: "reverse", 
      duration: 3,
      ease: "easeInOut" 
    }
  };
  
  const rotateAnimation = {
    rotate: [0, 10, 0, -10, 0],
    transition: { 
      repeat: Infinity, 
      duration: 5 
    }
  };

  return (
    <main className="pt-16">
      <AnimatedBanner
        imageUrl="https://sun1-26.userapi.com/s/v1/ig2/Zq8DhukiUwu0s5mNQvh5C7DOWZfoaYRRvNvBEm3bqOK7Xzct5qK5prMBFJwvvUsdcpYecZhtVgZhE8lefuJvK_fT.jpg?quality=96&as=32x19,48x28,72x42,108x63,160x93,240x140,360x210,480x280,540x315,640x373,720x419,1080x629,1280x746,1440x839,1806x1052&from=bu&u=yMjdG_gQG9qKZ-IZ7njCAsVC2toeuq3Bc4WjvZJUc-g&cs=807x470"
        title="Contact Us"
      />
      
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-3xl mx-auto text-center -mt-8 mb-12 px-4"
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-gray-100">
          <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-2">We&apos;re Here to Help</h2>
          <p className="text-gray-500">Reach out to our team through any of the channels below</p>
          
          <motion.div 
            className="flex justify-center gap-4 mt-4"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {["#9AC450", "#BFB840", "#F29C22"].map((color, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 + (index * 0.2), type: "spring", stiffness: 300 }}
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
        

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#9AC450] focus:border-[#9AC450]"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#9AC450] focus:border-[#9AC450]"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#9AC450] focus:border-[#9AC450]"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#9AC450] focus:border-[#9AC450]"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(154, 196, 80, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#9AC450] to-[#8AB440] text-white py-3 px-6 rounded-md transition-all duration-300 relative overflow-hidden group"
              >
                <motion.span
                  initial={{ x: "-100%", opacity: 0.3 }}
                  animate={{ 
                    x: ["100%", "-100%"],
                    transition: { 
                      repeat: Infinity, 
                      duration: 4,
                      ease: "linear" 
                    }
                  }}
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
                <span className="relative z-10 font-medium">Send Message</span>
              </motion.button>
            </form>
          </motion.div>
          
        </motion.div>
      </div>

      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center"
          >
            <motion.div 
              variants={fadeIn}
              transition={{ duration: 0.8 }}
              className="relative h-96 overflow-hidden rounded-lg"
            >
              <Image
                src="/api/placeholder/800/600"
                alt="Contact Us"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-lg"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="absolute inset-0 bg-gradient-to-r from-green-500/50 to-transparent"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                className="absolute bottom-6 right-6 bg-white rounded-full p-4 shadow-lg"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    transition: { repeat: Infinity, duration: 2 }
                  }}
                >
                  <MapPin className="w-8 h-8 text-green-500" />
                </motion.div>
              </motion.div>
            </motion.div>
    
            <motion.div 
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-6"
            >
              <h2 className="text-3xl font-bold mb-6">Visit Our Office</h2>
              <p className="text-gray-600 mb-8">
                Our team is ready to assist with your export needs. Reach out via phone or
                email and we&apos;ll respond promptly.
              </p>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-4"
              >
                <motion.div 
                  variants={fadeIn}
                  className="flex items-center"
                >
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white mr-4">
                    <a href="tel:+919867635052"><Phone size={20} /></a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">+91-9867635052</p>
                  </div>
                </motion.div>
    
                <motion.div 
                  variants={fadeIn}
                  className="flex items-center"
                >
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white mr-4">
                    
                    <a href="mailto:info@trademates.co.in"><Mail size={20} /></a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">info@trademates.co.in</p>
                  </div>
                </motion.div>
    
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 15px -3px rgba(34, 197, 94, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-8 rounded-md font-medium transition-all duration-300 relative overflow-hidden group"
                >
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ 
                      scale: 1.5, 
                      opacity: 0.2,
                      transition: { duration: 0.5 } 
                    }}
                    className="absolute inset-0 w-full h-full bg-white rounded-full"
                  />
                  <span className="relative z-10 flex items-center justify-center">
                    Get In Touch
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="ml-2"
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}