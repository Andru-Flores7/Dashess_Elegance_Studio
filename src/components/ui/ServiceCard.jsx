import React from 'react'
import "../../assets/css/ui/ServiceCard.css"

const ServiceCard = ({ title, description, price, image, duration }) => {
  return (
    <div className="service-card">
      {image && <img src={image} alt={title} className="service-card-image" />}
      <div className="service-card-content">
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-description">{description}</p>
        <div className="service-card-details">
          <span className="service-card-duration">
            <i className="bi bi-clock"></i> {duration}
          </span>
          <p className="service-card-price">{price}</p>
        </div>
  
      </div>
    </div>
  )
}

export default ServiceCard
