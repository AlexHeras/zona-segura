import "../Estilos/Cajas.css"

function Cajas({ titulo, parrafo, parrafo1, parrafo2, parrafo3, parrafo4, parrafo5, }) {
    return (
        <div className="contenedorTexto">
            <h5 className="contenedorTitulo">{titulo}</h5>
            <p className="contenedorParrafo">{parrafo}</p>
            <p className="contenedorParrafo">{parrafo1}</p>
            <p className="contenedorParrafo">{parrafo2}</p>
            <p className="contenedorParrafo">{parrafo3}</p>
            <p className="contenedorParrafo">{parrafo4}</p>
            <p className="contenedorParrafo">{parrafo5}</p>
        </div>
    )
}

export default Cajas;