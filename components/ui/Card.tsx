import React from 'react';
import { cn } from '../../lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface CardProps extends HTMLMotionProps<"div"> {
  variant?: 'default' | 'outlined' | 'glass';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'bg-white',
      outlined: 'border border-neutral-200 bg-transparent',
      glass: 'bg-white/20 backdrop-blur-xl border border-white/40 shadow-2xl',
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          'rounded-[40px] overflow-hidden',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
Card.displayName = 'Card';

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex-1 p-12 lg:p-16 flex items-center justify-center relative overflow-hidden', className)}
      {...props}
    >
      {children}
    </div>
  );
});
CardHeader.displayName = 'CardHeader';

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('p-12 lg:p-16 pt-0 text-center', className)}
      {...props}
    >
      {children}
    </div>
  );
});
CardContent.displayName = 'CardContent';
