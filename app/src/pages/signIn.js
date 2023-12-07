import React from "react"
import NavBar from "../components/NavBar/NavBar"
import Login from "../features/user/Login"
import Footer from "../components/Footer/Footer"

const SignIn = () => {
  return (
    <body>
      <NavBar />
      <main class="main bg-dark">
        <section class="sign-in-content">
          <i class="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <Login />
        </section>
      </main>
      <Footer />
    </body>
  )
}

export default SignIn
