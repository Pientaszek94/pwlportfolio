import { useState } from 'react'
import styles from './Footer.module.scss'
import Logo from './parts/Logo'
import Link from 'next/dist/client/link';

function Footer() {

  const [roll, setRoll]=useState(false);

  const techs=[{name:'NEXT.js', url: "https://nextjs.org/"}, 
              {name:"SASS", url:"https://sass-lang.com/"}, 
              // {name:"Google Maps API", url:"https://developers.google.com/maps/documentation"}, 
              {name:"Three.js", url:"https://threejs.org/"}]

  const Rolling=()=>{
    setRoll(prevRoll=> !prevRoll)
  }
  
  return (
    <footer className={styles.footer}>

            <div className={styles.tech}>
                  <h5 onClick={Rolling}>Technology that I used</h5>
                  <div className={roll?styles.sub_tech:styles.sub_tech_off}>
                      {
                        techs.map((tech, index)=>(
                          <Link key={index} href={tech.url}>

                            <p >{tech.name}</p>
                          </Link>
                        ))
                      }
                      <h6>Width and Height of screen: {innerWidth}/{innerHeight}</h6>
                  </div>
            </div>
            <div className={styles.created}>
              <h3>Created by PWL FrontDev 2022</h3>
            </div>
    </footer>
  )
}

export default Footer