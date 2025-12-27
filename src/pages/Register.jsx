import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleRegister = () => {
        if (!email || !password) {
            setError("Todos los campos son obligatorios");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];


        // Verificar si ya existe 
        const exists = users.find((u) => u.email === email);
        if (exists) {
            setError("Este correo ya está registrado");
            return;
        }

        // Guardar nuevo usuario 
        users.push({ email, password });
        localStorage.setItem("users", JSON.stringify(users));

        setError("");
        setSuccess("Cuenta creada correctamente");

        setTimeout(() => {
            navigate("/");
        }, 1200);
    };

    return (
        <div className="body">
            <div style={{ padding: 20 }}>
                <h2>Registro</h2>

                <input className="input"
                    type="email"
                    placeholder="Correo"


                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br /><br />

                <input className="input"
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br /><br />

                <button className="button" onClick={handleRegister}>Crear cuenta</button>

                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>{success}</p>}
            </div>
        </div>
    );
} 
