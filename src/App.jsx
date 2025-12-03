import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Booking from "./pages/Booking";
import MainLayaut from "./layauts/MainLayaut";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayaut />}>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/booking" element={<Booking />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
