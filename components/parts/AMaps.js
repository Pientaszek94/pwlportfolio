import React, { useEffect, useState } from "react";
import styles from './Maps.module.scss'
import { GoogleMap, InfoWindow, MarkerF } from "@react-google-maps/api";


function Map() {
    
    // let markers = [
    //   {
    //     id: 1,
    //     name: "You can find me here",
    //     position:{lat:50.1677, lng:18.9165}
    //   }
    
    // ];

  const [activeMarker, setActiveMarker] = useState(null);
  const [markers, setMarkers]=useState([]);
  const [customer, setCustomer]=useState({});
useEffect(()=>{
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        setMarkers([  {
            id: 1,
            name: "You can find me here",
            position:{lat:50.1677, lng:18.9165}
          },
          {
            id: 2,
            name: "You are here, my Friend",
            position:{lat:position.coords.latitude, lng: position.coords.longitude}
          }
        
        ])
      });
},[customer])
  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  return (
    <GoogleMap
      onLoad={handleOnLoad}
      zoom={16}
      center={{lat:50.1677, lng:18.9165}}
      onClick={() => setActiveMarker(null)}
      mapContainerClassName={styles.mapcontainer}
    >
   
      {markers.map(({ id, name, position }) => (
        <MarkerF
        icon={{
            path: google.maps.SymbolPath.CIRCLE,
            scale: 7,
        }}
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <h3 style={{color: 'black'}}>{name}</h3>
            </InfoWindow>
          ) : null}
        </MarkerF >
      ))}
    </GoogleMap>
  );
}

export default Map;
