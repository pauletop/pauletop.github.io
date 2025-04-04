import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-[48px] rounded-md border-b-2 border-white/10 focus:border-accent font-light px-4 py-3 placeholder:text-white/60 outline-none bg-prim/60",
        className
      )}
      {...props}
    />
  );
}

export { Input };
