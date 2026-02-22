import Disc from "@/components/Disc";
import type { Status } from "../types";

const modes = [
  ["In Progress", "text-[#8A8CD9]", "bg-chart-1!"],
  ["Complete", "text-[#4AA785]", "bg-chart-6!"],
  ["Pending", "text-[#59A8D4]", "bg-chart-4!"],
  ["Approved", "text-[#FFC555]", "bg-[#FFE999]!"],
  ["Rejected", "text-muted-foreground", "bg-muted"],
];
export default function StatusCell({ value }: { value: Status }) {
  const color =
    modes.find((mode) => mode[0] === value) ?? modes[modes.length - 1];
  return (
    <div className={`py-1 flex ${color[1]}`}>
      <Disc childClassName={color[2]} />
      <small>{value}</small>
    </div>
  );
}
