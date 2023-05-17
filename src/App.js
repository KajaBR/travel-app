import React from 'react';
import './App.css';
import classes from './components/StyleCSS.css'
import { TopBar } from './components/topBar';
import { Malta } from './components/Malta';
import { Marsaxlokk } from './components/Marsaxlokk';
import { BlueGrotto } from './components/BlueGrotto';
import { Logo } from './components/Logo';


function App() {
  return (
    <div className="App">
      <div><Logo/></div>
      <div className='topBar'><TopBar/></div>
      <div className='malta'>
        <Malta/>
        <Marsaxlokk/>
        <BlueGrotto/>
      </div>
      
      <div className='footer'>

      </div>
       
        
      
    </div>
  );
}

export default App;
