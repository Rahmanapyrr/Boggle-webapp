import './App.css';
import { Component } from 'react';
import React, { useState } from 'react';
import anime from 'animejs';
import {Spring} from 'react-spring/renderprops';
import { useSpring, animated } from "react-spring";
import Game from './gameComponents/Game';
import ParticleEffectButton from 'react-particle-effect-button'
import DemoBlock from './DemoBlock'
import demos from './demos'

function App() {
  const [playing, setPlaying] = useState(false);
  const [{ y, color }, set] = useSpring(() => ({ y: 100, color: "#fff" }));
  const start = (<button
      onMouseEnter={() => set({ y: 0, color: "#000" })}
      onMouseLeave={() => set({ y: 100, color: "#fff" })}
     onClick={() => setPlaying(true)}>
         <animated.span style={{ color }}>
          Let's Play!
        </animated.span>
        <animated.div
          style={{ transform: y.interpolate(v => `translateY(${v}%`) }}
          className="glance"
        />
       </button>)

  const stop = (<button onClick={() => setPlaying(false)}>Home</button>)

  return (
    <div className = 'App'>
         <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}>
          {props => <div style={props}>
            { playing ? null : <h1 class="appTitle">BOGGLE</h1> }
            </div>}
        </Spring>
      { playing ? <Game /> : null }
      { playing ? stop : start }  
      </div>
  );
}


export default App;


