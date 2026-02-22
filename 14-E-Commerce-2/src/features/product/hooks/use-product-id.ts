import { useParams } from "react-router";

export default function useProductId() {
  const { "product-id": paramId } = useParams();
  return Number(paramId);
}
