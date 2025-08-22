import React from 'react'
import appFirebase from '../credenciales'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(appFirebase);


const Login = () => {

    const [registrando, setRegistrando] = React.useState(false)

    const funcAutenticar = async (e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const password = e.target.password.value;
        //console.log(correo, password);

        if (registrando) {
            try{
                // vamos a crear un nuevo usuario
                await createUserWithEmailAndPassword(auth, correo, password);
            }
            catch (error) {
                console.error("Asegúrate que la contraseña tenga al menos 8 carácteres y el correo sea válido.");
            }
        }
        else {
            try{
                // vamos a iniciar sesión
                await signInWithEmailAndPassword(auth, correo, password);
            }
            catch (error) {
                console.error("Error al iniciar sesión. Asegúrate que la clave sea válida");
            }
        }

    }


  return (
    <div className="container">
        <div className="row">
            <div className="padre"> 
                <div className="card card-body shadow-lg">
                    <form onSubmit={funcAutenticar}>
                        <input type="email" id="email" placeholder="Ingrese su correo electrónico" className="cajatexto" />
                        <input type="password" id="password" placeholder="Ingrese su contraseña" className="cajatexto" />
                        <button type="submit" className="btnform">{registrando ? "Regístrate" : "Iniciar Sesión" } </button>
                    </form>
                    <h4 className="texto">{ registrando ? "Si ya tienes cuenta" : "No tienes cuenta" } <button className="btnswitch" onClick={()=>setRegistrando(!registrando)}>{registrando ? "Iniciar Sesión" : "Regístrate"} </button></h4>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Login