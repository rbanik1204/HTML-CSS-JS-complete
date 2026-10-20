import { useParams, useNavigate } from "react-router"
export function HomeChild() {
  const { id } = useParams()
  return (
    <div className="w-screen flex justify-center">
      <main className="text-center">Nested Home ID:{id}</main>
      <button
        className="w-24 h-10 border-2 rounded-[12px] bg-green-500 text-white"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
      <button
        className="w-24 h-10 border-2 rounded-[12px] bg-green-500 text-white"
        onClick={() => navigate(1)}
      >
        Go forward
      </button>
    </div>
  )
}
