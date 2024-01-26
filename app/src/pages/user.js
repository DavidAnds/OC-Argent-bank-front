import { useEffect } from "react"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import AccountCard from "../components/AccountCard/AccountCard"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import UserInfo from "../features/user/UserInfo"

const User = () => {
  const user = useSelector((state) => state.user.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate("/sign-in")
    }
  }, [user])

  return (
    <body>
      <NavBar />
      <main class="main bg-dark">
        <h2 class="sr-only">Accounts</h2>
        <UserInfo />
        <AccountCard title="Argent Bank Checking (x8349)" amount="$2,082.79" amountDescription="Available Balance" />
        <AccountCard title="Argent Bank Savings (x6712)" amount="$10,928.42" amountDescription="Available Balance" />
        <AccountCard title="Argent Bank Credit Card (x8349)" amount="$184.30" amountDescription="Current Balance" />
      </main>
      <Footer />
    </body>
  )
}

export default User
