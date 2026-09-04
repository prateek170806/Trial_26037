import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cpu, Navigation, Zap } from 'lucide-react';

const stackLayers = [
  { id: 1, name: "Sensor Fusion Layer", icon: Database, color: "#00e676", desc: "LiDAR, Radar, and Camera data aggregated for robust perception." },
  { id: 2, name: "Perception & Tracking", icon: Cpu, color: "#ff5722", desc: "Deep learning models identifying dynamic agents in real-time." },
  { id: 3, name: "Behavior Prediction", icon: Zap, color: "var(--color-primary)", desc: "Predicting chaotic trajectories of Indian traffic." },
  { id: 4, name: "Adaptive Path Planning", icon: Navigation, color: "var(--color-warning)", desc: "Generating smooth, collision-free paths dynamically." }
];

const ArchitectureStack = () => {
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBlockEnd: 'var(--space-8)' }}>
          <h2 className="text-h1" style={{ marginBlockEnd: 'var(--space-2)' }}>The Intelligence Stack</h2>
          <p className="text-body" style={{ color: 'var(--color-text-muted)' }}>A modular, low-latency pipeline designed for edge compute.</p>
        </div>

        <div className="flex-center" style={{ paddingBlock: 'var(--space-4)' }}>
          
          {/* Vertical Pipeline */}
          <div className="arch-pipeline" style={{ position: 'relative', width: '100%', maxWidth: '800px' }}>
            
            {/* Animated background line connecting layers */}
            <div className="arch-line" style={{ position: 'absolute', left: 'var(--space-4)', top: 'var(--space-4)', bottom: 'var(--space-4)', width: '2px', background: 'rgba(0, 229, 255, 0.2)', zIndex: 0 }}>
               <motion.div 
                 initial={{ height: 0 }}
                 whileInView={{ height: '100%' }}
                 transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                 style={{ width: '100%', background: 'var(--color-primary)', boxShadow: '0 0 10px var(--color-primary)' }}
               />
            </div>

            {stackLayers.map((layer, index) => (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="surface-level-1"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  padding: 'var(--space-3)',
                  position: 'relative',
                  zIndex: 'var(--z-content)',
                }}
              >
                {/* Node Dot */}
                <div style={{ 
                  width: 'var(--space-2)', 
                  height: 'var(--space-2)', 
                  borderRadius: '50%', 
                  background: layer.color, 
                  boxShadow: `0 0 15px ${layer.color}`,
                  flexShrink: 0 
                }} />
                
                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBlockEnd: 'var(--space-1)' }}>
                    <layer.icon size={20} color={layer.color} aria-hidden="true" />
                    <h3 className="text-h2" style={{ margin: 0 }}>{layer.name}</h3>
                  </div>
                  <p className="text-body" style={{ color: 'var(--color-text-muted)', margin: 0 }}>{layer.desc}</p>
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
