import React, { Component } from 'react';
import Components  from './Components/Components';

export default class App extends Component {
  state={
    celcius:'',
    kelvin:''
  }

handlecelcius=(event)=>{
  const celcius=event.target.value
  this.setState({
    celcius,
    kelvin:celcius+273.15

  
  })

}

  
handlekelvin=(e)=>{
  const kelvin=e.target.value
  this.setState({
    kelvin,
    celcius:kelvin-273.15
   
   
  })
}
 
  render() {
    const {celcius,kelvin}=this.state;
    return (
      <Components handlecelcius={this.handlecelcius} celcius={celcius} handlekelvin={this.handlekelvin}  kelvin={kelvin}/>
      
    );
  }
}


