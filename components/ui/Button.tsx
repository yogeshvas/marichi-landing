import React from 'react';
import { cn } from '../../lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
    const variants = {
      primary: 'bg-black text-white hover:bg-neutral-800',
      secondary: 'bg-neutral-100 text-black hover:bg-neutral-200',
      outline: 'border border-white text-white bg-white/10 hover:bg-white/20 backdrop-blur-md',
      ghost: 'bg-transparent text-neutral-900 hover:bg-neutral-100',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-2',
      lg: 'px-8 py-3',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'rounded-full font-semibold transition-all duration-200',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
