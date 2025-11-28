import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';  
import Header from './components/Header'
import Dock from './components/ui/Dock';
import "./assets/css/ui/Dock.css";
import Saludo from './components/Saludo';
function App() {
  const items = [
    { icon: "bi-stars", onClick: () => console.log("Servicios") }, // Servicios
    { icon: "bi-briefcase-fill", onClick: () => console.log("Trabajos") }, // Trabajos
    { icon: "bi-images", onClick: () => console.log("Galería") }, // Galería
  ];

  return (
    <>
      <Header />
      <Saludo/>
      <Dock items={items} />
    </>
  )
}

export default App
