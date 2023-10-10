import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'
import Cube from './Cube'

const data = [
  "Web Design",
  "Development",
  "Ilustration",
  "Product Design",
  "Social Media",
]

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
width: 1400px;
display: flex;
justify-content: space-between;

@media only screen and (max-width: 768px){
    width: 100%;
    flex-direction: column;
  }
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;

@media only screen and (max-width: 768px){
    padding:20px;
    justify-content: center;
  }
`
const List = styled.ul`
 list-style: none;
 display: flex;
 flex-direction: column;
 gap: 20px;
 `
 const ListItem = styled.li`
   font-size: 90px;
   font-weight: bold;
   cursor: pointer;
   color: transparent;
   -webkit-text-stroke: 1px white;
   position: relative;

   @media only screen and (max-width: 768px){
    font-size: 24px;
    color: white;
    -webkit-text-stroke:0px;

  }
 
   ::after{
     content: "${(props)=>props.text}";
     position: absolute;
     top: 0;
     left: 0;
     color: pink;
     width: 0;
     overflow: hidden;
     white-space: nowrap;
   }
   &:hover{
     ::after{
       animation:moveText 0.5 linear;

       @keyframes moveText {
         to{
           width: 100%;
         }
       }
     }
   }
 `
const Right = styled.div`
 flex: 1;
`

const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
          {data.map((item)=>(
            <ListItem key={item} text={item}>{item}</ListItem>
          ))}
          </List>
        </Left>
        <Right>
        <Canvas camera={{fov: 25, position: [5, 5, 5]}}>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Cube color="#da4ea2" />
      </Canvas>
        </Right>
      </Container>
    </Section>
  )
}

export default Works
