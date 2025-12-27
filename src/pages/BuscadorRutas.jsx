import React, { useState } from "react";
import "../Estilos/Buscador.css"

function BuscadorRutas() {
    const [origen, setOrigen] = useState("");
    const [destino, setDestino] = useState("");

    const abrirRuta = () => {
        if (!destino) return alert("Por favor ingresa un destino");
        const url = `https://www.google.com/maps/dir/${encodeURIComponent(origen || "Current+Location")}/${encodeURIComponent(destino)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="parrafo">
            <h2 className="titulob">Buscador de Rutas</h2>
            <input className="inputb"
                type="text"
                placeholder="Origen (opcional)"
                value={origen}
                onChange={(e) => setOrigen(e.target.value)}
            />
            <input className="inputb"
                type="text"
                placeholder="Destino"
                value={destino}
                onChange={(e) => setDestino(e.target.value)}
            />
            <button className="buttonb" onClick={abrirRuta}>
                Ver en Google Maps
            </button>
        </div>
    );
}

export default BuscadorRutas;