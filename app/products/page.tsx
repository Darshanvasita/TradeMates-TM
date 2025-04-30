"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedBanner } from "@/components/animated-banner";

const products = [
  {
    category: "Fruits",
    items: [
      { name: "Fresh Apples", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=2574" },
      { name: "Premium Oranges", image: "https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=2574" },
      { name: "Organic Bananas", image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=2574" },
    ]
  },
  {
    category: "Vegetables",
    items: [
      { name: "Fresh Tomatoes", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=2574" },
      { name: "Organic Carrots", image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=2574" },
      { name: "Premium Lettuce", image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?q=80&w=2574" },
    ]
  },
  {
    category: "Juices",
    items: [
      { name: "Orange Juice", image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=2574" },
      { name: "Apple Juice", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2574" },
      { name: "Mixed Fruit Juice", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=2574" },
    ]
  }
];

export default function ProductsPage() {
  return (
    <main className="pt-16">
      <AnimatedBanner
        imageUrl="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574"
        title="Our Products"
        height="h-[300px]"
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        {products.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: itemIndex * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <div className="relative h-[300px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}