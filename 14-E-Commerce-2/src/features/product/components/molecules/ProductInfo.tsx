import RateStars from "@/components/RateStars";
import { Badge } from "@/components/ui/badge";
import type Product from "@/types/product";

type ProductInfoProps = Omit<
  Product,
  "id" | "images" | "description" | "name" | "brand" | "status"
>;
export default function ProductInfo({
  product,
}: // product,
{
  product: ProductInfoProps;
}) {
  if (!product) return null;
  const { title, price, discount, finalPrice, rate, rateCount, options } =
    product;
  return (
    <div className="text-left space-y-2 w-4/5">
      {discount === 0 ? (
        <>
          <h1>{title}</h1>
          <p>Price: {price} $</p>
        </>
      ) : (
        <>
          <h1 className="space-x-1">
            <Badge variant="destructive">{discount}%</Badge>
            <span className="text-destructive underline">{title}</span>
          </h1>

          <div className="space-x-1.5">
            <span>Price:</span>
            <span className="text-destructive line-through">{price} $</span>
            <span>{finalPrice} $</span>
          </div>
        </>
      )}
      <div className="flex items-center gap-1">
        <p>Rate:</p>
        <RateStars number={rate} />
        <Badge variant="outline">{rateCount}</Badge>
      </div>
      <div className="space-y-1">
        <div className="space-x-1">
          <Badge className="text-[10px] ">Color</Badge>
          {options.colors.map((clr, i) => (
            <Badge variant="outline" key={i} className="text-[9px]">
              {clr}
            </Badge>
          ))}
        </div>
        <div className="space-x-1">
          <Badge className="text-[10px] ">Storage</Badge>
          {options.storage.map((str, i) => (
            <Badge variant="outline" className="text-[9px]" key={i}>
              {str}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
