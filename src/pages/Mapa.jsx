import mapar from "../assets/mapar.jpg"
import "../Estilos/estilos.css"
export default function Mapa() {
    return (
        <div className="foto">
            <h1 className="inicio">MAPA DE RUTAS</h1>
            <img className="contenedorImagenb"
                src={mapar} />
        </div>
    );
}