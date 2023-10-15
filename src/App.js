import "./App.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Upload from "./Components/Upload";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <br />
      <center>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" element={<Card />}></Route>
              <Route path="/read" element={<Upload />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        
        <Footer />
      </center>
    </>
  );
}

export default App;
