import { useParams } from "react-router"
export function HomeChild() {
  const { id } = useParams()
  return (
    <>
      <main className="text-center">Nested Home ID:{id}</main>
    </>
  )
}
