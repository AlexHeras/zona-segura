import { NavLink } from "react-router-dom";

export default function Navbar() {
    const active = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");
    return (
        <nav className="navbar">
            <NavLink to="/home" className={active} end>
                Inicio
            </NavLink>
            <NavLink to="/about" className={active}>
                Reportes
            </NavLink>
            <NavLink to="/blog" className={active}>
                Contactos
            </NavLink>
            <NavLink to="/mapa" className={active}>
                Mapa
            </NavLink>
            <NavLink to="/barra" className={active}>
                Barra
            </NavLink>

        </nav >
    );
}