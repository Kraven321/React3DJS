import React from 'react'
import styled from 'styled-components'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Cube from './Cube'


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Container = styled.div`
  height: 100vh;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  scroll-snap-align: center;

  @media only screen and (max-width: 768px){
   width: 100%;
  }
`
const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px){
    display: none;  
  }
`
const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px){
    font-size: 60px;
  }
`
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Line = styled.img`
  height: 5px;
`
const Subtitle = styled.h2`
color: #da4ea2;
  
`
const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`
const Button = styled.button`
  background-color: #da4ea2;
  border: none;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px){
    align-items: center;
    text-align: center;
  }
`



const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
        <Canvas camera={{fov: 25, position: [5, 5, 5]}}>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Cube />
      </Canvas>
        </Left>
        <Right>
        <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line src="/images/line.png" alt="line" />
            <Subtitle>Who We Are</Subtitle>
          </WhatWeDo>
          <Desc>A creative group of designers and developers with passion for the arts.</Desc>
          <Button>See Our Works</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default Who
