import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';  
import Header from './components/Header'
import Dock from './components/ui/Dock';
import "./assets/css/ui/Dock.css";
import Saludo from './components/Saludo';
import Button from './components/ui/Button';
function App() {
  const items = [
    { icon: "bi-stars", onClick: () => console.log("Servicios") }, // Servicios
    { icon: "bi-briefcase-fill", onClick: () => console.log("Trabajos") }, // Trabajos
    { icon: "bi-images", onClick: () => console.log("Galería") }, // Galería
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

      </div>
      <Dock items={items} />
    </>
  )
}

export default App
