import React, { useEffect } from "react";
import { useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { doctorsCollection } from "./Controller.jsx"; // Importamos la colección de doctores
import Appointment from "./Appointment";


function Card(){
    const [doctors, setDoctors] = React.useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(doctorsCollection, (snapshot) => {
            const doctorsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setDoctors(doctorsData);
            //console.log("doctores actualizados:", doctorsData);

        });
        return () => unsubscribe(); // limpiar el efecto al desmontar el componente
    }, []);   


return (
  <div className="doctors-page">
    <h2 className="page-title">Doctores activos</h2>

    <div className="doctors-grid">
      {doctors.map((doctor) => (
        <div className="card" key={doctor.id}>
          <img
            src={doctor.Avatar}
            className="card-img-top"
            alt={doctor.name}
          />
          <div className="card-body">
            <h5 className="card-title">{doctor.name}</h5>
            <p className="card-text">{doctor.description}</p>
            <p className="card-text">
              <small className="text-muted">
                Precio de cita médica: ${doctor.price}
              </small>
              <Appointment doctor={doctor} /> 
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

}
export default Card;