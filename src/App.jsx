import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';  
import Header from './components/Header'
import Dock from './components/ui/Dock';
import "./assets/css/ui/Dock.css";
import Saludo from './components/Saludo';
import Button from './components/ui/Button';
import Services from './components/Services';

function App() {
  const items = [
    { icon: "bi-stars", onClick: () => console.log("Servicios") }, // Servicios
    { icon: "bi-briefcase-fill", onClick: () => console.log("Trabajos") }, // Trabajos
    { icon: "bi-images", onClick: () => console.log("Galería") }, // Galería
  ];

  const servicesData = [
    {
      title: "Extensiones de Pestañas",
      description: "Realza tu mirada con nuestras extensiones de pestañas efecto natural o volumen ruso.",
      price: "$45.00",
      duration: "2h",
      image: "https://placehold.co/600x400/e9d5ff/4a4a4a?text=Pestañas"
    },
    {
      title: "Lifting de Pestañas",
      description: "Eleva y curva tus pestañas naturales para una mirada más abierta y radiante.",
      price: "$35.00",
      duration: "1h",
      image: "https://placehold.co/600x400/e9d5ff/4a4a4a?text=Lifting"
    },
    {
      title: "Diseño de Cejas",
      description: "Perfilado y diseño de cejas personalizado según la morfología de tu rostro.",
      price: "$20.00",
      duration: "45m",
      image: "https://placehold.co/600x400/e9d5ff/4a4a4a?text=Cejas"
    },
    {
      title: "Microblading",
      description: "Técnica pelo a pelo para unas cejas perfectas y naturales de larga duración.",
      price: "$120.00",
      duration: "3h",
      image: "https://placehold.co/600x400/e9d5ff/4a4a4a?text=Microblading"
    }
  ];

  return (
    <>
      <Header />
      <div className="container-app">
      <Saludo/>
      <section>
      <Button service="Servicios"/>
      <Button service="Reservar Cita"/>
      <Button service="Galería"/>
      </section>
      
      <Services services={servicesData} />

      </div>
      <Dock items={items} />
    </>
  )
}

export default App
