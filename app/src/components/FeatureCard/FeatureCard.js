import React from "react"

const FeatureCard = ({ img, title, content }) => {
  return (
    <div class="feature-item">
      <img src={img} alt="Chat Icon" class="feature-icon" />
      <h3 class="feature-item-title">{title}</h3>
      <p>{content}</p>
    </div>
  )
}

export default FeatureCard
