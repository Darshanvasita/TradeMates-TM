"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AnimatedBannerProps {
  imageUrl: string;
  title: string;
  height?: string;
}

export function AnimatedBanner({ imageUrl, title, height = "h-[400px]" }: AnimatedBannerProps) {
  return (
    <div className={`relative ${height}`}>
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
      >
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative z-10 h-full flex items-center justify-center"
      >
        <h1 className="text-5xl font-bold text-white">{title}</h1>
      </motion.div>
    </div>
  );
}