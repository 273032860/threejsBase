import { useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import * as THREE from "three";
import styled from "styled-components";

const Title = styled.div`
  width: 190px;
  margin: 100px auto;
  transition: all 1s;
  &:hover {
    transform: rotateX(180deg);
  }
`;

function App() {
  return (
    <div className=" ">
      <div className="h-64 bg-orange-600">112221</div>
      <div className=" bg-orange-600 w-8  h-56  fixed top-2/3 right-20  ">
        5555
      </div>
      <div className="bg-indigo-700 group mx-32 z-20  ">
        <Title
          className=" bg-transparent bg-gradient-to-b from-lime-400 to-red-700  
          h-36 absolute top-1/2 left-1/2 
          "
        >
          1
        </Title>
        <div className=" bg-pink-600 w-44 h-36  ">2</div>
        <div className=" bg-pink-600 w-44 h-36  hidden   ">3</div>
        <div className=" bg-pink-600 w-44 h-36  ">4</div>
        <div className=" bg-pink-600 w-44 h-36 ">5</div>
        <div className=" bg-pink-600 w-44 h-36 ">6</div>
        <div className=" bg-pink-600 w-44 h-36 ">7</div>
        <div className=" bg-pink-600 w-44 h-36 ">8</div>
        <div className=" bg-pink-600 w-44 h-36 ">9</div>
        <div className=" bg-pink-600 w-44 h-36 ">10</div>
        <div className=" bg-pink-600 w-44 h-36 ">11</div>
        <div className=" bg-pink-600 w-44 h-36 ">12</div>
        <div className=" bg-pink-600 w-44 h-36 ">13</div>
        <div className=" bg-pink-600 w-44 h-36 ">14</div>
        <div className=" bg-pink-600 w-44 h-36 ">15</div>
        <div className=" bg-pink-600 w-44 h-36 ">16</div>
        <div className=" bg-pink-600 w-44 h-36 ">17</div>
        <div className=" bg-pink-600 w-44 h-36 ">3333</div>
        <div className=" bg-pink-600 w-44 h-36 ">3333</div>
      </div>
      <input className="outline-none"></input>
      <textarea className="resize-none"></textarea>
      <ul>
        <li>11111</li>
      </ul>
      <button>333</button>
    </div>
  );
}

export default App;
