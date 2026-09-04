import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useDevice } from './hooks/useDevice';

// Components
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
import NavigationMenu from './components/NavigationMenu';
import SectionModal from './components/SectionModal';

function App() {
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const { isLowEnd } = useDevice();

  // Simulate loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handle cursor tracker
  useEffect(() => {
    if (isLowEnd) return; // Disable tracker on low-end
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isLowEnd]);

  const handleMenuSelect = (sectionId) => {
    setIsMenuOpen(false);
    if (sectionId === 'home') {
      setActiveModal(null);
    } else {
      setActiveModal(sectionId);
    }
  };

  const renderActiveSection = () => {
    switch (activeModal) {
      case 'problem': return <ProblemStatement />;
      case 'architecture': return <ArchitectureStack />;
      case 'scenarios': return <ScenarioShowcase />;
      case 'sensor-fusion': return <SensorFusion />;
      case 'prediction': return <PredictionEngine />;
      case 'path-planning': return <PathPlanning />;
      case 'tech-stack': return <TechStack />;
      case 'metrics': return <MetricsDashboard />;
      case 'team': return <Team />;
      case 'video': return <DemoVideo />;
      default: return null;
    }
  };

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
            style={{
              position: 'fixed', inset: 0, background: 'var(--color-bg-base)', zIndex: 'var(--z-top)',
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
            }}
          >
            {/* Lidar Scan Animation */}
            <div style={{ position: 'relative', width: '100px', height: '100px', borderRadius: '50%', border: '1px solid rgba(0,229,255,0.3)', marginBottom: 'var(--space-4)' }}>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                style={{ position: 'absolute', top: '50%', left: '50%', width: '50%', height: '2px', background: 'linear-gradient(90deg, transparent, var(--color-primary))', transformOrigin: 'left center' }}
              />
              <div style={{ position: 'absolute', inset: '45%', background: 'var(--color-primary)', borderRadius: '50%', boxShadow: '0 0 15px var(--color-primary)' }} />
            </div>
            <h2 className="font-mono glitch-effect text-caption" style={{ color: 'var(--color-primary)', fontSize: '1.2rem', letterSpacing: '0.1em' }}>
              INITIALIZING NAVDRISHTI...
            </h2>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <div style={{ position: 'relative', width: '100vw', height: '100dvh', overflow: 'hidden' }}>
          
          {/* Custom Lidar Cursor Trail (Desktop only) */}
          {!isLowEnd && (
            <div className="cursor-trail" style={{
              position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 'var(--z-top)',
              transform: `translate(${mousePosition.x - 150}px, ${mousePosition.y - 150}px)`,
              width: '300px', height: '300px',
              background: 'radial-gradient(circle, rgba(0,229,255,0.05) 0%, transparent 60%)',
              transition: 'transform 0.1s ease-out'
            }} />
          )}

          {/* Top-Right Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="hamburger-btn btn btn-outline surface-level-1"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            style={{
              position: 'fixed',
              borderRadius: '50%',
              padding: 0,
              color: 'var(--color-primary)',
              borderColor: 'rgba(0,229,255,0.3)'
            }}
          >
            <Menu size={24} aria-hidden="true" />
          </button>

          {/* Base Layer: Hero Section */}
          <main style={{ position: 'absolute', inset: 0, zIndex: 'var(--z-content)' }}>
            <HeroSection onExploreClick={() => setIsMenuOpen(true)} />
          </main>
          
          {/* Menu Overlay */}
          <NavigationMenu 
            isOpen={isMenuOpen} 
            onClose={() => setIsMenuOpen(false)} 
            onSelect={handleMenuSelect} 
          />

          {/* Section Content Modal */}
          <SectionModal 
            isOpen={activeModal !== null} 
            onClose={() => setActiveModal(null)}
            onBackToMenu={() => {
              setActiveModal(null);
              setIsMenuOpen(true);
            }}
          >
            {renderActiveSection()}
          </SectionModal>
          
        </div>
      )}
    </>
  );
}

export default App;
