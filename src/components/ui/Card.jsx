import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hoverEffect = true, delay = 0, style = {} }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hoverEffect ? { 
        y: -5, 
        boxShadow: "0 10px 40px -10px rgba(0, 229, 255, 0.3)",
        borderColor: "rgba(0, 229, 255, 0.5)"
      } : {}}
      className={`glass-panel ${className}`}
      style={{
        padding: '1.5rem',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        ...style
      }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
