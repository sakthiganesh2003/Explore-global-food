"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="bg-white px-6 md:px-12 py-16 relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-[-1]">
        <video
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/vide/cook1.mp4" type="video/mp4" />
          {/* Fallback content in case the video fails to load */}
          <p>Your browser does not support the video tag or there was an error loading the video.</p>
        </video>
      </div>

      {/* Hero Section Layout */}
      <div className="flex flex-col md:flex-row items-center justify-between relative">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-center md:text-left relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            The Pleasant Experience <br />{" "}
            <span className="text-yellow-500">to Your Taste Buds</span>
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Exquisite food for your special dining experience. What do you want to order?
          </p>
          <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/order"
                className="bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-all"
              >
                Order Now
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/menu"
                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-300 transition-all"
              >
                Browse Menu
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Content - Animated Food Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative mt-10 md:mt-0 md:w-1/2 flex justify-center z-10"
        >
          <div className="relative w-[350px] h-[350px] rounded-full overflow-hidden shadow-lg">
            <Image
              src="/chef1.jpg"
              alt="Delicious Food"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute -bottom-5 -right-5 bg-red-100 px-4 py-2 rounded-lg shadow-md text-red-600 text-sm font-semibold"
          >
            🌶️ Spicy & Delicious
          </motion.div>
        </motion.div>
      </div>

      {/* Featured Dishes Section */}
    </div>
  );
};

export default HeroSection;
