import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { Progress } from "@/components/atoms/progress";

const items = [
  { title: "Desktop", value: 100, number: "74%" },
  { title: "Product Hunt", value: 30, number: "22%" },
  { title: "Twitter", value: 5, number: "4%" },
];

export default function Devices() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Devices</CardTitle>
        <p className="text-sm text-muted-foreground">
          How users access your app
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map(({ title, value, number }) => (
          <div className="flex gap-5">
            <div className="flex-1 space-y-1">
              <p className="text-xs text-muted-foreground ">{title}</p>
              <Progress value={value} className="bg-muted" childClassName="bg-muted-foreground"/>
            </div>
            <span className="text-sm">{number}</span>
          </div>
        ))}
        {/* {items.map(({ title, value, number }) => (
          <div className="grid grid-cols-3 grid-rows-2 items-center">
            <p className="text-xs text-muted-foreground col-span-2">{title}</p>
            <Progress value={value} className="col-span-2" />
            <span className="">{number}</span>
          </div>
        ))} */}
      </CardContent>
    </Card>
  );
}
