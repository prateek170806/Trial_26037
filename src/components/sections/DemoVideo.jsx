import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const DemoVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="section" style={{ background: '#05070d' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>See It In Action</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>Simulated validation runs across diverse Indian scenarios.</p>
        </div>

        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
          {/* Glowing Frame */}
          <div style={{ position: 'absolute', inset: '-2px', background: 'linear-gradient(45deg, var(--color-primary), var(--color-accent), var(--color-warning))', borderRadius: '14px', zIndex: 0, opacity: 0.5, filter: 'blur(10px)' }} className="animate-pulse-glow" />
          
          <div style={{ position: 'relative', background: '#000', borderRadius: '12px', overflow: 'hidden', aspectRatio: '16/9', zIndex: 1, border: '1px solid rgba(255,255,255,0.1)' }}>
            
            {!isPlaying ? (
              <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: 'radial-gradient(circle, #1a1a1a, #000)', position: 'relative' }}>
                <div className="bg-grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
                
                {/* Thumbnail graphic */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: 0.5 }}>
                  <svg width="100%" height="100%">
                    <path d="M 0 50% Q 25% 40% 50% 50% T 100% 50%" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="5 5" />
                  </svg>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsPlaying(true)}
                  style={{
                    width: '80px', height: '80px', borderRadius: '50%',
                    background: 'rgba(0, 229, 255, 0.2)',
                    border: '2px solid var(--color-primary)',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    cursor: 'pointer', zIndex: 2,
                    boxShadow: '0 0 30px rgba(0,229,255,0.5)'
                  }}
                >
                  <Play size={32} color="var(--color-primary)" style={{ marginLeft: '5px' }} />
                </motion.button>
              </div>
            ) : (
              <div style={{ width: '100%', height: '100%', background: '#111', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--color-text-muted)' }}>
                [ Video Player Placeholder - In a real implementation, an iframe or &lt;video&gt; tag goes here ]
              </div>
            )}
          </div>

          {/* Chapter Markers */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem', gap: '1rem', overflowX: 'auto', paddingBottom: '1rem' }}>
            {['System Overview', 'Village Road Test', 'Urban Intersection Test', 'Market Navigation', 'Emergency Scenarios'].map((chapter, i) => (
              <div key={i} style={{ flex: '1', minWidth: '150px', background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.8rem', textAlign: 'center', cursor: 'pointer' }} className="glass-panel">
                {chapter}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;
