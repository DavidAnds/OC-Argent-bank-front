import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Home from "./pages/home"
import SignIn from "./pages/signIn"
import User from "./pages/user"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/user",
    element: <User />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
