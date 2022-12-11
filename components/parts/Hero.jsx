import React, {useRef, useState} from 'react'
import {Canvas, useFrame} from "@react-three/fiber";

const Box=(props)=>{

    const mesh=useRef(null)
    useFrame(()=>(mesh.current.rotation.y+=0.002,
        mesh.current.rotation.x+=0.001));
    
    return(
    
    
    <group position={[6,0,-7]}>
        <mesh ref={mesh}>
          {/* <icosahedronGeometry attach="geometry" args={[2.5,3]} /> */}
          <torusKnotGeometry attach='geometry' args={[8,1,300,40,2,6]}/>
          <meshStandardMaterial attach="material" color={0xF12F}
           roughness={0.0}  metalness={0.9} flatShading={false}/>
        </mesh>
    </group>
    
    );
    
        };


function Hero() {
  return (
   
        <div className='canv'>
                                
                <Canvas>
                    <ambientLight intensity={[0]} />
                    <directionalLight intensity={[12]} color={0xFFFF} position={[-15,0,3]}/>
                    <Box/>
                </Canvas>
        </div>
  )
}

export default Hero