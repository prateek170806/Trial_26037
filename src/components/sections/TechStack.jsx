import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  return (
    <section className="section" style={{ background: 'var(--color-bg-base)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Built on MathWorks Ecosystem</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>Leveraging industry-standard tools for simulation, modeling, and deployment.</p>
        </div>

        <div style={{ position: 'relative', height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
          
          {/* Constellation orbits */}
          <div style={{ position: 'absolute', width: '300px', height: '300px', border: '1px dashed rgba(0,229,255,0.2)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', width: '450px', height: '450px', border: '1px dashed rgba(124,77,255,0.2)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', width: '600px', height: '600px', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '50%' }} />

          {/* Center: Ego Vehicle / NavDrishti Core */}
          <div className="glass-panel flex-center" style={{ width: '120px', height: '120px', borderRadius: '50%', zIndex: 10, background: 'rgba(0,229,255,0.1)', border: '2px solid var(--color-primary)', boxShadow: '0 0 30px rgba(0,229,255,0.4)' }}>
            <h3 style={{ margin: 0, color: 'var(--color-primary)', fontSize: '1rem', textAlign: 'center' }}>NavDrishti<br/>Core</h3>
          </div>

          {/* Orbiting Nodes (simplified for Vanilla CSS positioning without complex math, using absolute positioning on the circles) */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ position: 'absolute', width: '300px', height: '300px' }}
          >
            <div className="glass-panel flex-center" style={{ position: 'absolute', top: '-30px', left: '120px', width: '60px', height: '60px', borderRadius: '50%', transform: 'rotate(-0deg)', fontSize: '0.7rem', textAlign: 'center' }}>Simulink</div>
            <div className="glass-panel flex-center" style={{ position: 'absolute', bottom: '-30px', left: '120px', width: '60px', height: '60px', borderRadius: '50%', transform: 'rotate(-180deg)', fontSize: '0.7rem', textAlign: 'center' }}>Stateflow</div>
          </motion.div>

          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            style={{ position: 'absolute', width: '450px', height: '450px' }}
          >
            <div className="glass-panel flex-center" style={{ position: 'absolute', top: '100px', left: '-30px', width: '80px', height: '80px', borderRadius: '50%', fontSize: '0.8rem', textAlign: 'center' }}>Navigation<br/>Toolbox</div>
            <div className="glass-panel flex-center" style={{ position: 'absolute', bottom: '100px', right: '-30px', width: '80px', height: '80px', borderRadius: '50%', fontSize: '0.8rem', textAlign: 'center' }}>Automated<br/>Driving</div>
            <div className="glass-panel flex-center" style={{ position: 'absolute', top: '400px', left: '185px', width: '80px', height: '80px', borderRadius: '50%', fontSize: '0.8rem', textAlign: 'center' }}>Deep<br/>Learning</div>
          </motion.div>

          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            style={{ position: 'absolute', width: '600px', height: '600px' }}
          >
            <div className="glass-panel flex-center" style={{ position: 'absolute', top: '20px', left: '260px', width: '80px', height: '80px', borderRadius: '50%', fontSize: '0.8rem', textAlign: 'center', borderColor: 'var(--color-warning)' }}>RoadRunner</div>
            <div className="glass-panel flex-center" style={{ position: 'absolute', bottom: '150px', left: '20px', width: '70px', height: '70px', borderRadius: '50%', fontSize: '0.7rem', textAlign: 'center' }}>IDD<br/>Dataset</div>
            <div className="glass-panel flex-center" style={{ position: 'absolute', bottom: '150px', right: '20px', width: '70px', height: '70px', borderRadius: '50%', fontSize: '0.7rem', textAlign: 'center' }}>Mendeley<br/>Dataset</div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default TechStack;
