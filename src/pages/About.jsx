import { useState } from "react";
import "../Estilos/estilos.css"


export default function About() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Formulario enviado:\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <section>
      <form className="form-container" onSubmit={handleSubmit}>
        <h1>Formulario de Contacto</h1>
        <label>
          Nombre:
          <input className="inputf"
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
          />
        </label>

        <label>
          Correo:
          <input className="inputf"
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="tucorreo@email.com"
            required
          />
        </label>

        <label>
          Mensaje:
          <textarea className="inputf"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Escribe tu mensaje aquí..."
            required
          />
        </label>

        <button className="buttonf" type="submit">Enviar</button>
      </form>
    </section>

  );
}