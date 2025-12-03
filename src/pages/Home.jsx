import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Saludo from "../components/Saludo";
import Button from "../components/ui/Button";
import Services from "../components/Services";
import { obtenerServicios } from "../api/servicesApi";

const Home = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarServicios = async () => {
      try {
        setLoading(true);
        const { success, data, error } = await obtenerServicios();

        console.log("🔍 Respuesta de Supabase:", { success, data, error });

        if (success && data && data.length > 0) {
          console.log("✅ Servicios cargados:", data);
          setServices(data);
        } else {
          console.warn("⚠️ No hay servicios disponibles");
        }

        if (error) {
          console.error("❌ Error en la respuesta:", error);
          setError(error);
        }
      } catch (err) {
        console.error("❌ Error al cargar servicios:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    cargarServicios();
  }, []);

  return (
    <>
      <div className="container-app">
        <Saludo />
        <section>
          <Button service="Servicios" />
          <Button
            service="Reservar Cita"
            onClick={() => navigate("/booking")}
          />
          <Button service="Galería" onClick={() => navigate("/Gallery")} />
        </section>

        {loading ? (
          <div style={{ textAlign: "center", padding: "2rem", color: "#666" }}>
            <p>Cargando servicios...</p>
          </div>
        ) : error ? (
          <div
            style={{ textAlign: "center", padding: "2rem", color: "#ff6b6b" }}
          >
            <p>⚠️ Error al cargar servicios.</p>
            <p style={{ fontSize: "0.9rem" }}>
              Revisa la consola para más detalles
            </p>
          </div>
        ) : services.length === 0 ? (
          <div
            style={{ textAlign: "center", padding: "2rem", color: "#ff9800" }}
          >
            <p>📭 No hay servicios disponibles en la base de datos</p>
            <p style={{ fontSize: "0.9rem" }}>
              Asegúrate de tener datos en la tabla 'services' de Supabase
            </p>
          </div>
        ) : (
          <Services services={services} />
        )}
      </div>
    </>
  );
};

export default Home;
