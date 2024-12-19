import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Program from '../components/Program';
import Reviews from '../components/Reviews';
import NewEra from '../components/NewEra';
import StartLearning from '../components/StartLearning';
import Audience from '../components/Audience';
import Enrollment from '../components/Enrollment';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Features />
      <Program />
      <Audience />
      <NewEra />
      <StartLearning />
      <Enrollment />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
}