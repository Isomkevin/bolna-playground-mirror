
import React from 'react';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import UseCases from '@/components/landing/UseCases';
import Benefits from '@/components/landing/Benefits';
import CallToAction from '@/components/landing/CallToAction';
import Footer from '@/components/landing/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <UseCases />
        <Benefits />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
