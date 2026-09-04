import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', className = '', icon: Icon }) => {
  const baseStyle = {
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontFamily: 'var(--font-heading)',
    fontWeight: '600',
    fontSize: '1rem',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    position: 'relative',
    overflow: 'hidden',
  };

  const variants = {
    primary: {
      background: 'linear-gradient(90deg, rgba(0, 229, 255, 0.2), rgba(124, 77, 255, 0.2))',
      color: 'var(--color-primary)',
      border: '1px solid var(--color-primary)',
      boxShadow: '0 0 15px rgba(0, 229, 255, 0.2)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-text-main)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    },
    danger: {
      background: 'rgba(255, 87, 34, 0.1)',
      color: '#ff5722',
      border: '1px solid #ff5722',
    }
  };

  return (
    <motion.button
      whileHover={{ 
        scale: 1.05,
        boxShadow: variant === 'primary' 
          ? '0 0 25px rgba(0, 229, 255, 0.5)' 
          : '0 0 15px rgba(255, 255, 255, 0.2)'
      }}
      whileTap={{ scale: 0.95 }}
      style={{ ...baseStyle, ...variants[variant] }}
      className={className}
      onClick={onClick}
    >
      {children}
      {Icon && <Icon size={18} />}
    </motion.button>
  );
};

export default Button;
