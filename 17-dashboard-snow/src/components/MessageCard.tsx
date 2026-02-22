import type { MessagesCard } from "@/types";
import capitalize from "@/utils/capitalize";
import { cva, type VariantProps } from "class-variance-authority";
import { TrendingDown, TrendingUp } from "lucide-react";

const messageCardVariants = cva("p-6 rounded-lg grid gap-2", {
  variants: {
    variant: {
      positive: "bg-primary text-primary-foreground",
      negative: "bg-secondary text-secondary-foreground",
      third: "bg-card text-card-foreground",
    },
  },
  defaultVariants: {
    variant: "positive",
  },
});

export default function MessageCard({
  data: { title, value, percent, isPositive },
  variant,
}: {
  data: MessagesCard;
} & VariantProps<typeof messageCardVariants>) {
  return (
    <div className={messageCardVariants({ variant })}>
      <h6>{capitalize(title)}</h6>
      <div className="flex justify-between items-center">
        <h3>{value}</h3>
        <span className="flex gap-1">
          <small>
            {isPositive ? "+" : "-"}
            {percent}%
          </small>
          {isPositive ? (
            <TrendingUp className="size-4" />
          ) : (
            <TrendingDown className="size-4" />
          )}
        </span>
      </div>
    </div>
  );
}
