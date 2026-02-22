import { cn } from "@/lib/utils";
import type { ParentAndChildClassNameProps } from "@/types";

export default function Disc({
  className,
  childClassName,
}: ParentAndChildClassNameProps) {
  return (
    <div className={cn(className,"size-4 flex justify-center items-center")}>
      <div className={`size-1.5 bg-muted rounded-full ${childClassName}`} />
      {/* <div className={cn(childClassName,"size-1.5 bg-muted rounded-full")} /> */}
    </div>
  );
}
