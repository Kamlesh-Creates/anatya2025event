'use client';

import { useEffect } from 'react';

export default function AdminInitializer() {
  useEffect(() => {
    
    const initAdmin = async () => {
      try {
        const response = await fetch('/api/admin/init', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (response.ok) {
          console.log('✅ Admin system initialized');
        } else {
          console.warn('⚠️ Admin initialization failed');
        }
      } catch (error) {
        console.error('❌ Error initializing admin:', error);
      }
    };

    // Only run once when component mounts
    initAdmin();
  }, []);

  // This component doesn't render anything visible
  return null;
}
