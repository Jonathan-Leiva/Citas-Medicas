import React, { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { consultasCollection } from "./Controller.jsx";
import Appointment from "./Appointment";

function Card() {
    const [consultas, setConsultas] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(consultasCollection, (snapshot) => {
            const consultasData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setConsultas(consultasData);
        });
        return () => unsubscribe();
    }, []);

    return (
        <div className="doctors-page">
            <h2 className="page-title">Especialistas</h2>
            <div className="doctors-grid">
                {consultas.map((doctor) => (
                    <div className="card" key={doctor.id}>
                        <img
                            src={doctor.Avatar || "default.jpg"}
                            className="card-img-top"
                            alt={doctor.Nombre || "Doctor"}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{doctor.Nombre || "Sin nombre"}</h5>
                            <h5 className="card-title">{doctor.Direccion || "Sin dirección"}</h5>
                            <h5 className="card-title">{doctor.Especialidad || "Sin especialidad"}</h5>
                            <p className="card-text">{doctor.description || ""}</p>
                            <p className="card-text">
                                <small className="text-muted">
                                    Precio de cita médica: ${doctor.Precio || 0}
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
