import { useParams } from "react-router"
export function ProductChild() {
  const { productID } = useParams()
  return (
    <>
      <main className="text-center">Nested Product ID:{productID}</main>
    </>
  )
}
