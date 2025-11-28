import React from "react";
import { useNavigate } from "react-router-dom";
import Saludo from "../components/Saludo";
import Button from "../components/ui/Button";
import Services from "../components/Services";
import { servicesData } from "../data/servicesData";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container-app">
        <Saludo />
        <section>
          <Button service="Servicios" />
          <Button service="Reservar Cita" />
          <Button service="Galería" onClick={() => navigate("/Gallery")} />
        </section>

        <Services services={servicesData} />
      </div>
    </>
  );
};

export default Home;
