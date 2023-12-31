import React from "react"

const SignInForm = () => {
  return (
    <form>
      <div class="input-wrapper">
        <label for="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div class="input-wrapper">
        <label for="password">Password</label>
        <input type="password" id="password" />
      </div>
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

export default SignInForm
