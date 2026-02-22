import { Badge } from "@/components/atoms/badge";
import { Button } from "@/components/atoms/button";
import { Card, CardContent, CardHeader } from "@/components/atoms/card";
import type { AppData } from "../../types";

type Props = {
  data: AppData;
};

export default function AppCard({
  data: { title, description, icon: Icon, isConnected },
}: Props) {
  return (
    <Card>
      <CardHeader className="flex justify-between">
        <Badge variant="secondary" className="size-10 rounded-lg">
          <Icon className="size-8!" />
        </Badge>
        <Button variant={isConnected ? "active" : "outline"}>
          {isConnected ? "Connected" : "Connect"}
        </Button>
      </CardHeader>
      <CardContent>
        <h6 className="font-semibold">{title}</h6>
        <h6 className="text-muted-foreground">{description}</h6>
      </CardContent>
    </Card>
  );
}
