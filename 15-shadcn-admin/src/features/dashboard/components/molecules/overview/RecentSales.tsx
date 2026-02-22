import { Avatar, AvatarFallback } from "@/components/atoms/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { formatter } from "@/shared/utils/formaatter";
import getInitial from "@/shared/utils/getInitial";

const buyers = [
  {
    fullName: "Olivia Martin",
    email: "olivia.martin@email.com",
    price: 1999,
  },
  {
    fullName: "Jackson Lee",
    email: "jackson.lee@email.com",
    price: 39,
  },
  {
    fullName: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    price: 299,
  },
  {
    fullName: "William Kim",
    email: "will@email.com",
    price: 99,
  },
  {
    fullName: "Sofia Davis",
    email: "sofia.davis@email.com",
    price: 39,
  },
];

export default function RecentSales() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="font-semibold">Recent Sales</CardTitle>
        <p className="text-muted-foreground text-sm">
          You made 265 sales this month.
        </p>
      </CardHeader>
      <CardContent className="space-y-7.5">
        {buyers.map(({ fullName, email, price }, i) => (
          <div
            className="grid grid-cols-[auto_1fr_auto] items-center w-full"
            key={fullName + i}
          >
            <Avatar className="rounded-sm">
              <AvatarFallback className="text-sm font-semibold">
                {getInitial(fullName)}
              </AvatarFallback>
            </Avatar>
            <div className="place-self-start grid justify-items-start ml-2">
              <p className="font-semibold">{fullName}</p>
              <p className="text-sm text-muted-foreground ">{email}</p>
            </div>
            <h5>+${formatter(price)}.00</h5>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
