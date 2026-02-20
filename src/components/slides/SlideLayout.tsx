import React from 'react';
import { cn } from '@/lib/utils';

interface SlideLayoutProps {
  children: React.ReactNode;
  variant?: 'default' | 'dark' | 'gradient';
  className?: string;
}

export function SlideLayout({ children, variant = 'default', className }: SlideLayoutProps) {
  const isDark = variant === 'dark' || variant === 'gradient';
  
  return (
    <div 
      className={cn(
        'w-full h-full relative font-sans slide-content',
        variant === 'default' && 'bg-[#FCFBF8] text-slate-900',
        variant === 'dark' && 'bg-slate-900 text-white',
        variant === 'gradient' && 'bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white',
        className
      )}
    >
      {/* Content */}
      <div className="w-full h-full">
        {children}
      </div>
      
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, hsl(180, 38%, 30%), hsl(174, 42%, 43%))' }} />
    </div>
  );
}
