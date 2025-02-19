import './style.css'
import React, { ReactNode } from 'react';

interface ContainProps {
    children: ReactNode; // Menggunakan ReactNode untuk tipe children
  }

  const Contain: React.FC<ContainProps> = ({ children }) => {
    return (
        <div className="contain">
             {children}
        </div>
    );
}

export default Contain;
