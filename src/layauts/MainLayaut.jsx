import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Dock from "../components/ui/Dock";
import "../assets/css/ui/Dock.css";

const MainLayaut = () => {
  const navigate = useNavigate();

  const items = [
    { icon: "bi-stars", onClick: () => navigate("/turnos") }, // Servicios
    { icon: "bi bi-house-fill", onClick: () => navigate("/") }, // Trabajos
    { icon: "bi-images", onClick: () => navigate("/Gallery") }, // Galería
  ];

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Dock items={items} />
    </>
  );
};

export default MainLayaut;
