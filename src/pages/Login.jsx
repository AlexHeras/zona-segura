import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Estilos/Login.css"

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const foundUser = users.find(
            (u) => u.email === email && u.password === password
        );

        if (foundUser) {
            navigate("/home");
        } else {
            setError("Correo o contraseña incorrectos");
        }
    };

    return (
        <div className="body">
            <div className="login-container" style={{ padding: 20 }}>
                <h2>Login</h2>
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

                <button className="button" onClick={handleLogin}>Iniciar sesión</button>

                {error && <p style={{ color: "red" }}>{error}</p>}

                <hr style={{ margin: "20px 0" }} />

                <button className="button" onClick={() => navigate("/register")}>
                    Crear cuenta
                </button>
            </div>
        </div>
    );
} 
