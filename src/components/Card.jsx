import React, { useEffect } from "react";
import { useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { hotelCollection } from "./Controller.jsx"; // Importamos la colección de hoteles


function Card(){
    const [hotels, setHotels] = React.useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(hotelCollection, (snapshot) => {
            const hotelsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setHotels(hotelsData);
            //console.log("Hoteles actualizados:", hotelsData);

        });
        return () => unsubscribe(); // limpiar el efecto al desmontar el componente
    }, []);   


     return (
        <div className="container">
                    <h2 className="text-center">Hoteles de Las Vegas</h2>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {hotels.map((hotel) => (
                            <div className="card" key={hotel.id}>
                                <img src={hotel.imageCover} style={{width: '100%', height: '250px'}} className="card-img-top" alt={hotel.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{hotel.name}</h5>
                                    <p className="card-text">{hotel.description}</p>
                                    <p className="card-text"><small className="text-muted">Precio: ${hotel.price}</small></p>
                                </div>
                            </div>
                        ))}
                    </div>
        </div>
    );

}
export default Card;