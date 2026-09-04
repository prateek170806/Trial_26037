import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft } from 'lucide-react';

const SectionModal = ({ isOpen, onClose, onBackToMenu, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onBackToMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onBackToMenu]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="full-screen-modal"
        >
          {/* Header Actions */}
          <div style={{
            position: 'sticky',
            top: 0,
            left: 0,
            right: 0,
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'linear-gradient(180deg, rgba(5,7,13,0.9) 0%, transparent 100%)',
            zIndex: 10001,
            pointerEvents: 'none' // Let clicks pass through except on buttons
          }}>
            <button
              className="touch-target"
              onClick={onBackToMenu}
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '20px',
                padding: '0.5rem 1rem',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                pointerEvents: 'auto',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
              <ArrowLeft size={16} /> Back to Menu
            </button>
            
            <button
              className="touch-target"
              onClick={onClose}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--color-text-muted)',
                pointerEvents: 'auto',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
            >
              <X size={32} />
            </button>
          </div>

          {/* Scrollable Content Container */}
          <div className="modal-content-wrapper">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SectionModal;
