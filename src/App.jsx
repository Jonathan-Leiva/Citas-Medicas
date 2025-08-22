import { useState } from 'react'
import './App.css'
import './index.css'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'

// importando las funcionalidades de Firebase
import appFirebase from './credenciales.js'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(appFirebase);


function App() {
  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if(usuarioFirebase) {
      // el usuario está autenticado
      setUsuario(usuarioFirebase);
    }else {
      // el usuario no está autenticado
      setUsuario(null);
    }
  
  });
      
  return (      
    <div>
      {usuario ? <Home correoUsuario={usuario.email}  /> : <Login />}
    </div>
  )
}

export default App
