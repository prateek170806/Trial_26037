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
      <div className="container hero-content" style={{ position: 'relative', zIndex: 'var(--z-panels)', marginInline: 'auto' }}>
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-caption" style={{ 
              display: 'inline-block', 
              paddingBlock: 'var(--space-1)', 
              paddingInline: 'var(--space-2)', 
              border: '1px solid var(--color-primary)', 
              borderRadius: '20px', 
              color: 'var(--color-primary)', 
              marginBlockEnd: 'var(--space-3)' 
            }}>
              SIH 2026 - AUTONOMOUS DRIVING
            </div>
            
            <h1 className="text-display glitch-effect" style={{ marginBlockEnd: 'var(--space-2)' }}>
              <span className="text-gradient">{typedText}</span>
              <motion.span 
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                style={{ display: 'inline-block', width: '4px', height: '1em', background: 'var(--color-primary)', marginLeft: '0.2rem', verticalAlign: 'middle' }}
              />
            </h1>
            
            <motion.p 
              className="text-h2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ color: 'var(--color-text-muted)', marginBlockEnd: 'var(--space-4)', maxWidth: '600px', marginInline: 'auto' }}
            >
              Adaptive Path Planning & Collision Avoidance for Autonomous Vehicles on Unstructured Indian Roads.
            </motion.p>
            
            <div className="flex-center" style={{ gap: 'var(--space-2)', flexWrap: 'wrap' }}>
              <Button icon={ArrowRight} onClick={onExploreClick} variant="primary" ariaLabel="Explore NavDrishti System">Explore System</Button>
            </div>
          </motion.div>
        </div>

        {/* Floating HUD Metrics */}
        <motion.div 
          className="hero-metrics-container surface-level-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ padding: 'var(--space-3)' }}
        >
          <Metric label="Replanning Latency" value="12" unit="ms" trend="-2" status="good" />
          <Metric label="Collision Risk" value="0.04" unit="%" trend="-0.01" status="good" />
          <Metric label="Agents Tracked" value="128" />
          <Metric label="Path Smoothness" value="98.5" unit="%" status="good" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
