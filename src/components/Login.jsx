import React, { useState } from 'react'
import appFirebase from '../credenciales'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(appFirebase);

const Login = () => {
    const [registrando, setRegistrando] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const funcAutenticar = async (e) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Debe completar email y contraseña.");
            return;
        }

        if (registrando) {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
            } catch (err) {
                setError(err.message);
            }
        } else {
            try {
                await signInWithEmailAndPassword(auth, email, password);
            } catch (err) {
                setError(err.message);
            }
        }
    }

    return (
        <div className="Login">
            <div className="row">
                <div className="padre">
                    <div className="card card-body shadow-lg">
                        <form onSubmit={funcAutenticar}>
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Ingrese su correo electrónico"
                                className="cajatexto"
                                required
                            />
                            <input
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Ingrese su contraseña"
                                className="cajatexto"
                                required
                            />
                            <button type="submit" className="btnform">
                                {registrando ? "Regístrate" : "Iniciar Sesión"}
                            </button>
                        </form>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        <h4 className="texto">
                            {registrando ? "Si ya tienes cuenta" : "No tienes cuenta"}{" "}
                            <button className="btnswitch" onClick={() => setRegistrando(!registrando)}>
                                {registrando ? "Iniciar Sesión" : "Regístrate"}
                            </button>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
    