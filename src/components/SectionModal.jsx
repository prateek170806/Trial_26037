import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft } from 'lucide-react';

const SectionModal = ({ isOpen, onClose, onBackToMenu, children }) => {
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when any modal is open (handled globally by 100dvh, but good practice if modal has its own scroll)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'hidden'; // Keep zero-scroll global logic
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
          className="full-screen-modal surface-level-2"
          role="dialog"
          aria-modal="true"
        >
          {/* Sticky Header */}
          <header className="modal-header-sticky">
            <button
              className="btn btn-outline touch-target"
              onClick={onBackToMenu}
              aria-label="Back to menu"
              style={{ padding: '0.5rem', border: 'none' }}
            >
              <ArrowLeft size={24} aria-hidden="true" />
              <span className="text-body" style={{ fontWeight: 600, display: 'none' }}>Menu</span>
            </button>
            
            <button
              className="btn btn-outline touch-target"
              onClick={onClose}
              aria-label="Close modal"
              style={{ padding: '0.5rem', border: 'none' }}
            >
              <X size={24} aria-hidden="true" />
            </button>
          </header>

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
