import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Auth } from "./pages/auth";
import { CreateInquiry } from "./pages/create-inquiry";
import { Navbar } from "./components/navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/create-inquiry" element={<CreateInquiry />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
