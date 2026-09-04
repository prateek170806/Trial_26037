import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PredictionEngine = () => {
  const [timeStep, setTimeStep] = useState(1); // 0.5, 1, 2, 3 seconds mapped to 0, 1, 2, 3 slider values
  const timeLabels = ['t+0.5s', 't+1.0s', 't+2.0s', 't+3.0s'];

  return (
    <section className="section" style={{ background: 'var(--color-bg-base)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Anticipating the Unpredictable</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>Multi-modal trajectory prediction adapted for non-lane-following Indian traffic behavior.</p>
        </div>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          
          {/* Main Visualization */}
          <div className="glass-panel" style={{ flex: '2', minWidth: '400px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '1.5rem', borderBottom: 'var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Agent Prediction</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>TIME HORIZON:</span>
                <span className="font-mono" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>{timeLabels[timeStep]}</span>
              </div>
            </div>
            
            <div style={{ flex: 1, minHeight: '400px', position: 'relative', overflow: 'hidden', background: '#0a0e1a' }}>
              <div className="bg-grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
              
              {/* Ego Vehicle */}
              <div style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', width: '30px', height: '60px', background: 'rgba(0, 229, 255, 0.2)', border: '2px solid var(--color-primary)', borderRadius: '4px' }} />

              {/* Agent 1: Pedestrian (Wide uncertainty fan) */}
              <div style={{ position: 'absolute', top: '50%', left: '30%' }}>
                <div style={{ width: '15px', height: '15px', background: 'var(--color-warning)', borderRadius: '50%', position: 'relative', zIndex: 2 }} />
                {/* Prediction Cone */}
                <svg width="200" height="200" style={{ position: 'absolute', top: '-100px', left: '-100px', pointerEvents: 'none', zIndex: 1 }}>
                   <motion.path 
                     d={`M 107 107 Q ${100 - timeStep*30} ${100 - timeStep*30}, ${100 - timeStep*50} ${100 - timeStep*80}`}
                     fill="none" stroke="rgba(255,171,0,0.4)" strokeWidth={1 + timeStep} strokeDasharray="4 4"
                   />
                   <motion.path 
                     d={`M 107 107 Q ${100 + timeStep*20} ${100 - timeStep*40}, ${100 + timeStep*60} ${100 - timeStep*60}`}
                     fill="none" stroke="rgba(255,171,0,0.8)" strokeWidth={2 + timeStep} 
                   />
                </svg>
                <div style={{ position: 'absolute', top: '20px', left: '-20px', color: 'var(--color-warning)', fontSize: '0.6rem', whiteSpace: 'nowrap' }}>Pedestrian</div>
              </div>

              {/* Agent 2: Truck (Narrower fan, lane following-ish) */}
              <div style={{ position: 'absolute', top: '30%', left: '60%' }}>
                <div style={{ width: '40px', height: '80px', background: '#7c4dff', borderRadius: '4px', position: 'relative', zIndex: 2 }} />
                {/* Prediction Cone */}
                <svg width="200" height="300" style={{ position: 'absolute', top: '-250px', left: '-80px', pointerEvents: 'none', zIndex: 1 }}>
                   <motion.path 
                     d={`M 100 250 L 100 ${250 - timeStep*50}`}
                     fill="none" stroke="rgba(124,77,255,0.8)" strokeWidth={4} 
                   />
                </svg>
                <div style={{ position: 'absolute', top: '90px', left: '-5px', color: '#7c4dff', fontSize: '0.6rem', whiteSpace: 'nowrap' }}>Truck</div>
              </div>
            </div>

            {/* Time Scrubber */}
            <div style={{ padding: '1.5rem', borderTop: 'var(--glass-border)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input 
                type="range" 
                min="0" 
                max="3" 
                step="1"
                value={timeStep}
                onChange={(e) => setTimeStep(parseInt(e.target.value))}
                style={{ width: '100%', cursor: 'pointer', accentColor: 'var(--color-primary)' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
                {timeLabels.map((lbl, idx) => (
                  <span key={idx} style={{ color: timeStep === idx ? 'var(--color-primary)' : 'inherit', fontWeight: timeStep === idx ? 'bold' : 'normal' }}>
                    {lbl}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-panel" style={{ padding: '1.5rem' }}>
              <h4 style={{ margin: '0 0 1rem 0', color: 'var(--color-primary)' }}>Indian Motion Model</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                Our proprietary ML model doesn't assume lane discipline. It anticipates informal gap acceptance, diagonal pedestrian crossings, and non-holonomic behaviors of auto-rickshaws.
              </p>
            </div>
            
            <div className="glass-panel" style={{ padding: '1.5rem' }}>
              <h4 style={{ margin: '0 0 1rem 0', color: 'white' }}>Accuracy Comparison</h4>
              
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--color-text-muted)' }}>Standard Model (Western)</span>
                  <span className="font-mono">62%</span>
                </div>
                <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '62%' }} transition={{ duration: 1 }} style={{ height: '100%', background: 'rgba(255,255,255,0.3)' }} />
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>NavDrishti Adapted Model</span>
                  <span className="font-mono" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>91%</span>
                </div>
                <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0,229,255,0.2)' }}>
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '91%' }} transition={{ duration: 1.5 }} style={{ height: '100%', background: 'var(--color-primary)' }} />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PredictionEngine;
