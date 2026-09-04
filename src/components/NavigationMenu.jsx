import React, { useEffect, useRef } from 'react';
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
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Focus trap could be added here, but at minimum focus the close button on open
  useEffect(() => {
    if (isOpen && closeBtnRef.current) {
      setTimeout(() => closeBtnRef.current.focus(), 100);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="menu-overlay surface-level-2"
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation"
        >
          <button
            ref={closeBtnRef}
            className="menu-close-btn btn btn-outline touch-target"
            onClick={onClose}
            aria-label="Close menu"
            style={{ position: 'absolute', padding: 0, border: 'none' }}
          >
            <X size={32} aria-hidden="true" />
          </button>

          <nav className="menu-grid" style={{ width: '100%', maxWidth: '1000px', paddingBlock: 'var(--space-4)', paddingInline: 'var(--space-2)' }} aria-label="Main navigation">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => onSelect(item.id)}
                className="menu-item-btn btn touch-target surface-level-1"
                style={{
                  justifyContent: 'flex-start',
                  gap: 'var(--space-2)',
                  width: '100%',
                  color: 'white',
                }}
              >
                <item.icon size={24} color={item.color} aria-hidden="true" />
                <span className="text-h2">{item.label}</span>
              </motion.button>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavigationMenu;
