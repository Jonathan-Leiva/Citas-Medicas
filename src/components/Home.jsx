import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import appFirebase from '../credenciales'
const auth = getAuth(appFirebase);
import Card from './Card.jsx'

const Home = ({correoUsuario}) => {
  return (
    <div className="container">
        <h2 className="text-center">Bienvenido usuario {correoUsuario} 
        <button className="btn btn-danger" onClick={()=> auth.signOut()}>Cerrar Sesión</button>
        </h2>

        <div>
            <Card />
        </div>
       
    </div>
  )

  

}

export default Home