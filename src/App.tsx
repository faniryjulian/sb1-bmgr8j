import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Schedule } from './components/Schedule';
import { Artists } from './components/Artists';
import { PracticalInfo } from './components/PracticalInfo';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#350B89]">
      <Header />
      <main>
        <Hero />
        <Schedule />
        <Artists />
        <PracticalInfo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;