import React from "react";
import "../../assets/css/ui/ServiceCard.css";

const ServiceCard = ({
  title,
  description,
  price,
  deposit,
  image,
  duration,
}) => {
  console.log("ServiceCard recibió:", {
    title,
    image,
    price,
    deposit,
    duration,
  });

  return (
    <div className="service-card">
      {image ? (
        <img
          src={image}
          alt={title}
          className="service-card-image"
          onError={(e) => {
            console.error("Error cargando imagen:", image);
            e.target.style.display = "none";
          }}
        />
      ) : (
        <div
          className="service-card-image"
        >
          Sin imagen
        </div>
      )}
      <div className="service-card-content">
        <h3 className="service-card-title">{title}</h3>
        {description && (
          <p className="service-card-description">{description}</p>
        )}
        <div className="service-card-details">
          <span className="service-card-duration">
            <i className="bi bi-clock"></i> {duration}
          </span>
          <div className="service-card-pricing">
            <p className="service-card-price">
              {price ? `$${price}` : "Consultar precio"}
            </p>
            <p className="service-card-deposit">
              Seña: {deposit ? `$${deposit}` : "Consultar"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
