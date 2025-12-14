import React, { useEffect } from 'react';

// Declaration for the global lucide object loaded via script tag
declare const lucide: {
  createIcons: () => void;
  icons: Record<string, unknown>;
};

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, className = '' }) => {
  useEffect(() => {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }, [name]);

  return (
    <i 
      data-lucide={name} 
      className={className}
      style={{ width: size, height: size, display: 'inline-block' }}
    ></i>
  );
};

export default Icon;
