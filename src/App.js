import React from 'react';
import {createRoot} from 'react-dom/client';
import './style.css'

import Hello from './Hello';
import Timer from './Timer';



class App extends React.Component{
  render(){
    return (
      <div className='main'>
        <Hello/>
        <Timer/>
      </div>
    )
  }
}

export default App;