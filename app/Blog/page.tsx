"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Globe, PackageCheck, ShieldCheck, TrendingUp, Phone, Mail, TrendingUpIcon, BarChart3 } from "lucide-react";
import { AnimatedBanner } from "@/components/animated-banner";
import { useEffect, useState, useRef } from "react";

const blogPosts = [
  {
    image: 'https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1402625142/image_1402625142.jpg?io=getty-c-w1536',
    title: 'Earth Day Promise to Empower Farmers & the Planet | ',
    link: '#',
  },
  {
    image: 'https://sun9-80.userapi.com/impg/vKsAyDdBmYKVWHQhO87lBsu_0EBM6Zxhf-wEtw/onXFBZ2DDdk.jpg?size=870x489&quality=95&sign=ab6f3dd0f3396a9d2f485911cd037b82&c_uniq_tag=a83mC8XEoyYqvCNlSX92j3E4-Y__xN_QUPE7YJ0FH7g&type=album',
    title: 'Muskmelon Magic: The Refreshing Summer Superfruit You Need from ',
    link: '#',
  },
  {
    image: 'https://play-lh.googleusercontent.com/98bvz_3gxEZxW-TNy3j0MWdS3dlyt3Xw65_CwHIXd7lHKqW_oZgyZ3fH4m0ptN4mCfGN',
    title: 'Top Mango Exporters in India: Why  Delivers the Best Quality Worldwide?',
    link: '#',
  },
  {
    image: 'https://klenshop.ru/images/virtuemart/product/resized/mangoes_380x380.jpg',
    title: 'Alphonso Mangoes: The King of Fruits in India',
    link: '#',
  },
];

const products = [
  {
    name: 'Fresh Fruits',
    image: 'https://fruit-island.ru/images/upload/14418.jpg',
    description: 'Discover high-quality Fresh Fruits with premium freshness and value.'
  },
  {
    name: 'Dehydrated Food',
    image: 'https://avatars.mds.yandex.net/get-altay/2366463/2a00000174346ce1f341b05a5083c94d9c4f/XXL_height',
    description: 'Discover high-quality Dehydrated Food with premium quality and shelf life.'
  },
  {
    name: 'Vegetables',
    image: 'https://spb.selhozproduct.ru/upload/usl/f_60ae88d7f0f3e.jpg',
    description: 'Discover high-quality Vegetables with premium freshness and nutritional value.'
  },
  {
    name: 'Flours',
    image: 'https://irk.selhozproduct.ru/upload/usl/f_62544e27bdad2.jpg',
    description: 'Discover high-quality Flours with premium consistency and purity.'
  },
  {
    name: 'Frozen Foods',
    image: 'https://isbh.tmgrup.com.tr/sbh/2021/07/18/650x344/meyve-sebze-mamulleri-sektoru-ocak-haziran-donemin-1626601514071.jpg',
    description: 'Discover high-quality Frozen Foods with premium taste and convenience.'
  },
  {
    name: 'Juices and Pulp',
    image: 'https://avatars.mds.yandex.net/get-altay/226077/2a0000015ebed1ebcea6b7208fa72ab66aed/XXL_height',
    description: 'Discover high-quality Juices and Pulp with premium flavor and authenticity.'
  }
];

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

// Sample export data for live charts
const exportGrowthData = [
  { month: 'Jan', amount: 120 },
  { month: 'Feb', amount: 180 },
  { month: 'Mar', amount: 150 },
  { month: 'Apr', amount: 210 },
  { month: 'May', amount: 240 },
  { month: 'Jun', amount: 280 },
  { month: 'Jul', amount: 320 },
  { month: 'Aug', amount: 290 },
  { month: 'Sep', amount: 350 },
  { month: 'Oct', amount: 380 },
  { month: 'Nov', amount: 420 },
  { month: 'Dec', amount: 450 },
];

const exportDestinations = [
  { country: 'USA', percentage: 30 },
  { country: 'Europe', percentage: 25 },
  { country: 'UAE', percentage: 15 },
  { country: 'Australia', percentage: 10 },
  { country: 'Japan', percentage: 12 },
  { country: 'Others', percentage: 8 },
];

// Live Line Chart Component
const LiveLineChart = () => {
  const [points, setPoints] = useState([]);
  const [counter, setCounter] = useState(0);
  const chartRef = useRef(null);
  
  // Generate SVG path from points
  const generatePath = (points) => {
    if (points.length < 2) return '';
    return points.map((point, i) => `${i === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ');
  };
  
  // Update chart with new data point
  useEffect(() => {
    const interval = setInterval(() => {
      if (chartRef.current) {
        const width = chartRef.current.clientWidth;
        const height = chartRef.current.clientHeight;
        
        // Generate a new data point
        const newPoint = {
          x: (counter % 100) * (width / 100),
          y: height - (Math.sin(counter / 10) * (height / 4) + (height / 2)) - (Math.random() * 20)
        };
        
        // Add new point and remove old ones if too many
        setPoints(prev => {
          const newPoints = [...prev, newPoint];
          if (newPoints.length > 100) {
            return newPoints.slice(-100);
          }
          return newPoints;
        });
        
        setCounter(prev => prev + 1);
      }
    }, 150);
    
    return () => clearInterval(interval);
  }, [counter]);
  
  return (
    <div ref={chartRef} className="w-full h-64 bg-white rounded-lg p-4 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <TrendingUpIcon className="w-5 h-5 text-green-500 mr-2" />
          <h3 className="font-semibold text-lg">Live Export Activity</h3>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-1 animate-pulse"></div>
          <span className="text-xs text-gray-500">Live</span>
        </div>
      </div>
      
      <div className="relative h-48">
        <svg width="100%" height="100%" className="overflow-visible">
          {/* Grid lines */}
          {[...Array(5)].map((_, i) => (
            <line 
              key={`grid-${i}`}
              x1="0" 
              y1={i * 48 / 4} 
              x2="100%" 
              y2={i * 48 / 4} 
              stroke="#e5e7eb" 
              strokeWidth="1"
            />
          ))}
          
          {/* Path for the line chart */}
          <path
            d={generatePath(points)}
            fill="none"
            stroke="#9AC450"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Gradient area under the line */}
          <path
            d={`${generatePath(points)} L ${points.length > 0 ? points[points.length-1].x : 0} 48 L ${points.length > 0 ? points[0].x : 0} 48 Z`}
            fill="url(#greenGradient)"
            opacity="0.2"
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#9AC450" />
              <stop offset="100%" stopColor="#9AC450" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Data point dots - show only every 5th point for cleaner look */}
          {points.filter((_, i) => i % 5 === 0 || i === points.length - 1).map((point, i) => (
            <circle
              key={i}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="white"
              stroke="#9AC450"
              strokeWidth="2"
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

// Animation variants
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

const cardHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.3 } }
};

export default function ExportsPage() {
  return (
    <main className="pt-16 overflow-hidden">
      <AnimatedBanner
        imageUrl="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2574"
        title="Export Services"
      />

      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeIn}
        className="bg-green-500 text-white text-center py-16"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Quality You Can Trust, Delivered Fresh.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-lg leading-relaxed"
          >
            At TradeMates quality is paramount. We implement stringent quality
            control measures throughout the entire supply chain, ensuring the
            highest international standards.
          </motion.p>
        </div>
      </motion.section>

      {/* Global Export Excellence Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeIn} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl font-bold mb-6">Global Export Excellence</h2>
              <p className="text-gray-600 mb-4">
                Our export services ensure that premium fruits, vegetables, and juices reach international markets while maintaining their freshness and quality. We handle all aspects of the export process, from documentation to delivery.
              </p>
              <p className="text-gray-600">
                With established relationships in major markets worldwide, we provide reliable and efficient export solutions for our clients.
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] overflow-hidden rounded-lg"
            >
              <Image
                src="https://images.theconversation.com/files/232892/original/file-20180821-149487-16ehqnj.jpg?ixlib=rb-4.1.0&amp;rect=85%2C124%2C5090%2C2545&amp;q=45&amp;auto=format&amp;w=1356&amp;h=668&amp;fit=crop"
                alt="Export Operations"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-lg"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Export Services Section */}
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
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <motion.div 
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="w-12 h-12 bg-[#9AC450] rounded-full flex items-center justify-center mb-4 text-white"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Products
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="rest"
                whileHover="hover"
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <motion.div className="h-48 relative" variants={cardHover}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </motion.div>
                <motion.div 
                  className="p-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl font-semibold">{product.name}</h2>
                  <p className="text-gray-600">{product.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Latest News & Updates
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col"
              >
                <div className="h-48 relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    className="text-green-500 hover:underline mt-auto inline-block"
                    href={post.link}
                  >
                    Read more
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Data Visualization Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Export Performance Metrics
          </motion.h2>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Live Line Chart */}
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <LiveLineChart />
            </motion.div>
            
            {/* Bar Chart */}
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md p-4"
            >
              <div className="flex items-center mb-4">
                <BarChart3 className="w-5 h-5 text-green-500 mr-2" />
                <h3 className="font-semibold text-lg">Export Destinations</h3>
              </div>
              
              <div className="space-y-4">
                {exportDestinations.map((item, index) => (
                  <motion.div 
                    key={item.country}
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${item.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pt-1"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{item.country}</span>
                      <span className="text-sm font-medium text-gray-700">{item.percentage}%</span>
                    </div>
                    <div className="flex h-4 overflow-hidden rounded bg-gray-100">
                      <div
                        style={{ width: `${item.percentage}%` }}
                        className="bg-gradient-to-r from-green-400 to-green-600 shadow-lg rounded flex items-center justify-center text-xs text-white"
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Stats Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
          >
            {[
              { label: "Countries Served", value: "30+", color: "from-green-400 to-green-600" },
              { label: "Export Growth", value: "27%", color: "from-blue-400 to-blue-600" },
              { label: "Product Categories", value: "7", color: "from-yellow-400 to-yellow-600" },
              { label: "Quality Rating", value: "4.9/5", color: "from-purple-400 to-purple-600" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeIn}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                className="bg-white p-4 rounded-lg shadow-sm"
              >
                <motion.h3
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`text-3xl font-bold mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center"
          >
            <motion.div 
              variants={fadeIn}
              transition={{ duration: 0.8 }}
              className="relative h-96 overflow-hidden rounded-lg"
            >
              <Image
                src="/images/greenhouse-contact.jpg"
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
            </motion.div>

            <motion.div 
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-6"
            >
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-8">
                Our team is ready to assist with your export needs. Reach out via phone or
                email and we'll respond promptly.
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
                    <Phone size={20} />
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
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">info@mkexports.co.in</p>
                  </div>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md font-medium transition-colors duration-300"
                >
                  Get In Touch
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}