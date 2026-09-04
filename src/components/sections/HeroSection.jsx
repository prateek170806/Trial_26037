import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Metric from '../ui/Metric';
import { ArrowRight, Activity, Crosshair } from 'lucide-react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "NavDrishti";

  useEffect(() => {
    let currentText = '';
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        currentText += fullText.charAt(i);
        setTypedText(currentText);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '8rem' }}>
      {/* Background with Grid and glowing gradients handled by index.css */}
      
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '800px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', padding: '0.5rem 1rem', background: 'rgba(0, 229, 255, 0.1)', borderRadius: '20px', border: '1px solid rgba(0, 229, 255, 0.3)' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-primary)', boxShadow: '0 0 10px var(--color-primary)' }} className="animate-pulse-glow" />
              <span style={{ fontSize: '0.875rem', color: 'var(--color-primary)', fontWeight: '600', letterSpacing: '0.05em' }}>SYSTEM ACTIVE</span>
            </div>
            
            <h1 style={{ fontSize: '5rem', lineHeight: '1.1', marginBottom: '1.5rem', fontWeight: '700' }} className="glitch-effect">
              {typedText}
              <motion.span 
                animate={{ opacity: [1, 0, 1] }} 
                transition={{ repeat: Infinity, duration: 0.8 }}
                style={{ color: 'var(--color-primary)' }}
              >_</motion.span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              style={{ fontSize: '1.5rem', color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '600px' }}
            >
              Seeing Through Chaos. <span className="text-gradient">Navigating the Unpredictable.</span>
            </motion.p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button icon={ArrowRight}>Explore System</Button>
              <Button variant="outline" icon={Activity}>View Live Demo</Button>
            </div>
          </motion.div>
        </div>

        {/* HUD Overlay */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="glass-panel"
          style={{ 
            position: 'absolute', 
            right: '2rem', 
            top: '50%', 
            transform: 'translateY(-50%)',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            minWidth: '250px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
            <Crosshair size={20} color="var(--color-primary)" />
            <h3 style={{ fontSize: '1rem', margin: 0 }}>LIVE TELEMETRY</h3>
          </div>
          <Metric label="Replanning Latency" value="47" unit="ms" status="good" />
          <Metric label="Collision Risk" value="LOW" status="good" />
          <Metric label="Agents Tracked" value="23" />
          <Metric label="Path Smoothness" value="0.94" status="normal" />
        </motion.div>
      </div>

      {/* Abstract Animated Visualization Background */}
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: '50%', zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {/* Placeholder for 3D bird's eye view. Since we are using Vanilla CSS/React, we will use stylized SVG animations here to represent paths */}
        <svg width="100%" height="100%" viewBox="0 0 800 800" style={{ opacity: 0.6 }}>
           <motion.path 
             d="M 100,800 C 150,600 300,500 400,400 C 500,300 700,200 800,100" 
             fill="none" 
             stroke="var(--color-primary)" 
             strokeWidth="4"
             strokeDasharray="10 10"
             initial={{ pathLength: 0, opacity: 0 }}
             animate={{ pathLength: 1, opacity: 1 }}
             transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
             style={{ filter: 'drop-shadow(0 0 8px rgba(0,229,255,0.8))' }}
           />
           {/* Animated agents */}
           <motion.circle r="6" fill="var(--color-warning)" filter="drop-shadow(0 0 5px var(--color-warning))"
             animate={{
               cx: [200, 300, 400, 500],
               cy: [600, 500, 450, 400]
             }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
           />
           <motion.circle r="4" fill="#ff5722" filter="drop-shadow(0 0 5px #ff5722)"
             animate={{
               cx: [600, 500, 450],
               cy: [700, 600, 500]
             }}
             transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
           />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
