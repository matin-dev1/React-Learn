import React , {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import './style.css'

import Hello from './Hello';
import Timer from './Timer';
import TimeList from './TimeList';



/*class App extends React.Component{
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
*/



const App = ()=>{
    const [title , setTitle] = useState("سلام دوستان عزیزم");
    const [isLight , setIsLight] = useState(false);
    const [timeArr , setTimeArr] = useState(["00 : 05 : 12" , "00 : 06 : 32"]);
    
    useEffect(()=>{
        console.log("useEffect");
        return ()=>{
            
        }
    },[isLight])

    const handleSetIsLight = ()=>{
        setIsLight(!isLight)
    }

    return (
        <div className="main" style={{background:isLight ? "white" : "black" }}>
            <Hello title={title}/>        
            <Timer 
            timeArr ={timeArr}
            setTimeArr ={setTimeArr}
            isLight={isLight} 
            handleSetIsLight={handleSetIsLight}/>
        </div>
    ) 
}


export default App;