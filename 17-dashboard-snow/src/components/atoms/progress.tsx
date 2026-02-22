import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

function Progress({
  className,
  childClassName,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & {childClassName?:string}) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "dark:bg-[#444c53] bg-[#e6eef5] relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn("bg-primary h-full w-full flex-1 transition-all",childClassName)}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
