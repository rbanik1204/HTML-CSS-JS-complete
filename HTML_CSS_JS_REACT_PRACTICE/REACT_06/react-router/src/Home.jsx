import { useParams, Outlet, useNavigate } from "react-router"
export default function Home() {
  const navigate = useNavigate()
  function handleClick() {
    navigate("/about")
  }

  const { id } = useParams()
  return (
    <div className="flex justify-center gap-3">
      <h1 className="font-extrabold text-2xl text-red-500 text-center">Home</h1>
      <button
        onClick={handleClick}
        className="w-24 h-10 border-2 rounded-[12px] bg-green-500 text-white"
      >
        Go to About
      </button>
      {id && <Outlet />}
    </div>
  )
}
