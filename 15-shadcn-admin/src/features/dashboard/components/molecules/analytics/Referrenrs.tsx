import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { Progress } from "@/components/atoms/progress";

const items = [
  { title: "Direct", value: 100, number: 512 },
  { title: "Product Hunt", value: 40, number: 238 },
  { title: "Twitter", value: 30, number: 174 },
  { title: "Blog", value: 20, number: 104 },
];

export default function Referrenrs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Referrers</CardTitle>
        <p className="text-sm text-muted-foreground">
          Top sources driving traffic
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map(({ title, value, number }) => (
          <div className="flex gap-5">
            <div className="flex-1 space-y-1">
              <p className="text-xs text-muted-foreground ">{title}</p>
              <Progress value={value} className="bg-muted"/>
            </div>
            <span className="text-sm">{number}</span>
          </div>
        ))}
        {/* {items.map(({ title, value, number }) => (
            <div className="flex">
                <p className="text-xs text-muted-foreground col-span-2">{title}</p>
                <Progress value={value} className="col-span-2"/>
                <span className="">{number}</span>
            </div>
            ))} */}
      </CardContent>
    </Card>
  );
}
