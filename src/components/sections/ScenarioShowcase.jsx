import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { Play } from 'lucide-react';

const scenarios = [
  {
    id: 1,
    title: 'Unmarked Village Road',
    desc: 'Navigating narrow roads without markings against oncoming traffic with wide safety margins.',
    metrics: { time: '14.2s', replans: 3, clearance: '1.2m' },
    difficulty: 'Medium',
    color: '#00e676'
  },
  {
    id: 2,
    title: 'Urban Intersection Without Signals',
    desc: 'Ego vehicle finding gaps amidst vehicles, pedestrians, and rickshaws crossing from all directions.',
    metrics: { time: '22.5s', replans: 12, clearance: '0.8m' },
    difficulty: 'Extreme',
    color: '#ff5722'
  },
  {
    id: 3,
    title: 'Highway Merge with Slow Vehicles',
    desc: 'Planning a safe overtake maneuver around a bullock cart and truck on a highway.',
    metrics: { time: '18.1s', replans: 5, clearance: '1.5m' },
    difficulty: 'Hard',
    color: 'var(--color-warning)'
  },
  {
    id: 4,
    title: 'Dense Market Area',
    desc: 'Crawling through pushcarts, pedestrians, and parked vehicles with constant replanning.',
    metrics: { time: '45.0s', replans: 28, clearance: '0.5m' },
    difficulty: 'Extreme',
    color: '#ff5722'
  },
  {
    id: 5,
    title: 'Sudden Cattle Crossing',
    desc: 'Executing emergency trajectory modification when cattle suddenly appear on highway.',
    metrics: { time: '6.4s', replans: 2, clearance: '0.9m' },
    difficulty: 'Hard',
    color: 'var(--color-warning)'
  }
];

const ScenarioShowcase = () => {
  const [activeTab, setActiveTab] = useState(scenarios[0]);

  return (
    <section className="section" style={{ background: 'var(--color-bg-base)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Proving Ground</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>5 Critical Scenarios Validating the Architecture.</p>
        </div>

        <div className="scenario-layout">
          {/* Tabs */}
          <div className="scenario-tabs">
            {scenarios.map((scenario) => (
              <div 
                key={scenario.id}
                onClick={() => setActiveTab(scenario)}
                className="touch-target"
                style={{
                  padding: '1.25rem',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  background: activeTab.id === scenario.id ? 'rgba(0, 229, 255, 0.1)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${activeTab.id === scenario.id ? 'var(--color-primary)' : 'rgba(255,255,255,0.1)'}`,
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: activeTab.id === scenario.id ? 'var(--color-primary)' : 'white' }}>{scenario.title}</h4>
                  <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', borderRadius: '4px', border: `1px solid ${scenario.color}`, color: scenario.color }}>
                    {scenario.difficulty}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Visualization Area */}
          <div className="glass-panel scenario-vis" style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Top Bar Metrics */}
            <div className="scenario-metrics-bar" style={{ display: 'flex', justifyContent: 'space-between', padding: '1.5rem', borderBottom: 'var(--glass-border)' }}>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>COMPLETION TIME</div>
                  <div className="font-mono metric-num-fluid" style={{ color: 'white' }}>{activeTab.metrics.time}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>REPLANNING EVENTS</div>
                  <div className="font-mono metric-num-fluid" style={{ color: 'var(--color-warning)' }}>{activeTab.metrics.replans}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>MIN CLEARANCE</div>
                  <div className="font-mono metric-num-fluid" style={{ color: 'var(--color-primary)' }}>{activeTab.metrics.clearance}</div>
                </div>
              </div>
              <Button icon={Play} variant="primary" className="touch-target" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Run Sim</Button>
            </div>

            {/* Animation Canvas Placeholder */}
            <div style={{ flex: 1, minHeight: '400px', position: 'relative', overflow: 'hidden', background: '#05070d' }}>
               <AnimatePresence mode="wait">
                 <motion.div
                   key={activeTab.id}
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 1.05 }}
                   transition={{ duration: 0.5 }}
                   style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
                 >
                   <div style={{ textAlign: 'center', width: '100%' }}>
                     <p className="body-fluid" style={{ color: 'var(--color-text-muted)', maxWidth: '400px', margin: '0 auto 2rem auto' }}>{activeTab.desc}</p>
                     
                     {/* Simplified visual representation of the simulation */}
                     <div style={{ width: '100%', height: '200px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px dashed rgba(255,255,255,0.1)', position: 'relative', overflow: 'hidden' }}>
                       {/* Ego vehicle */}
                       <motion.div 
                         animate={{ x: [0, 200, 250, 400] }}
                         transition={{ duration: 4, repeat: Infinity }}
                         style={{ position: 'absolute', top: '50%', left: '10%', width: '40px', height: '20px', background: 'rgba(0, 229, 255, 0.2)', border: '2px solid var(--color-primary)', borderRadius: '4px', transform: 'translateY(-50%)' }} 
                       />
                       {/* Abstract obstacles */}
                       <div style={{ position: 'absolute', top: '30%', left: '40%', width: '30px', height: '30px', background: 'var(--color-warning)', borderRadius: '50%' }} />
                       <div style={{ position: 'absolute', top: '60%', left: '60%', width: '40px', height: '20px', background: '#ff5722', borderRadius: '4px' }} />
                       {/* Path */}
                       <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                         <path d="M 40 100 Q 150 100 200 60 T 350 100" fill="none" stroke="var(--color-primary)" strokeDasharray="4 4" strokeWidth="2" />
                       </svg>
                     </div>
                   </div>
                 </motion.div>
               </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScenarioShowcase;
