import React from "react"
import NavBar from "../components/NavBar/NavBar"
import FeatureCard from "../components/FeatureCard/FeatureCard"
import iconChat from "./icon-chat.png"
import iconMoney from "./icon-money.png"
import iconSecurity from "./icon-security.png"
import Footer from "../components/Footer/Footer"

const Home = () => {
  return (
    <body>
      <NavBar />
      <main>
        <div class="hero">
          <section class="hero-content">
            <h2 class="sr-only">Promoted Content</h2>
            <p class="subtitle">No fees.</p>
            <p class="subtitle">No minimum deposit.</p>
            <p class="subtitle">High interest rates.</p>
            <p class="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
        <section class="features">
          <h2 class="sr-only">Features</h2>
          <FeatureCard
            img={iconChat}
            title="You are our #1 priority"
            content="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          />
          <FeatureCard
            img={iconMoney}
            title="More savings means higher rates"
            content="The more you save with us, the higher your interest rate will be!"
          />
          <FeatureCard
            img={iconSecurity}
            title="Security you can trust"
            content="We use top of the line encryption to make sure your data and money is always safe."
          />
        </section>
      </main>
      <Footer />
    </body>
  )
}

export default Home
