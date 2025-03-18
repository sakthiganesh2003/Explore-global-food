"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ChefSwiper from "@/component/ChefSwiper";
import Navbar from "@/component/navbar";
import Footer from "@/component/Footer";
import Hero from "@/component/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Main Content Wrapper */}
      <main className="flex-1">
        {/* Cuisine Showcase */}
        <div className="max-w-7xl mx-auto py-16 px-4 md:px-8 transition-shadow duration-300">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Explore Cuisines
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-800">
            {["Indian", "Japanese", "American", "Mexican", "French", "Thai"].map((cuisine, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img
                  src={`/${cuisine.toLowerCase()}.jpg`}
                  alt={cuisine}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-semibold">{cuisine}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div className="bg-[#2E4453] text-white p-10 flex flex-col md:flex-row items-center max-w-7xl mx-auto rounded-xl shadow-lg">
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bold">Garlic Stir-Fried Spinach</h2>
            <p className="text-lg text-gray-300">
              A foolproof way to sauté bright green, flavorful leafy greens.
            </p>
            <button className="bg-[#A88E6A] px-6 py-3 rounded-lg text-white font-semibold hover:bg-[#8a6c4a] transition">
              Get the Recipe
            </button>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <iframe
              className="w-full aspect-video rounded-lg shadow-md"
              src="https://www.youtube.com/embed/5rZ0Jqp1VcY"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Chef Swiper */}
        <div className="max-w-7xl mx-auto mt-16">
          <ChefSwiper />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
