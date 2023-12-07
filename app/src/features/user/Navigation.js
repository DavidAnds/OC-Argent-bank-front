import React from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logout } from "./userSlice"

const Navigation = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.user)
  const profile = useSelector((state) => state.user.profile)

  const handleLogout = () => {
    navigate("/")
    dispatch(logout())
  }

  return (
    <>
      {user ? (
        <>
          <Link class="main-nav-item" to="/user">
            <i class="fa fa-user-circle"></i>
            {profile && profile.lastName}
          </Link>

          <button class="main-nav-item" to="/" onClick={handleLogout}>
            <i class="fa fa-sign-out"></i>
            Sign Out
          </button>
        </>
      ) : (
        <Link class="main-nav-item" to="/sign-in">
          <i class="fa fa-user-circle"></i>
          Sign In
        </Link>
      )}
    </>
  )
}

export default Navigation
