import './style.css'
import React, { ReactNode } from 'react';

interface BackgroundProps {
    children: ReactNode; // Menggunakan ReactNode untuk tipe children
  }

  const Background: React.FC<BackgroundProps> = ({ children }) => {
    return (
        <div className="background"
        style={{
            width: '100vw',
            height: '100vh',
            background: 'linear-gradient(45deg, #000f3f, #000a2a)'
        }}>
             {children}
        </div>
    );
}

export default Background;
