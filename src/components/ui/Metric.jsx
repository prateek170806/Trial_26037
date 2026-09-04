import React from 'react';
import { motion } from 'framer-motion';

const Metric = ({ label, value, unit = '', trend, status = 'normal' }) => {
  const statusColors = {
    normal: 'var(--color-primary)',
    warning: 'var(--color-warning)',
    critical: '#ff5722',
    good: '#00e676'
  };

  const valueColor = statusColors[status] || statusColors.normal;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
      <span style={{ 
        fontFamily: 'var(--font-heading)', 
        fontSize: '0.875rem', 
        color: 'var(--color-text-muted)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>
        {label}
      </span>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
        <motion.span 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-mono"
          style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            color: valueColor,
            textShadow: `0 0 10px ${valueColor}80`
          }}
        >
          {value}
        </motion.span>
        {unit && (
          <span style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>
            {unit}
          </span>
        )}
      </div>
      {trend && (
        <span style={{ 
          fontSize: '0.75rem', 
          color: trend > 0 ? statusColors.good : statusColors.warning 
        }}>
          {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}% vs last scenario
        </span>
      )}
    </div>
  );
};

export default Metric;
