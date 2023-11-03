import React from "react"
import { Link } from "react-router-dom"
import Logo from "./argentBankLogo.png"

const NavBar = () => {
  return (
    <nav class="main-nav">
      <Link class="main-nav-logo" href="/">
        <img class="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
        <h1 class="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link class="main-nav-item" href="/sign-in">
          <i class="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
