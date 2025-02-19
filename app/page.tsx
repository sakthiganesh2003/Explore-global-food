"use client";
import { Share } from 'next/font/google';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ChefSwiper from "@/app/component/ChefSwiper";
import navbar from "@/app/component/navbar";
import Navbar from '@/app/component/navbar';
import Footer from '@/app/component/Footer';
import Hero from '@/app/component/homepage/Hero';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
   

      <Navbar />
    
    

      {/* Hero Section */}
      <Hero/>

      {/* Cuisine Showcase */}
      <div className="container mx-auto py-16 px-4 hover:shadow-xl transition-shadow duration-300">
        
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Explore Cuisines</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-800 ">
          {['Indian', 'Japan', 'Amarican', 'Mexican', 'French', 'Thai'].map((cuisine, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img src={`/${cuisine.toLowerCase()}.jpg`} alt={cuisine} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold">{cuisine}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-[#2E4453] text-white p-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-bold">Garlic Stir-Fried Spinach</h2>
          <p>A foolproof way to sauté bright green, flavorful leafy greens.</p>
          <button className="bg-[#A88E6A] px-4 py-2 rounded-md">Get the Recipe</button>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <iframe className="w-full aspect-video rounded-lg" src="https://www.youtube.com/embed/5rZ0Jqp1VcY" allowFullScreen></iframe>
        </div>
      </div>

      {/* Chef Swiper */}
      <ChefSwiper />
      <div>
      
      </div>

      

      {/* Footer */}
      <Footer/>
    </div>
  );
}
