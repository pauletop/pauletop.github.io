import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-white/10 bg-prim/80 px-4 py-3 placeholder:text-white/60 focus-visible:outline-none shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 hover:shadow-accent/20",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
