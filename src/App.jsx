import { useState, useEffect } from 'react'
import './App.css'
import './index.css'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import Appointment from './components/Appointment.jsx'

import appFirebase from './credenciales.js'
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(appFirebase);

function App() {
  const [usuario, setUsuario] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase);
      } else {
        setUsuario(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {usuario ? <Home correoUsuario={usuario.email} /> : <Login />}
    </div>
  )
}

export default App