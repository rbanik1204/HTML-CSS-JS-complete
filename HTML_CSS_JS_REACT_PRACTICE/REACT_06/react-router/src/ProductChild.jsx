import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
  useLocation,
} from "react-router"
export function ProductChild() {
  const { productID } = useParams()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()
  const category = searchParams.get("category") || null
  const price = searchParams.get("price") || null
  return (
    <div className="w-screen flex flex-col justify-center gap-5">
      <div className="text-center">Nested Product ID:{productID}</div>
      <div>
        <button
          className="w-24 h-10 border-2 rounded-[12px] bg-green-500 text-white"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>

      <div>
        <button
          className="w-24 h-10 border-2 rounded-[12px] bg-green-500 text-white"
          onClick={() => navigate(1)}
        >
          Go forward
        </button>
      </div>
      {category && price && (
        <div>
          <p>Selected Category:{category}</p>
          <p>Selected Price range: {price}</p>
        </div>
      )}
      <div>
        <p>{location.pathname}</p>
        <p>{location.search}</p>
        <p>{location.mask}</p>
        <p>{location.hash}</p>
        <p>{location.key}</p>
      </div>
    </div>
  )
}
