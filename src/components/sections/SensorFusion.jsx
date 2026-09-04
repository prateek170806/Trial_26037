import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Radio, Scan } from 'lucide-react';

const SensorFusion = () => {
  const [activeSensors, setActiveSensors] = useState({ camera: true, lidar: true, radar: true });

  const toggleSensor = (sensor) => {
    setActiveSensors(prev => ({ ...prev, [sensor]: !prev[sensor] }));
  };

  return (
    <section className="section" style={{ background: '#05070d' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Sensor Fusion Deep Dive</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>Multi-modal perception ensuring robustness even when individual sensors fail.</p>
        </div>

        {/* 3-Panel Sensor View */}
        <div className="grid-3-col" style={{ width: '100%', marginBottom: '2rem' }}>
          
          {/* Camera Panel */}
          <div className="glass-panel" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', opacity: activeSensors.camera ? 1 : 0.5, transition: 'opacity 0.3s' }}>
            <div style={{ padding: '1rem', borderBottom: 'var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Camera size={18} color="var(--color-primary)" />
                <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>RGB Camera</span>
              </div>
              <input type="checkbox" checked={activeSensors.camera} onChange={() => toggleSensor('camera')} style={{ cursor: 'pointer' }} />
            </div>
            <div style={{ height: '200px', background: '#111', position: 'relative', overflow: 'hidden' }}>
              {/* Simulated camera feed with 2D bounding boxes */}
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, #222, #000)', opacity: 0.8 }} />
              {activeSensors.camera && (
                <>
                  <div style={{ position: 'absolute', top: '40%', left: '30%', width: '60px', height: '50px', border: '1px solid #00e676', background: 'rgba(0,230,118,0.1)' }}>
                    <div style={{ position: 'absolute', top: '-15px', left: '-1px', background: '#00e676', color: '#000', fontSize: '10px', padding: '0 4px' }}>Auto 94%</div>
                  </div>
                  <div style={{ position: 'absolute', top: '50%', left: '60%', width: '20px', height: '40px', border: '1px solid var(--color-warning)', background: 'rgba(255,171,0,0.1)' }}>
                    <div style={{ position: 'absolute', top: '-15px', left: '-1px', background: 'var(--color-warning)', color: '#000', fontSize: '10px', padding: '0 4px' }}>Ped 97%</div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* LiDAR Panel */}
          <div className="glass-panel" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', opacity: activeSensors.lidar ? 1 : 0.5, transition: 'opacity 0.3s' }}>
            <div style={{ padding: '1rem', borderBottom: 'var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Scan size={18} color="var(--color-primary)" />
                <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>LiDAR 3D Point Cloud</span>
              </div>
              <input type="checkbox" checked={activeSensors.lidar} onChange={() => toggleSensor('lidar')} style={{ cursor: 'pointer' }} />
            </div>
            <div style={{ height: '200px', background: '#000', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {activeSensors.lidar && (
                <motion.div 
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  style={{ width: '100px', height: '100px', transformStyle: 'preserve-3d', position: 'relative' }}
                >
                  {/* Abstract point cloud representation */}
                  <div style={{ position: 'absolute', inset: 0, border: '1px dashed rgba(0, 229, 255, 0.5)', borderRadius: '50%' }} />
                  <div style={{ position: 'absolute', top: '20%', left: '20%', width: '40px', height: '40px', border: '1px solid var(--color-primary)', transform: 'translateZ(20px)' }} />
                </motion.div>
              )}
            </div>
          </div>

          {/* Radar Panel */}
          <div className="glass-panel" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', opacity: activeSensors.radar ? 1 : 0.5, transition: 'opacity 0.3s' }}>
            <div style={{ padding: '1rem', borderBottom: 'var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Radio size={18} color="var(--color-primary)" />
                <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>Radar Velocities</span>
              </div>
              <input type="checkbox" checked={activeSensors.radar} onChange={() => toggleSensor('radar')} style={{ cursor: 'pointer' }} />
            </div>
            <div style={{ height: '200px', background: '#0a192f', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {/* Radar sweeps */}
              <div style={{ position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', border: '1px solid rgba(0,229,255,0.1)' }} />
              <div style={{ position: 'absolute', width: '200px', height: '200px', borderRadius: '50%', border: '1px solid rgba(0,229,255,0.2)' }} />
              <div style={{ position: 'absolute', width: '100px', height: '100px', borderRadius: '50%', border: '1px solid rgba(0,229,255,0.3)' }} />
              {activeSensors.radar && (
                <>
                  <div style={{ position: 'absolute', top: '40%', left: '30%', width: '6px', height: '6px', background: 'var(--color-warning)', borderRadius: '50%' }}>
                    {/* Velocity vector line */}
                    <div style={{ position: 'absolute', top: '3px', left: '3px', width: '30px', height: '2px', background: 'var(--color-warning)', transformOrigin: 'left center', transform: 'rotate(-45deg)' }} />
                  </div>
                </>
              )}
            </div>
          </div>
          
        </div>

        {/* Converging Data Streams */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30%', height: '50px', position: 'relative', marginBottom: '2rem' }}>
           <motion.div style={{ width: '2px', height: '100%', background: 'linear-gradient(180deg, var(--color-primary) 0%, transparent 100%)' }} animate={{ opacity: activeSensors.camera ? [0.2, 1, 0.2] : 0.1 }} transition={{ repeat: Infinity, duration: 1 }} />
           <motion.div style={{ width: '2px', height: '100%', background: 'linear-gradient(180deg, var(--color-primary) 0%, transparent 100%)' }} animate={{ opacity: activeSensors.lidar ? [0.2, 1, 0.2] : 0.1 }} transition={{ repeat: Infinity, duration: 1.2 }} />
           <motion.div style={{ width: '2px', height: '100%', background: 'linear-gradient(180deg, var(--color-primary) 0%, transparent 100%)' }} animate={{ opacity: activeSensors.radar ? [0.2, 1, 0.2] : 0.1 }} transition={{ repeat: Infinity, duration: 1.4 }} />
        </div>

        {/* Fused Output */}
        <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <h3 style={{ margin: '0 0 1rem 0', color: 'var(--color-primary)' }}>Fused Occupancy Grid</h3>
          
          <div style={{ width: '100%', height: '300px', background: '#000', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="bg-grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
            
            {/* Ego Vehicle Center */}
            <div style={{ position: 'absolute', width: '20px', height: '40px', background: 'var(--color-primary)', borderRadius: '4px', boxShadow: '0 0 20px var(--color-primary)' }} />
            
            {/* Fused Detections based on active sensors */}
            <AnimatePresence>
              {(activeSensors.camera || activeSensors.lidar || activeSensors.radar) && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  style={{ position: 'absolute', top: '20%', left: '30%', width: '40px', height: '30px', background: 'rgba(255, 171, 0, 0.3)', border: '2px solid var(--color-warning)' }}
                >
                  <div style={{ color: 'var(--color-warning)', fontSize: '0.6rem', position: 'absolute', top: '-15px', whiteSpace: 'nowrap' }}>
                    CONF: {activeSensors.camera && activeSensors.lidar && activeSensors.radar ? '98%' : activeSensors.camera && activeSensors.lidar ? '85%' : '60%'}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SensorFusion;
