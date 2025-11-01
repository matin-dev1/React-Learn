import React from 'react';
import {createRoot} from 'react-dom/client';
import './style.css'

import Hello from './Hello';
import Timer from './Timer';



class App extends React.Component{
  constructor(){
    super();
    this.state = {
      title : "Hello my Friends."
    }
  }

  handleSetTtitle = ()=>{
    this.setState({
      title : "Welcome to Codeyad"
    })

  }

  render(){
    return (
      <div className='main'>
        <Hello title={this.state.title}/>
        <Timer handleSetTtitle={this.handleSetTtitle}/>
      </div>
    )
  }
}

export default App;