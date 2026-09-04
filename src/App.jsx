import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from './components/sections/HeroSection';
import ProblemStatement from './components/sections/ProblemStatement';
import ArchitectureStack from './components/sections/ArchitectureStack';
import ScenarioShowcase from './components/sections/ScenarioShowcase';
import SensorFusion from './components/sections/SensorFusion';
import PredictionEngine from './components/sections/PredictionEngine';
import PathPlanning from './components/sections/PathPlanning';
import TechStack from './components/sections/TechStack';
import MetricsDashboard from './components/sections/MetricsDashboard';
import Team from './components/sections/Team';
import DemoVideo from './components/sections/DemoVideo';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Simulate loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll for navbar and cursor tracker
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            style={{
              position: 'fixed', inset: 0, background: 'var(--color-bg-base)', zIndex: 9999,
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
            }}
          >
            {/* Lidar Scan Animation */}
            <div style={{ position: 'relative', width: '100px', height: '100px', borderRadius: '50%', border: '1px solid rgba(0,229,255,0.3)', marginBottom: '2rem' }}>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                style={{ position: 'absolute', top: '50%', left: '50%', width: '50%', height: '2px', background: 'linear-gradient(90deg, transparent, var(--color-primary))', transformOrigin: 'left center' }}
              />
              <div style={{ position: 'absolute', inset: '45%', background: 'var(--color-primary)', borderRadius: '50%', boxShadow: '0 0 15px var(--color-primary)' }} />
            </div>
            <h2 className="font-mono glitch-effect" style={{ color: 'var(--color-primary)', fontSize: '1.2rem', letterSpacing: '0.1em' }}>
              INITIALIZING NAVDRISHTI...
            </h2>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <div style={{ position: 'relative' }}>
          
          {/* Custom Lidar Cursor Trail (Desktop only) */}
          <div className="cursor-trail" style={{
            position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9998,
            transform: `translate(${mousePosition.x - 150}px, ${mousePosition.y - 150}px)`,
            width: '300px', height: '300px',
            background: 'radial-gradient(circle, rgba(0,229,255,0.05) 0%, transparent 60%)',
            transition: 'transform 0.1s ease-out'
          }} />

          {/* Floating Navigation */}
          <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
              position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
              padding: '1rem 2rem',
              background: scrolled ? 'rgba(10, 14, 26, 0.8)' : 'transparent',
              backdropFilter: scrolled ? 'blur(12px)' : 'none',
              borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
              transition: 'all 0.3s ease',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--color-primary)', boxShadow: '0 0 10px var(--color-primary)' }} />
              <span className="font-heading" style={{ fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '0.05em' }}>NAVDRISHTI</span>
            </div>
            <div style={{ display: 'none', gap: '2rem', fontSize: '0.9rem', color: 'var(--color-text-muted)', '@media(min-width: 768px)': { display: 'flex' } }}>
              <span style={{ cursor: 'pointer', color: 'var(--color-text-main)' }}>Overview</span>
              <span style={{ cursor: 'pointer' }} className="nav-link">Architecture</span>
              <span style={{ cursor: 'pointer' }} className="nav-link">Scenarios</span>
              <span style={{ cursor: 'pointer' }} className="nav-link">Metrics</span>
            </div>
            <button style={{ padding: '0.5rem 1rem', background: 'rgba(0,229,255,0.1)', border: '1px solid var(--color-primary)', color: 'var(--color-primary)', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 'bold' }}>
              LIVE DEMO
            </button>
          </motion.nav>

          <main>
            <HeroSection />
            <ProblemStatement />
            <ArchitectureStack />
            <ScenarioShowcase />
            <SensorFusion />
            <PredictionEngine />
            <PathPlanning />
            <TechStack />
            <MetricsDashboard />
            <DemoVideo />
            <Team />
          </main>
          
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
