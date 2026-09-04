import React from 'react';
import { motion } from 'framer-motion';
import { Code, MessageCircle, Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--color-bg-base)', borderTop: 'var(--glass-border)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Animated Road Line Background */}
      <div style={{ position: 'absolute', top: '0', left: '0', width: '200%', height: '4px', background: 'transparent', display: 'flex', zIndex: 0 }}>
         <motion.div 
           animate={{ x: [0, -1000] }}
           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
           style={{ width: '100%', height: '100%', display: 'flex' }}
         >
           {/* Dashed line effect */}
           {Array.from({ length: 40 }).map((_, i) => (
             <div key={i} style={{ width: '30px', height: '4px', background: 'rgba(255,171,0,0.3)', marginRight: '20px' }} />
           ))}
         </motion.div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '4rem 2rem 2rem 2rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem', marginBottom: '3rem' }}>
          
          <div style={{ maxWidth: '300px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>NavDrishti</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Adaptive Path Planning & Collision Avoidance for Autonomous Vehicles on Unstructured Indian Roads.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Code size={20} color="var(--color-text-muted)" style={{ cursor: 'pointer' }} />
              <MessageCircle size={20} color="var(--color-text-muted)" style={{ cursor: 'pointer' }} />
              <Share2 size={20} color="var(--color-text-muted)" style={{ cursor: 'pointer' }} />
            </div>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '1rem' }}>Project</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '2' }}>
              <li>SIH 2026 Submission</li>
              <li>Documentation</li>
              <li>GitHub Repository</li>
              <li>Simulation Data</li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '1rem' }}>Partners & Tools</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
              <span>MathWorks Ecosystem</span>
              <span>Indian Institute of Technology, Bombay</span>
              <span>IDD Dataset</span>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
            © 2026 NavDrishti Team. All rights reserved.
          </span>
          <div style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', fontSize: '0.8rem', color: 'var(--color-primary)' }}>
            Smart India Hackathon 2026
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
