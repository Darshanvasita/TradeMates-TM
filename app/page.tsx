"use client";

import { ArrowDown, Leaf, Truck, Users } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574"
            alt="Fresh Produce"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Global Trade Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Your trusted partner in international trade of premium fruits, vegetables, and juices
          </p>
          <button className="bg-[#9AC450] hover:bg-[#8AB440] text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors flex items-center mx-auto gap-2">
            Explore Our Products
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F29C22] rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Premium Quality</h3>
              <p className="text-gray-600">
                Handpicked selection of the finest fruits and vegetables
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#BFB840] rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Global Delivery</h3>
              <p className="text-gray-600">
                Efficient worldwide shipping and logistics solutions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B7E6A] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Customer First</h3>
              <p className="text-gray-600">
                Dedicated support and personalized service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About TradeMates</h2>
              <p className="text-gray-600 mb-6">
                With years of experience in international trade, TradeMates has established itself as a leading exporter of premium fruits, vegetables, and juices. Our commitment to quality and customer satisfaction sets us apart in the global market.
              </p>
              <button className="bg-[#9AC450] hover:bg-[#8AB440] text-white px-6 py-3 rounded-full font-semibold transition-colors">
                Learn More About Us
              </button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=2574"
                alt="Warehouse Operations"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}