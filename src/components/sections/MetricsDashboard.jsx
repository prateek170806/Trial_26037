import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Metric from '../ui/Metric';
import { CheckCircle2, TrendingUp, AlertTriangle } from 'lucide-react';

const MetricsDashboard = () => {
  return (
    <section className="section" style={{ background: '#05070d' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>System Performance</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>Real-time telemetry and benchmark comparisons against baseline models.</p>
        </div>

        <div className="grid-3-col" style={{ marginBottom: '4rem' }}>
          
          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ padding: '0.5rem', background: 'rgba(0, 230, 118, 0.1)', borderRadius: '8px', color: '#00e676' }}>
                <CheckCircle2 size={24} />
              </div>
              <span style={{ fontSize: '0.75rem', color: '#00e676', border: '1px solid #00e676', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>VALIDATED</span>
            </div>
            <Metric label="Scenario Completion" value="100" unit="%" status="good" />
            <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>5/5 Critical Scenarios Passed</div>
          </Card>

          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ padding: '0.5rem', background: 'rgba(0, 229, 255, 0.1)', borderRadius: '8px', color: 'var(--color-primary)' }}>
                <TrendingUp size={24} />
              </div>
            </div>
            <Metric label="Avg Replanning Latency" value="45" unit="ms" />
            <div style={{ marginTop: '1rem', height: '40px', display: 'flex', alignItems: 'flex-end', gap: '4px' }}>
              {/* Sparkline */}
              {[40, 52, 45, 48, 42, 46, 41, 45].map((val, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${(val/60)*100}%` }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{ flex: 1, background: 'var(--color-primary)', borderRadius: '2px 2px 0 0', opacity: 0.7 }} 
                />
              ))}
            </div>
          </Card>

          <Card>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ padding: '0.5rem', background: 'rgba(255, 171, 0, 0.1)', borderRadius: '8px', color: 'var(--color-warning)' }}>
                <AlertTriangle size={24} />
              </div>
            </div>
            <Metric label="Avg Path Smoothness" value="0.94" status="warning" />
            <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>1.0 = Perfectly Smooth</div>
          </Card>
        </div>

        {/* Comparison Table */}
        <div className="glass-panel" style={{ padding: '2rem', overflowX: 'auto' }}>
          <h3 style={{ margin: '0 0 1.5rem 0' }}>Baseline vs NavDrishti</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
                <th style={{ padding: '1rem 0' }}>METRIC</th>
                <th style={{ padding: '1rem 0' }}>STANDARD BASELINE</th>
                <th style={{ padding: '1rem 0', color: 'var(--color-primary)' }}>NAVDRISHTI (OURS)</th>
                <th style={{ padding: '1rem 0' }}>IMPROVEMENT</th>
              </tr>
            </thead>
            <tbody>
              {[
                { metric: 'Collision Avoidance Rate', base: '78%', ours: '99.5%', imp: '+27.5%', impColor: '#00e676' },
                { metric: 'Replanning Latency', base: '120ms', ours: '45ms', imp: '-62.5%', impColor: '#00e676' },
                { metric: 'Agent Detection Accuracy', base: '68%', ours: '94%', imp: '+38.2%', impColor: '#00e676' },
                { metric: 'False Positive Brakes', base: '12/hr', ours: '1.5/hr', imp: '-87.5%', impColor: '#00e676' }
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1.25rem 0', fontWeight: '500' }}>{row.metric}</td>
                  <td style={{ padding: '1.25rem 0', color: 'var(--color-text-muted)' }} className="font-mono">{row.base}</td>
                  <td style={{ padding: '1.25rem 0', color: 'var(--color-primary)', fontWeight: 'bold' }} className="font-mono">{row.ours}</td>
                  <td style={{ padding: '1.25rem 0', color: row.impColor, fontWeight: 'bold' }}>{row.imp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MetricsDashboard;
