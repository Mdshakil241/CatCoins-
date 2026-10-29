import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Tokenomics } from './components/Tokenomics';
import { Roadmap } from './components/Roadmap';
import { Community } from './components/Community';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showNotification = (message: string) => {
    setToastMessage(message);
  };

  return (
    <div className="min-h-screen w-full max-w-full bg-[#090A0F] text-[#F3F4F6] selection:bg-[#F3BA2F] selection:text-black flex flex-col font-sans overflow-x-hidden min-w-0">
      {/* Skip to Main Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#F3BA2F] focus:text-black focus:font-bold focus:rounded-lg shadow-xl"
      >
        Skip to main content
      </a>

      {/* Top Bar Navigation */}
      <Navbar onNotify={showNotification} />

      {/* Main Content Landmark with safe overflow constraints */}
      <main id="main-content" className="flex-1 w-full max-w-full overflow-x-hidden min-w-0">
        <Hero onNotify={showNotification} />
        <About />
        <Tokenomics onNotify={showNotification} />
        <Roadmap />
        <Community onNotify={showNotification} />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Interactive Toast Feedbacks */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
}
