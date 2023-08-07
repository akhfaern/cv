import React from "react";
import { cn } from "../../lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const dotVariants = cva("rounded-full h-4 w-4 ml-1", {
  variants: {
    variant: {
      default: "bg-gray-300 dark:bg-gray-600",
      filled: "bg-sky-900 dark:bg-sky-300",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface RateDotProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof dotVariants> {}

const RateDot = React.forwardRef<HTMLDivElement, RateDotProps>(({ className, variant, ...props }, ref) => {
  return <div className={cn(dotVariants({ variant, className }))} ref={ref} {...props}></div>;
});

RateDot.displayName = "RateDot";

export { RateDot, dotVariants };
