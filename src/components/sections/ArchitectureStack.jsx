import React from 'react';
import { motion } from 'framer-motion';
import { Database, Eye, BrainCircuit, Navigation, Cpu } from 'lucide-react';

const layers = [
  { id: 5, name: 'Decision & Control', icon: Cpu, desc: 'Stateflow-inspired state machine', color: '#ff5722' },
  { id: 4, name: 'Adaptive Planning', icon: Navigation, desc: 'RRT*/Hybrid A* with dynamic cost functions', color: 'var(--color-primary)' },
  { id: 3, name: 'Prediction Engine', icon: BrainCircuit, desc: 'Multi-modal trajectory prediction', color: 'var(--color-accent)' },
  { id: 2, name: 'Perception & Detection', icon: Eye, desc: 'Deep learning based agent classification', color: '#00e676' },
  { id: 1, name: 'Sensor Fusion', icon: Database, desc: 'Camera + LiDAR + Radar integration', color: 'var(--color-warning)' },
];

const ArchitectureStack = () => {
  return (
    <section className="section" style={{ background: 'var(--color-bg-base)', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>The Intelligence Stack</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>A 5-layer architecture designed for unstructured environments.</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem 0' }}>
          
          {/* Vertical Pipeline */}
          <div className="arch-pipeline" style={{ position: 'relative' }}>
            
            {/* Animated background line connecting layers */}
            <div className="arch-line" style={{ position: 'absolute', left: '2rem', top: '2rem', bottom: '2rem', width: '2px', background: 'rgba(0, 229, 255, 0.2)', zIndex: 0 }}>
               <motion.div 
                 initial={{ height: 0 }}
                 whileInView={{ height: '100%' }}
                 transition={{ duration: 2, ease: "easeInOut" }}
                 style={{ width: '100%', background: 'linear-gradient(180deg, var(--color-primary), var(--color-accent))', boxShadow: '0 0 15px var(--color-primary)' }}
               />
               {/* Data flow particles */}
               <motion.div
                 animate={{ y: [0, 600] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                 style={{ width: '8px', height: '20px', background: '#fff', borderRadius: '4px', position: 'absolute', left: '-2px', top: 0, boxShadow: '0 0 10px #fff' }}
               />
            </div>

            {layers.map((layer, index) => (
              <motion.div 
                key={layer.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                <div 
                  className="glass-panel"
                  style={{ 
                    width: '45%', 
                    padding: '1.5rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1.5rem',
                    borderLeft: index % 2 === 0 ? `4px solid ${layer.color}` : 'var(--glass-border)',
                    borderRight: index % 2 !== 0 ? `4px solid ${layer.color}` : 'var(--glass-border)',
                  }}
                >
                  <div style={{ padding: '1rem', background: `rgba(${layer.color === 'var(--color-primary)' ? '0,229,255' : layer.color === 'var(--color-accent)' ? '124,77,255' : '255,171,0'}, 0.1)`, borderRadius: '12px' }}>
                    <layer.icon size={32} color={layer.color} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>LAYER {layer.id}</div>
                    <h3 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem 0' }}>{layer.name}</h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', margin: 0 }}>{layer.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ArchitectureStack;
