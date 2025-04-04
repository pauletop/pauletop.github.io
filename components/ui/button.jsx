import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-base font-medium ring-offset-white transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-prim shadow-xs hover:shadow-accent-hover/80 cursor-pointer",
        primary: "bg-prim text-white",
        "outline-blue":
          "border bg-background shadow-xs hover:bg-accent hover:text-blue-dark cursor-pointer",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
      },
      size: {
        default: "h-9 px-6 py-2 has-[>svg]:px-3",
        md: "h-[48px] gap-1.5 px-6 has-[>svg]:px-2.5",
        lg: "h-[56px] font-caps px-8 text-sm uppercase tracking-[2px] has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
