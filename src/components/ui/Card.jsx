import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hoverEffect = true, delay = 0, style = {} }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`surface-level-1 card ${hoverEffect ? 'card-hover' : ''} ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default Card;
