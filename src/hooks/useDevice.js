import { useState, useEffect } from 'react';

export const useDevice = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isLowEnd: false,
    orientation: 'landscape',
  });

  useEffect(() => {
    const evaluateDevice = () => {
      const width = window.innerWidth;
      
      const isMobile = width <= 768;
      const isTablet = width > 768 && width <= 1024;
      const isDesktop = width > 1024;

      // Determine orientation
      const orientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';

      // Detect low end device (<= 4 cores OR <= 4GB RAM)
      const hardwareConcurrency = navigator.hardwareConcurrency || 4;
      const deviceMemory = navigator.deviceMemory || 4;
      const isLowEnd = hardwareConcurrency <= 4 || deviceMemory <= 4 || isMobile; // aggressively optimizing mobile

      setDeviceInfo({
        isMobile,
        isTablet,
        isDesktop,
        isLowEnd,
        orientation,
      });
    };

    evaluateDevice();
    window.addEventListener('resize', evaluateDevice);
    window.addEventListener('orientationchange', evaluateDevice);

    return () => {
      window.removeEventListener('resize', evaluateDevice);
      window.removeEventListener('orientationchange', evaluateDevice);
    };
  }, []);

  return deviceInfo;
};
