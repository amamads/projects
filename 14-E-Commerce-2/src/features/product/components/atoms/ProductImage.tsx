import type Product from "@/types/product";

export default function ProductImage({
  product,
  width = 30,
}: {
  product: Product;
  width?: number;
}) {
  if (!product) return null;
  const { images, brand } = product;
  return (
    <div>
      <img src={images[0]} alt={brand} className={`rounded-lg h-${width}`} />
    </div>
  );
}
