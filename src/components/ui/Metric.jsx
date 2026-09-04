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
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
      <span className="text-caption">
        {label}
      </span>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-1)' }}>
        <motion.span 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-h1"
          style={{ 
            color: valueColor,
            textShadow: `0 0 10px ${valueColor}80`,
            lineHeight: 1
          }}
        >
          {value}
        </motion.span>
        {unit && (
          <span className="text-caption" style={{ textTransform: 'none' }}>
            {unit}
          </span>
        )}
      </div>
      {trend && (
        <span className="text-caption" style={{ 
          color: trend > 0 ? statusColors.good : statusColors.warning,
          textTransform: 'none'
        }}>
          {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}% vs last
        </span>
      )}
    </div>
  );
};

export default Metric;
