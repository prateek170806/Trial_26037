import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { Play, Pause, RefreshCw, AlertTriangle, CloudRain, Users } from 'lucide-react';

const scenarios = [
  {
    id: 'jaywalker',
    title: 'Erratic Jaywalker',
    icon: Users,
    desc: 'Pedestrian steps into traffic from behind a parked bus.',
    metrics: { risk: 'High', latency: '8ms', clearance: '1.2m' },
    color: '#ff5722'
  },
  {
    id: 'pothole',
    title: 'Unexpected Pothole',
    icon: AlertTriangle,
    desc: 'Deep pothole detected late due to leading vehicle swerve.',
    metrics: { risk: 'Medium', latency: '12ms', clearance: '0.4m' },
    color: 'var(--color-warning)'
  },
  {
    id: 'monsoon',
    title: 'Heavy Monsoon',
    icon: CloudRain,
    desc: 'Degraded camera visibility; relying on Radar/LiDAR fusion.',
    metrics: { risk: 'Medium', latency: '15ms', clearance: '2.5m' },
    color: 'var(--color-primary)'
  }
];

const ScenarioShowcase = () => {
  const [activeScenario, setActiveScenario] = useState(scenarios[0]);
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBlockEnd: 'var(--space-8)' }}>
          <h2 className="text-h1" style={{ marginBlockEnd: 'var(--space-2)' }}>Proving Ground</h2>
          <p className="text-body" style={{ color: 'var(--color-text-muted)' }}>Interactive simulation of the NavDrishti engine handling extreme edge cases.</p>
        </div>

        <div className="scenario-layout">
          {/* Controls / Tabs */}
          <div className="scenario-tabs">
            {scenarios.map((scen) => (
              <button
                key={scen.id}
                onClick={() => { setActiveScenario(scen); setIsPlaying(true); }}
                className="btn surface-level-1 touch-target"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: 'var(--space-3)',
                  border: activeScenario.id === scen.id ? `1px solid ${scen.color}` : '1px solid rgba(255,255,255,0.1)',
                  background: activeScenario.id === scen.id ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.02)',
                  color: 'white',
                  width: '100%',
                  textAlign: 'left'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBlockEnd: 'var(--space-1)' }}>
                  <scen.icon size={20} color={scen.color} aria-hidden="true" />
                  <h3 className="text-h2" style={{ margin: 0 }}>{scen.title}</h3>
                </div>
                <p className="text-body" style={{ color: 'var(--color-text-muted)', margin: 0, fontWeight: 400 }}>{scen.desc}</p>
              </button>
            ))}
          </div>

          {/* Visualization Canvas */}
          <div className="scenario-vis surface-level-1" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            
            {/* Top Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--space-2) var(--space-3)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                <Button variant="outline" onClick={() => setIsPlaying(!isPlaying)} style={{ padding: 'var(--space-1)', minHeight: '36px', minWidth: '36px' }}>
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </Button>
                <Button variant="outline" onClick={() => setIsPlaying(true)} style={{ padding: 'var(--space-1)', minHeight: '36px', minWidth: '36px' }}>
                  <RefreshCw size={16} />
                </Button>
              </div>
              <span className="text-caption font-mono" style={{ color: activeScenario.color }}>
                {isPlaying ? 'SIMULATION RUNNING' : 'PAUSED'}
              </span>
            </div>

            {/* Canvas Area (Mock) */}
            <div style={{ flex: 1, minHeight: '300px', background: '#05070d', position: 'relative', overflow: 'hidden', display: 'grid', placeItems: 'center' }}>
               <div className="bg-grid-pattern" style={{ width: '100%', height: '100%', position: 'absolute', opacity: 0.3 }} />
               
               <AnimatePresence mode="wait">
                 <motion.div
                   key={activeScenario.id}
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 1.1 }}
                   transition={{ duration: 0.4 }}
                   style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}
                 >
                    <activeScenario.icon size={64} color={activeScenario.color} style={{ margin: '0 auto var(--space-3)' }} />
                    <p className="text-body font-mono" style={{ color: 'var(--color-text-muted)' }}>[Canvas Visualization for {activeScenario.title}]</p>
                 </motion.div>
               </AnimatePresence>

               {/* Ego Vehicle Mock */}
               <motion.div 
                 style={{ position: 'absolute', bottom: '20%', left: '50%', x: '-50%', width: '30px', height: '60px', background: 'var(--color-primary)', borderRadius: '4px', boxShadow: '0 0 20px var(--color-primary)' }}
                 animate={isPlaying ? { y: [0, -10, 0] } : {}}
                 transition={{ repeat: Infinity, duration: 2 }}
               />
            </div>

            {/* Metrics Bar */}
            <div className="scenario-metrics-bar" style={{ display: 'flex', justifyContent: 'space-between', padding: 'var(--space-3)', borderTop: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.2)' }}>
              <div>
                <span className="text-caption">Risk Level</span>
                <div className="text-h2" style={{ color: activeScenario.color }}>{activeScenario.metrics.risk}</div>
              </div>
              <div>
                <span className="text-caption">Replanning Latency</span>
                <div className="text-h2">{activeScenario.metrics.latency}</div>
              </div>
              <div>
                <span className="text-caption">Min Clearance</span>
                <div className="text-h2">{activeScenario.metrics.clearance}</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ScenarioShowcase;
