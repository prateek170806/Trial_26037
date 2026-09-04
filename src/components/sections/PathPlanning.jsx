import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PathPlanning = () => {
  const [mode, setMode] = useState('normal'); // normal, defensive, emergency

  const modes = [
    { id: 'normal', label: 'Normal Cruise', color: 'var(--color-primary)' },
    { id: 'defensive', label: 'Defensive Margin', color: 'var(--color-warning)' },
    { id: 'emergency', label: 'Emergency Replan', color: '#ff5722' }
  ];

  return (
    <section className="section" style={{ background: '#05070d' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Real-Time Adaptive Planning</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>Dynamic RRT*/Hybrid A* computing optimal, kinematically feasible trajectories.</p>
        </div>

        <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Mode Toggles */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            {modes.map(m => (
              <button
                key={m.id}
                onClick={() => setMode(m.id)}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '20px',
                  border: `1px solid ${mode === m.id ? m.color : 'rgba(255,255,255,0.2)'}`,
                  background: mode === m.id ? `rgba(${m.id === 'normal' ? '0,229,255' : m.id === 'defensive' ? '255,171,0' : '255,87,34'}, 0.1)` : 'transparent',
                  color: mode === m.id ? m.color : 'white',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '600',
                  transition: 'all 0.3s'
                }}
              >
                {m.label}
              </button>
            ))}
          </div>

          {/* Visualization Canvas */}
          <div style={{ width: '100%', height: '400px', background: '#0a0e1a', borderRadius: '12px', position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="bg-grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
            
            {/* Start & Goal Nodes */}
            <div style={{ position: 'absolute', top: '80%', left: '10%', width: '12px', height: '12px', background: 'white', borderRadius: '50%', boxShadow: '0 0 10px white' }} />
            <div style={{ position: 'absolute', top: '20%', left: '80%', width: '12px', height: '12px', background: '#00e676', borderRadius: '50%', boxShadow: '0 0 10px #00e676' }} />

            {/* Obstacles based on mode */}
            <AnimatePresence>
              {mode !== 'normal' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0, scale: 0 }}
                  style={{ position: 'absolute', top: '50%', left: '50%', width: '60px', height: '60px', background: 'rgba(255,87,34,0.3)', border: '2px solid #ff5722', borderRadius: '50%' }}
                />
              )}
            </AnimatePresence>

            {/* Search Tree & Path */}
            <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
               {/* Search Tree Nodes (simulated) */}
               <motion.g opacity={0.3} animate={{ opacity: [0.1, 0.4, 0.1] }} transition={{ repeat: Infinity, duration: 2 }}>
                 <line x1="10%" y1="80%" x2="30%" y2="70%" stroke="var(--color-primary)" strokeWidth="1" />
                 <line x1="30%" y1="70%" x2="40%" y2="50%" stroke="var(--color-primary)" strokeWidth="1" />
                 <line x1="30%" y1="70%" x2="45%" y2="80%" stroke="var(--color-primary)" strokeWidth="1" />
                 <line x1="10%" y1="80%" x2="20%" y2="90%" stroke="var(--color-primary)" strokeWidth="1" />
                 {mode === 'defensive' && <line x1="40%" y1="50%" x2="60%" y2="30%" stroke="var(--color-primary)" strokeWidth="1" />}
               </motion.g>
               
               {/* Optimal Path */}
               <motion.path 
                 key={`path-${mode}`}
                 d={
                   mode === 'normal' ? "M 10% 80% Q 40% 70% 50% 50% T 80% 20%" :
                   mode === 'defensive' ? "M 10% 80% Q 30% 90% 60% 70% T 80% 20%" :
                   "M 10% 80% L 30% 40% Q 50% 20% 80% 20%" // Emergency sharp turn
                 }
                 fill="none" 
                 stroke={modes.find(m => m.id === mode).color} 
                 strokeWidth="4"
                 initial={{ pathLength: 0 }}
                 animate={{ pathLength: 1 }}
                 transition={{ duration: 1.5, ease: "easeOut" }}
                 style={{ filter: `drop-shadow(0 0 8px ${modes.find(m => m.id === mode).color})` }}
               />
            </svg>
          </div>

          {/* Timeline */}
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '2rem', overflowX: 'auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', minWidth: '150px' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>T-0.00s</span>
              <span style={{ fontSize: '0.85rem', color: 'white' }}>Agent Detected</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', minWidth: '150px', borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '1rem' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>T+0.01s</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-warning)' }}>Trajectory Conflict</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', minWidth: '150px', borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '1rem' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>T+0.04s</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-primary)' }}>Path Recomputed</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', minWidth: '150px', borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '1rem' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>T+0.05s</span>
              <span style={{ fontSize: '0.85rem', color: '#00e676' }}>Actuators Engaged</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathPlanning;
