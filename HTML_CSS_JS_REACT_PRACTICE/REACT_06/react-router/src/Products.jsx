import { useParams } from "react-router";
export default function Products() {
  const { productID } = useParams();
  return (
    <h1 className="font-extrabold text-2xl text-yellow-500 text-center">
      Products
    </h1>
  );
}
