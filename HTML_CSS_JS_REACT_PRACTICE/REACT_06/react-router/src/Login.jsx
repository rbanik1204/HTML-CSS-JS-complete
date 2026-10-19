import { useNavigate } from "react-router"

function Login() {
  const navigate = useNavigate()

  function handleLogin(event) {
    event.preventDefault()
    navigate("/", { replace: true })
  }

  return (
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  )
}

export { Login }
