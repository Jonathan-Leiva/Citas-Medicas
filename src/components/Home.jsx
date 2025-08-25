import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import appFirebase from '../credenciales'
const auth = getAuth(appFirebase);
import Card from './Card.jsx'

const Home = ({correoUsuario}) => {
return (
  <div className="container">
    <header className="header">
      <span>Bienvenido usuario {correoUsuario}</span>
      <button className="btn btn-danger" onClick={() => auth.signOut()}>
        Cerrar Sesión
      </button>
    </header>

    <div>
      <main className="main-content"></main>
      <Card />
    </div>
  </div>
);

  

}

export default Home