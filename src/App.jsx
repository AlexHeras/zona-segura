import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Mapa from "./pages/Mapa.jsx";
import BuscadorRutas from "./pages/BuscadorRutas.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

import "./App.css";

function App() {

  const isAuth = true;

  return (
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/*"
        element={
          isAuth ? (
            <Layout>
              <Routes>
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="blog" element={<Blog />} />
                <Route path="mapa" element={<Mapa />} />
                <Route path="Barra" element={<BuscadorRutas />} />
                <Route path="*" element={<h2>404 Página no encontrada</h2>} />
              </Routes>
            </Layout>
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
    </Routes>
  );
}

export default App;