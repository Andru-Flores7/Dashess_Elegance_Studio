import React from "react";
import "../../assets/css/ui/Compartir.css";

const Compartir = () => {
  const handleShare = async () => {
    const shareData = {
      title: "Dashes Elegance",
      text: "¡Mira estos servicios increíbles!",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log("Contenido compartido exitosamente");
      } catch (err) {
        console.error("Error al compartir:", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Enlace copiado al portapapeles");
      } catch (err) {
        console.error("Error al copiar al portapapeles:", err);
      }
    }
  };

  return (
    <>
      <button className="button-compartir" onClick={handleShare}>
        <i className="bi bi-share-fill"></i>Compartir
      </button>
    </>
  );
};

export default Compartir;
