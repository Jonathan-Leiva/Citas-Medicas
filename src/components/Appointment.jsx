import React, { useState, useEffect } from "react";
import { addDoc, collection, onSnapshot, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../credenciales";

function Appointment({ doctor }) {
  const auth = getAuth();
  const user = auth.currentUser;

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [appointments, setAppointments] = useState([]);

  const appointmentCollection = collection(db, "appointments");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!date || !time) {
      setMessage("Por favor selecciona fecha y hora");
      return;
    }
    if (!user) {
      setMessage("Debes iniciar sesión para agendar una cita.");
      return;
    }

    try {
      await addDoc(appointmentCollection, {
        doctorId: doctor.id,
        doctorNombre: doctor.Nombre,
        date,
        time,
        userId: user.uid,
        userEmail: user.email || "",
        userName: user.displayName || "",
        createdAt: serverTimestamp(),
      });
      setMessage("✅ Cita guardada correctamente");
      setDate("");
      setTime("");
    } catch (error) {
      console.error("Error guardando la cita: ", error);
      setMessage("❌ Error al guardar la cita");
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(appointmentCollection, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAppointments(data);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="appointment">
      <form onSubmit={handleSubmit}>
        <label>
          Fecha:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          Hora:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>
        <button type="submit">Agendar cita</button>
      </form>

      {message && <p>{message}</p>}

      <h4> Programacion de citas </h4>
      <ul>
        {appointments
          .filter((appt) => appt.doctorId === doctor.id)
          .map((appt) => (
            <li key={appt.id}>
              {appt.date} a las {appt.time} — 
              <em>Agendada por {appt.userName || appt.userEmail || appt.userId}</em>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Appointment;
