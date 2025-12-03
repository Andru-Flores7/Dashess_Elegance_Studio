import React from "react";
import AppointmentForm from "../components/AppointmentForm";

const Booking = () => {
  return (
    <div
      className="container-app"
      style={{
        paddingTop: "100px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AppointmentForm />
    </div>
  );
};

export default Booking;
