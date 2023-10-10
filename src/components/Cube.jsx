import React, { useRef } from 'react'
import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


const Cube =({color}) => {
const textRef = useRef ()

    useFrame (state=> (textRef.current.position.x= Math.sin (state.clock.elapsedTime)))
  return (
    <mesh>
    <boxGeometry/>
    <meshStandardMaterial color={color}>
      <RenderTexture attach="map">
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 5]}
          />
        <color attach="background" args={['pink']} />
        <Text ref={textRef} FontSize={3} color="black">
          Hello
          </Text>
      </RenderTexture>
    </meshStandardMaterial>
</mesh>
  )
}

export default Cube
