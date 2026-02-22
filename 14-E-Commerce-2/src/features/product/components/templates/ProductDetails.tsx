import type Product from "@/types/product";
import useGetProductDetails from "../../hooks/use-get-product-details";
import useProductId from "../../hooks/use-product-id";
import ProductImage from "../atoms/ProductImage";
import ProductDetailsActions from "../molecules/ProductDetailsActions";
import ProductInfo from "../molecules/ProductInfo";
import ProductStatus from "../organisms/ProductStatus";
export const ProductDetails = () => {
  const productId = useProductId();

  const { product, isLoading, error, isError } =
    useGetProductDetails(productId);

  const existProduct = !!product;
  return (
    <>
      <ProductStatus
        isLoading={isLoading}
        isError={isError}
        error={error}
        existProduct={existProduct}
      />
      <div className="grid justify-items-center px-4 gap-y-7">
        <ProductImage product={product as Product} width={60}/>
        <ProductInfo product={product as Product} />
        <ProductDetailsActions id={productId} />
      </div>
    </>
  );
};
