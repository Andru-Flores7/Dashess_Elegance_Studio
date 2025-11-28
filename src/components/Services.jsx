import React from 'react'
import ServiceCard from './ui/ServiceCard'
import "../assets/css/Services.css"

const Services = ({ services }) => {
  return (
    <section className="services-section">
      <h2 className="services-title">Nuestros Servicios</h2>
      <p className="services-subtitle">Descubre nuestros tratamientos exclusivos diseñados para realzar tu belleza natural.</p>
      <div className="services-container">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            title={service.title}
            description={service.description}
            price={service.price}
            duration={service.duration}
            image={service.image}
          />
        ))}
      </div>
    </section>
  )
}

export default Services
