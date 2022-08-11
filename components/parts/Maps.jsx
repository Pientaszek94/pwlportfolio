import { useEffect, useRef, useState } from 'react'
import styles from './Maps.module.scss'
import {
    GoogleMap,
    useJsApiLoader, 
    Marker
  } from '@react-google-maps/api';
export default function Maps() {
  
  
  const [marker, setMarker]=useState(new google.maps.Marker());
  const [map, setMap]=useState(null);
  const ref = useRef();
  
  useEffect(()=>{

  },[])
  
  
  
  
 

  return (
            <GoogleMap zoom={10} center={{lat:50.1667, lng:18.90}} ref={ref} mapContainerClassName={styles.mapcontainer}>

               <Marker position={{lat:50.20, lng:18.59}}/>
            </GoogleMap>
  )
}
