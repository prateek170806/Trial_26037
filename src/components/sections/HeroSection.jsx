import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Metric from '../ui/Metric';
import { ArrowRight, Crosshair } from 'lucide-react';
import { useDevice } from '../../hooks/useDevice';

const HeroSection = ({ onExploreClick }) => {
  const { isLowEnd } = useDevice();
  const [typedText, setTypedText] = useState('');
  const fullText = "NavDrishti";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.substring(0, i + 1));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ height: '100dvh', width: '100vw', position: 'relative', overflow: 'hidden' }}>
      
      {/* 3D/Lidar particle background - disabled on low-end devices */}
      {!isLowEnd && (
        <div style={{ position: 'absolute', inset: 0, opacity: 0.6, pointerEvents: 'none' }}>
           <div className="bg-grid-pattern" style={{ width: '100%', height: '100%', position: 'absolute' }} />
           {Array.from({ length: 30 }).map((_, i) => (
             <motion.div
               key={i}
               style={{
                 position: 'absolute',
                 width: Math.random() * 4 + 1 + 'px',
                 height: Math.random() * 4 + 1 + 'px',
                 background: i % 3 === 0 ? 'var(--color-primary)' : 'var(--color-warning)',
                 borderRadius: '50%',
                 left: Math.random() * 100 + '%',
                 top: Math.random() * 100 + '%',
                 boxShadow: `0 0 10px ${i % 3 === 0 ? 'var(--color-primary)' : 'var(--color-warning)'}`
               }}
               animate={{
                 y: [0, -100, 0],
                 opacity: [0.2, 1, 0.2]
               }}
               transition={{
                 duration: Math.random() * 5 + 5,
                 repeat: Infinity,
                 ease: "linear"
               }}
             />
           ))}
        </div>
      )}

      {/* Main Content */}
      <div className="container hero-content" style={{ position: 'relative', zIndex: 10, maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', border: '1px solid var(--color-primary)', borderRadius: '20px', color: 'var(--color-primary)', fontSize: '0.8rem', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              SIH 2026 - AUTONOMOUS DRIVING
            </div>
            
            <h1 className="title-fluid glitch-effect" style={{ marginBottom: '1rem', fontWeight: 700, lineHeight: 1.1 }}>
              <span className="text-gradient">{typedText}</span>
              <motion.span 
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                style={{ display: 'inline-block', width: '4px', height: '1em', background: 'var(--color-primary)', marginLeft: '0.2rem', verticalAlign: 'middle' }}
              />
            </h1>
            
            <motion.p 
              className="tagline-fluid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}
            >
              Adaptive Path Planning & Collision Avoidance for Autonomous Vehicles on Unstructured Indian Roads.
            </motion.p>
            
            <div className="flex-center" style={{ gap: '1rem', flexWrap: 'wrap' }}>
              <Button icon={ArrowRight} onClick={onExploreClick} className="touch-target">Explore System</Button>
            </div>
          </motion.div>
        </div>

        {/* Floating HUD Metrics */}
        <motion.div 
          className="hero-metrics-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Metric label="Replanning Latency" value="12ms" trend="-2ms" status="good" />
          <Metric label="Collision Risk" value="0.04%" trend="-0.01%" status="good" />
          <Metric label="Agents Tracked" value="128" icon={Crosshair} />
          <Metric label="Path Smoothness" value="98.5%" status="good" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
