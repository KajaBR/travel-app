import React from 'react';
import './App.css';
import classes from './components/StyleCSS.css'
import { TopFoto } from './components/topFoto';
import { Malta } from './components/Malta';
import { Marsaxlokk } from './components/Marsaxlokk';
import { BlueGrotto } from './components/BlueGrotto';
import { Logo } from './components/Logo';
import { Palm } from './components/palm';
import { Menu } from './components/Menu';
import { Maps } from './components/Maps';


function App() {
  return (
    <div className="App">
      <div className='logo'><Logo/></div>
      <div className='topFoto'><TopFoto/></div>
      <div className='menu'><Menu/></div>

      <div className="maps"><Maps/></div>
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
