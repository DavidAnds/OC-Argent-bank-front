import React from "react"
import { Link } from "react-router-dom"
import Navigation from "../../features/user/Navigation"
import Logo from "./argentBankLogo.png"

const NavBar = () => {
  return (
    <div class="main-nav">
      <Link class="main-nav-logo" to="/">
        <img class="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
        <h1 class="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Navigation />
      </div>
    </div>
  )
}

export default NavBar
