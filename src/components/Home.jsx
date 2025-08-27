import React from 'react'
import { getAuth } from "firebase/auth";
import Card from './Card.jsx'

const Home = ({ usuario }) => {
  const auth = getAuth();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (err) {
      console.error("Error cerrando sesión: ", err);
    }
  }

  return (
    <div className="container">
      <header className="header">
        <span>Bienvenido usuario {usuario.email}</span>
        <button className="btn btn-danger" onClick={handleSignOut}>
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
