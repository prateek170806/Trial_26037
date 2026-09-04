import React from 'react';
import { motion } from 'framer-motion';
import Metric from '../ui/Metric';
import { Activity, Cpu, Wifi, AlertOctagon } from 'lucide-react';

const MetricsDashboard = () => {
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBlockEnd: 'var(--space-8)' }}>
          <h2 className="text-h1" style={{ marginBlockEnd: 'var(--space-2)' }}>System Performance Metrics</h2>
          <p className="text-body" style={{ color: 'var(--color-text-muted)' }}>Real-time telemetry from the NavDrishti edge computing unit.</p>
        </div>

        {/* Top Level Metrics */}
        <div className="grid-3-col" style={{ marginBlockEnd: 'var(--space-4)' }}>
          <div className="surface-level-1 card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBlockEnd: 'var(--space-3)' }}>
              <Activity size={20} color="var(--color-primary)" aria-hidden="true" />
              <h3 className="text-h2" style={{ margin: 0 }}>Core Subsystems</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
              <Metric label="Perception FPS" value="60" trend="5" status="good" />
              <Metric label="Planning Latency" value="12" unit="ms" trend="-2" status="good" />
              <Metric label="Control Loop" value="100" unit="Hz" status="normal" />
              <Metric label="Localization Error" value="0.02" unit="m" trend="0.01" status="warning" />
            </div>
          </div>

          <div className="surface-level-1 card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBlockEnd: 'var(--space-3)' }}>
              <Cpu size={20} color="var(--color-accent)" aria-hidden="true" />
              <h3 className="text-h2" style={{ margin: 0 }}>Hardware Utilization</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
              <Metric label="GPU Load" value="84" unit="%" status="normal" />
              <Metric label="CPU Load" value="45" unit="%" status="good" />
              <Metric label="Memory Usage" value="12.4" unit="GB" status="normal" />
              <Metric label="Core Temp" value="72" unit="°C" status="warning" />
            </div>
          </div>

          <div className="surface-level-1 card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBlockEnd: 'var(--space-3)' }}>
              <AlertOctagon size={20} color="#ff5722" aria-hidden="true" />
              <h3 className="text-h2" style={{ margin: 0 }}>Safety & Comfort</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
              <Metric label="Interventions/1k km" value="0.2" trend="-0.1" status="good" />
              <Metric label="Max Jerk" value="2.1" unit="m/s³" status="normal" />
              <Metric label="TTC Min" value="1.8" unit="s" status="normal" />
              <Metric label="Comfort Score" value="94" unit="/100" status="good" />
            </div>
          </div>
        </div>

        {/* Wide Log Panel */}
        <div className="surface-level-1 card" style={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBlockEnd: 'var(--space-2)' }}>
            <Wifi size={20} color="var(--color-text-muted)" aria-hidden="true" />
            <h3 className="text-h2" style={{ margin: 0 }}>Live Telemetry Stream</h3>
          </div>
          <div className="font-mono text-caption" style={{ background: '#05070d', padding: 'var(--space-3)', borderRadius: '8px', color: '#00e676', height: '150px', overflowY: 'auto' }}>
            <p>[14:32:01.045] INFO: SensorFusion initialized. All inputs nominal.</p>
            <p>[14:32:01.212] DETECT: Pedestrian cluster identified at (x:12.4, y:3.1)</p>
            <p>[14:32:01.215] PREDICT: Trajectory intersects ego path in 2.4s.</p>
            <p style={{ color: 'var(--color-warning)' }}>[14:32:01.250] WARN: Dynamic Replanning triggered. Speed profile adjusted.</p>
            <p>[14:32:01.300] INFO: New trajectory published to control node.</p>
            <p>[14:32:01.800] DETECT: Pedestrian cleared ego path bounds.</p>
            <p>[14:32:01.850] INFO: Resuming nominal speed profile.</p>
            {/* Blinking cursor */}
            <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }}>_</motion.span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsDashboard;
