import Navbar from "./Navbar.jsx"
import "../Estilos/estilos.css"

export default function Header() {
    return (
        <header className="site-header">
            <div className="container">
                <p className="brand">ZONA SEGURA</p>
                <Navbar />
            </div>
        </header>
    );
}