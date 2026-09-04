import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { RouteOff, Users, ActivitySquare, PowerOff, ShieldAlert, GitMerge } from 'lucide-react';

const challenges = [
  { id: 1, title: 'No Lane Markings', icon: RouteOff, stat: '80% of rural roads lack markings', desc: 'Visual fragmentation in lane boundaries requiring robust lane-free navigation algorithms.' },
  { id: 2, title: 'Mixed Traffic Agents', icon: Users, stat: '20+ vehicle types', desc: 'Auto-rickshaws, cattle, pushcarts, and pedestrians sharing the same unstructured road space.' },
  { id: 3, title: 'Unpredictable Motion', icon: ActivitySquare, stat: 'Non-holonomic behavior', desc: 'Erratic trajectory changes, sudden U-turns, and diagonal crossings defying standard motion models.' },
  { id: 4, title: 'Missing Signals', icon: PowerOff, stat: 'No V2X infrastructure', desc: 'Reliance purely on ego-vehicle perception and localized intent prediction at intersections.' },
  { id: 5, title: 'Road Hazards', icon: ShieldAlert, stat: 'Dynamic obstacles', desc: 'Potholes, unauthorized speed breakers, and debris requiring real-time vertical profile estimation.' },
  { id: 6, title: 'Informal Merging', icon: GitMerge, stat: 'Dense packing', desc: 'Aggressive gap acceptance and nose-to-tail driving necessitating cm-level safety margins.' }
];

const ProblemStatement = () => {
  return (
    <section className="section" style={{ background: 'var(--color-bg-base)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            The <span className="text-gradient-warning">Indian Road Challenge</span>
          </h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Western autonomous driving models assume structured environments. NavDrishti is built from the ground up for chaos.
          </p>
        </motion.div>

        {/* Split Screen Animation Concept */}
        <div style={{ display: 'flex', gap: '2rem', marginBottom: '4rem', height: '300px' }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel flex-center"
            style={{ flex: 1, position: 'relative', overflow: 'hidden', borderRight: 'none', borderRadius: 'var(--border-radius) 0 0 var(--border-radius)' }}
          >
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 1, fontSize: '0.8rem', color: '#00e676', border: '1px solid #00e676', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>STRUCTURED (WESTERN)</div>
            {/* Visual placeholder for structured road */}
            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(180deg, #111, #222)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
               <div style={{ width: '8px', height: '100%', background: 'rgba(255,255,255,0.8)', boxShadow: '0 0 10px white' }} />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel flex-center"
            style={{ flex: 1, position: 'relative', overflow: 'hidden', borderLeft: '1px solid var(--color-warning)', borderRadius: '0 var(--border-radius) var(--border-radius) 0' }}
          >
            <div style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 1, fontSize: '0.8rem', color: 'var(--color-warning)', border: '1px solid var(--color-warning)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>UNSTRUCTURED (INDIA)</div>
             {/* Visual placeholder for chaotic road */}
             <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #1a0f00, #221100)', position: 'relative' }}>
                <motion.div animate={{ x: [0, 100, -50, 0], y: [0, -50, 50, 0] }} transition={{ duration: 4, repeat: Infinity }} style={{ position: 'absolute', top: '40%', left: '40%', width: '30px', height: '30px', background: 'var(--color-warning)', borderRadius: '4px' }} />
                <motion.div animate={{ x: [50, -50, 20, 50], y: [-20, 50, -30, -20] }} transition={{ duration: 5, repeat: Infinity }} style={{ position: 'absolute', top: '60%', left: '50%', width: '15px', height: '15px', background: 'var(--color-primary)', borderRadius: '50%' }} />
             </div>
          </motion.div>
        </div>

        {/* Challenge Cards Grid */}
        <div className="grid-3-col" style={{ position: 'relative', zIndex: 10 }}>
          {challenges.map((challenge, index) => (
            <Card key={challenge.id} delay={index * 0.1} className="challenge-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(255, 171, 0, 0.1)', borderRadius: '12px', color: 'var(--color-warning)' }}>
                  <challenge.icon size={24} />
                </div>
                <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{challenge.title}</h3>
              </div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '60px' }}>
                {challenge.desc}
              </p>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontFamily: 'var(--font-mono)', padding: '0.5rem', background: 'rgba(0,229,255,0.05)', borderRadius: '4px' }}>
                &gt; {challenge.stat}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
