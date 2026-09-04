import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, RouteOff, BrainCircuit, Crosshair, Database, Compass, Navigation, Wrench, BarChart2, Users, PlaySquare } from 'lucide-react';

const menuItems = [
  { id: 'home', label: 'Home', icon: Home, color: 'var(--color-primary)' },
  { id: 'problem', label: 'The Indian Road Challenge', icon: RouteOff, color: 'var(--color-warning)' },
  { id: 'architecture', label: 'The Intelligence Stack', icon: BrainCircuit, color: '#ff5722' },
  { id: 'scenarios', label: 'Proving Ground', icon: Crosshair, color: 'var(--color-accent)' },
  { id: 'sensor-fusion', label: 'Sensor Fusion Deep Dive', icon: Database, color: '#00e676' },
  { id: 'prediction', label: 'Prediction Engine', icon: Compass, color: 'var(--color-primary)' },
  { id: 'path-planning', label: 'Real-Time Path Planning', icon: Navigation, color: 'var(--color-warning)' },
  { id: 'tech-stack', label: 'Tech Stack & Tools', icon: Wrench, color: '#ff5722' },
  { id: 'metrics', label: 'Performance Dashboard', icon: BarChart2, color: 'var(--color-accent)' },
  { id: 'team', label: 'Team', icon: Users, color: '#00e676' },
  { id: 'video', label: 'Demo Video', icon: PlaySquare, color: 'var(--color-primary)' },
];

const NavigationMenu = ({ isOpen, onClose, onSelect }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="menu-overlay"
        >
          <button
            className="menu-close-btn touch-target"
            onClick={onClose}
            style={{
              position: 'absolute',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-text-main)',
              zIndex: 10000,
            }}
          >
            <X size={32} />
          </button>

          <div className="menu-grid" style={{ width: '100%', maxWidth: '1000px', padding: '2rem 1rem' }}>
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)', boxShadow: `0 0 20px ${item.color}40` }}
                whileTap={{ scale: 0.98, backgroundColor: 'rgba(255,255,255,0.15)' }}
                onClick={() => {
                  onSelect(item.id);
                }}
                className="menu-item-btn touch-target"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.2rem',
                  width: '100%',
                  background: 'rgba(255,255,255,0.05)',
                  border: `1px solid rgba(255,255,255,0.1)`,
                  borderRadius: '12px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  color: 'white',
                  fontFamily: 'var(--font-heading)',
                  transition: 'all 0.2s ease',
                }}
              >
                <item.icon size={24} color={item.color} />
                <span className="text-menu">{item.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavigationMenu;
