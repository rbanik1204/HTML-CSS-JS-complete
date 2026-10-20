import { useNavigate } from "react-router"
export default function About() {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center gap-5">
      <h1 className="font-extrabold text-2xl text-green-500 text-center">
        About
      </h1>
      <button
        className="w-24 h-10 border-2 rounded-[12px] bg-green-500 text-white"
        onClick={() => navigate(-1)}
      >
        Go Backward
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
