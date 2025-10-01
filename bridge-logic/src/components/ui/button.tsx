import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-elegant focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-light shadow-corporate hover:shadow-elegant",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-corporate",
        outline: "border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground hover:shadow-soft",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-light shadow-corporate",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        
        // Elite Corporate Variants
        hero: "premium-gradient text-primary-foreground hover:shadow-premium hover:scale-105 font-bold shadow-elegant backdrop-blur-sm",
        corporate: "corporate-gradient text-primary-foreground hover:shadow-elegant hover:scale-102 font-semibold shadow-corporate",
        innovation: "innovation-gradient text-white hover:shadow-energy hover:scale-105 font-semibold shadow-corporate",
        energy: "bg-energy text-energy-foreground hover:bg-energy-light shadow-energy hover:shadow-premium font-semibold",
        accent: "bg-accent text-accent-foreground hover:bg-accent-light shadow-corporate hover:shadow-elegant font-semibold",
        "outline-corporate": "border-2 border-primary text-primary bg-background hover:bg-primary hover:text-primary-foreground font-semibold hover:shadow-corporate",
        "outline-innovation": "border-2 border-accent text-accent bg-background hover:bg-accent hover:text-accent-foreground font-semibold hover:shadow-energy",
        glass: "glass-effect text-white hover:scale-105 shadow-premium hover:shadow-glow font-semibold backdrop-blur-md border-white/30",
        premium: "bg-gradient-to-r from-primary via-accent to-energy text-white hover:shadow-premium hover:scale-105 font-bold shadow-elegant",
        elite: "bg-gradient-to-br from-primary-dark via-primary to-primary-glow text-primary-foreground hover:shadow-glow hover:scale-105 font-bold shadow-premium",
      },
      size: {
        default: "h-12 px-6 py-3 text-base",
        sm: "h-10 rounded-lg px-4 text-sm",
        lg: "h-14 rounded-xl px-8 text-lg font-bold",
        xl: "h-16 rounded-2xl px-10 text-xl font-bold",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
