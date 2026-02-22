import ItemBtns from "@/components/ItemBtns";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/router";
import { Link } from "react-router";

export default function ProductListActions({ id }: { id: number }) {
  return (
    <div className="space-x-2">
      <ItemBtns id={id} />
      <Link to={ROUTES.main.toPDP(id)}>
        <Button>Details</Button>
      </Link>
    </div>
  );
}
