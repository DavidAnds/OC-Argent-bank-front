import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form"
import { login } from "./userSlice"
import { useNavigate } from "react-router"
import { useEffect } from "react"

const Login = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.user)
  const status = useSelector((state) => state.user.status)
  const error = useSelector((state) => state.user.error)

  useEffect(() => {
    if (user) {
      navigate("/user")
    }
  }, [user])

  const onSubmit = (data) => {
    dispatch(login(data))
    if (status === "succeeded") {
      navigate("/user")
    }

    console.log(status, user, error)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="input-wrapper">
        <label for="username">Username</label>
        <input
          {...register("email", {
            required: true,
            type: "email",
          })}
          type="email"
        />
      </div>
      <div class="input-wrapper">
        <label for="password">Password</label>
        <input
          {...register("password", {
            type: "password",
          })}
          type="password"
        />
      </div>
      {error && (
        <div class="error-message">
          <p>{error} Please Retry</p>
        </div>
      )}
      <div class="input-remember">
        <input type="checkbox" id="remember-me" />
        <label for="remember-me">Remember me</label>
      </div>
      <button type="submit" class="sign-in-button">
        Sign In
      </button>
    </form>
  )
}

export default Login
