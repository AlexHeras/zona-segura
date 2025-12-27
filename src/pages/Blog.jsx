import Cajas from '../cajas/Cajas.jsx'

export default function Blog() {

    return (
        <div className="contenedorPrincipal">
            <h2 className='inicio'>Contactos</h2>
            {/*primera caja*/}
            <Cajas
                titulo="Datos del plantel"
                parrafo="Nombre completo: Colegio de Estudios Científicos y Tecnológicos del Estado de México – Plantel Tepotzotlán."

                parrafo1="Dirección: Av. Río Chiquito s/n, Fraccionamiento “El Trébol”, C.P. 54614, Tepotzotlán, Estado de México."

                parrafo2="CCT (clave centro de trabajo): 15ETC0049A."

                parrafo3="Teléfono de contacto: (55) 5876-4558."

                parrafo4="Año de creación: 2000."

                parrafo5="Oferta educativa: Bachillerato tecnológico bivalente, con especialidades como Técnico en Programación, Técnico en Logística y Técnico en Construcción."

            />

            {/*Segunda caja*/}
            <Cajas
                titulo="Canales de Contacto Institucionales"
                parrafo="Teléfono: (55) 5876-4558."

                parrafo1="Página oficial del plantel (sección del sistema CECyTEM): cecytem.edomex.gob.mx/tepotzotlan"

                parrafo2="Página en Facebook: “Cecytem Plantel Tepotzotlán”"
            />

            {/*Tercera caja*/}
            <Cajas
                titulo="Horarios"
                parrafo="El plantel cuenta con:"
                parrafo1="Turno Vespertino"
                parrafo2="Turno Matutino"
            />

            <Cajas
                titulo="Numeros de emergencia"
                parrafo="Seguridad Publica de Tepotzotlán: 55 5876 3838"
                parrafo1="Protección Civil y Bomberos de Tepotzotlán: 55 5876 4848"
                parrafo2="LAMP Ambulancias Tepotzotlán: 55 6565 2165"
            />
        </div>
    )
}
