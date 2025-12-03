import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Dock from "../components/ui/Dock";
import "../assets/css/ui/Dock.css";

const MainLayaut = () => {
  const navigate = useNavigate();

  const items = [
    { icon: "bi-images", onClick: () => navigate("/Gallery") }, // Galería
    { icon: "bi bi-house-fill", onClick: () => navigate("/") }, // home
    { icon: "bi bi-whatsapp", onClick: () => navigate("/booking") }, // whatsapp
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
