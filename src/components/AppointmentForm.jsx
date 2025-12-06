import React, { useState } from "react";
import "../assets/css/AppointmentForm.css";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Número de teléfono de WhatsApp (Reemplazar con el número real)
    const phoneNumber = "5493885978895"; // Ejemplo: 54 9 11 1234 5678

    const text =
      `Hola! Me gustaría agendar una cita.%0A%0A` +
      `*Nombre:* ${formData.name}%0A` +
      `*Servicio:* ${formData.service}%0A` +
      `*Fecha:* ${formData.date}%0A` +
      `*Hora:* ${formData.time}%0A` +
      `*Mensaje:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="appointment-form-container">
      <h2 className="appointment-form-title">Reservar Cita</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Nombre Completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Tu nombre"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="service">
            Servicio de Interés
          </label>
          <input
            type="text"
            id="service"
            name="service"
            className="form-input"
            value={formData.service}
            onChange={handleChange}
            required
            placeholder="Ej: Manicura Semipermanente"
          />
        </div>

        <div className="form-group form-row">
          <div style={{ flex: 1 }}>
            <label className="form-label" htmlFor="date">
              Fecha
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="form-input"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ flex: 1 }}>
            <label className="form-label" htmlFor="time">
              Hora Preferida
            </label>
            <input
              type="time"
              id="time"
              name="time"
              className="form-input"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="message">
            Mensaje Adicional (Opcional)
          </label>
          <textarea
            id="message"
            name="message"
            className="form-textarea"
            value={formData.message}
            onChange={handleChange}
            placeholder="¿Alguna consulta o detalle extra?"
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          <i className="bi bi-whatsapp"></i>
          Enviar a WhatsApp
        </button>

        <p className="form-disclaimer">
          * El horario seleccionado es de preferencia. La confirmación final
          dependerá de la disponibilidad de la especialista.
        </p>
      </form>
    </div>
  );
};

export default AppointmentForm;
