import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Camera, Radio, Combine } from 'lucide-react';

const SensorFusion = () => {
  const [activeSensors, setActiveSensors] = useState({ lidar: true, camera: true, radar: true });

  const toggleSensor = (sensor) => {
    setActiveSensors(prev => ({ ...prev, [sensor]: !prev[sensor] }));
  };

  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBlockEnd: 'var(--space-8)' }}>
          <h2 className="text-h1" style={{ marginBlockEnd: 'var(--space-2)' }}>Sensor Fusion Pipeline</h2>
          <p className="text-body" style={{ color: 'var(--color-text-muted)' }}>Multi-modal perception ensuring robustness even when individual sensors fail.</p>
        </div>

        {/* 3-Panel Sensor View */}
        <div className="grid-3-col" style={{ width: '100%', marginBlockEnd: 'var(--space-4)' }}>
          
          {/* Camera Panel */}
          <div className="surface-level-1" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', opacity: activeSensors.camera ? 1 : 0.5, transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
            <div style={{ padding: 'var(--space-3)', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
                <Camera size={20} color="#ff5722" aria-hidden="true" />
                <h3 className="text-h2" style={{ margin: 0 }}>Vision (RGB)</h3>
              </div>
              <span className="text-caption" style={{ color: activeSensors.camera ? '#00e676' : 'var(--color-text-muted)' }}>
                {activeSensors.camera ? 'ACTIVE' : 'OFFLINE'}
              </span>
            </div>
            <div style={{ height: '200px', background: '#05070d', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
               {/* Simulated Bounding Boxes */}
               {activeSensors.camera && (
                 <>
                   <div style={{ position: 'absolute', top: '30%', left: '20%', width: '60px', height: '80px', border: '2px solid #ff5722', background: 'rgba(255, 87, 34, 0.1)' }}>
                     <span className="text-caption" style={{ position: 'absolute', top: '-18px', left: 0, background: '#ff5722', color: 'white', padding: '0 4px', fontSize: '10px' }}>Pedestrian 98%</span>
                   </div>
                   <div style={{ position: 'absolute', top: '40%', right: '25%', width: '120px', height: '60px', border: '2px solid #ff5722', background: 'rgba(255, 87, 34, 0.1)' }}>
                     <span className="text-caption" style={{ position: 'absolute', top: '-18px', left: 0, background: '#ff5722', color: 'white', padding: '0 4px', fontSize: '10px' }}>Vehicle 95%</span>
                   </div>
                 </>
               )}
            </div>
          </div>

          {/* LiDAR Panel */}
          <div className="surface-level-1" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', opacity: activeSensors.lidar ? 1 : 0.5, transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
            <div style={{ padding: 'var(--space-3)', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
                <Combine size={20} color="var(--color-primary)" aria-hidden="true" />
                <h3 className="text-h2" style={{ margin: 0 }}>LiDAR (3D Pointcloud)</h3>
              </div>
              <span className="text-caption" style={{ color: activeSensors.lidar ? '#00e676' : 'var(--color-text-muted)' }}>
                {activeSensors.lidar ? 'ACTIVE' : 'OFFLINE'}
              </span>
            </div>
            <div style={{ height: '200px', background: '#05070d', position: 'relative', overflow: 'hidden' }}>
              {activeSensors.lidar && (
                <div className="bg-grid-pattern" style={{ width: '100%', height: '100%', opacity: 0.5 }}>
                  {/* Fake point cloud clusters */}
                  <div style={{ position: 'absolute', top: '30%', left: '20%', width: '50px', height: '50px', background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)', filter: 'blur(2px)' }} />
                  <div style={{ position: 'absolute', top: '40%', right: '30%', width: '80px', height: '40px', background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)', filter: 'blur(2px)' }} />
                </div>
              )}
            </div>
          </div>

          {/* Radar Panel */}
          <div className="surface-level-1" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', opacity: activeSensors.radar ? 1 : 0.5, transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
            <div style={{ padding: 'var(--space-3)', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
                <Radio size={20} color="var(--color-warning)" aria-hidden="true" />
                <h3 className="text-h2" style={{ margin: 0 }}>Radar (Velocity)</h3>
              </div>
              <span className="text-caption" style={{ color: activeSensors.radar ? '#00e676' : 'var(--color-text-muted)' }}>
                {activeSensors.radar ? 'ACTIVE' : 'OFFLINE'}
              </span>
            </div>
            <div style={{ height: '200px', background: '#05070d', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {activeSensors.radar && (
                <>
                  <div style={{ position: 'absolute', bottom: 0, left: '50%', width: '2px', height: '100%', background: 'rgba(255,255,255,0.1)' }} />
                  {/* Doppler vectors */}
                  <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 2, repeat: Infinity }} style={{ position: 'absolute', top: '40%', left: '25%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '4px', height: '30px', background: 'var(--color-warning)' }} />
                    <span className="text-caption" style={{ color: 'var(--color-warning)', marginTop: '4px' }}>-12 m/s</span>
                  </motion.div>
                  <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 3, repeat: Infinity }} style={{ position: 'absolute', top: '50%', right: '35%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '4px', height: '45px', background: '#00e676' }} />
                    <span className="text-caption" style={{ color: '#00e676', marginTop: '4px' }}>+18 m/s</span>
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Interactive Controls */}
        <div className="surface-level-1" style={{ padding: 'var(--space-4)', textAlign: 'center' }}>
          <h3 className="text-h2" style={{ marginBlockEnd: 'var(--space-2)' }}>Fault Injection Testing</h3>
          <p className="text-body" style={{ color: 'var(--color-text-muted)', marginBlockEnd: 'var(--space-3)' }}>
            Toggle sensors to simulate hardware failures. The fusion engine continues to operate on degraded inputs.
          </p>
          <div className="flex-center" style={{ gap: 'var(--space-2)', flexWrap: 'wrap' }}>
            <Button variant={activeSensors.camera ? 'primary' : 'outline'} onClick={() => toggleSensor('camera')}>Toggle Camera</Button>
            <Button variant={activeSensors.lidar ? 'primary' : 'outline'} onClick={() => toggleSensor('lidar')}>Toggle LiDAR</Button>
            <Button variant={activeSensors.radar ? 'primary' : 'outline'} onClick={() => toggleSensor('radar')}>Toggle Radar</Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SensorFusion;
