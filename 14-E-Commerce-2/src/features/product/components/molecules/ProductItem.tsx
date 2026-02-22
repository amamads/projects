import { Card } from "@/components/ui/card";
import type Product from "@/types/product";
import ProductImage from "../atoms/ProductImage";
import ProductInfo from "./ProductInfo";
import ProductListActions from "./ProductListActions";

export default function ProductItem({ product }: { product: Product }) {
  return (
    <Card>
      <div className="grid grid-cols-3 px-4 gap-y-7">
        <ProductImage product={product} />

        <div className="text-left col-span-2 space-y-2 ">
          <ProductInfo product={product as Product} />
        </div>
        <div className="col-span-3 space-x-2">
          <ProductListActions id={product.id} />
        </div>
      </div>
    </Card>
  );
}
