"use client";


import React, { useEffect } from 'react'
import About from '../components/LandingPage/About'
import CoreValues from '../components/CoreValues'
import WhyChooseUs from '../components/WhyChooseUs'
import VisionMission from '../components/VisionMission'
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutWebsiteStats from '../components/AboutWebsiteStats';
import Partners from '../components/Patners/Partners';
import Hero from '../components/LandingPage/Hero';




const page = () => {


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='bg-white w-full min-h-screen'>
      <Hero />
      <About />
      <CoreValues />
      <WhyChooseUs />
      <VisionMission />
      <AboutWebsiteStats />
      <Partners />
    </div>
  )
}

export default page