
import React ,{Component}from 'react';
export default class  Components extends Component{
render(){
       return(
        <div>
        <div className="row">
              <div className='col-md-6 offset-md-2'>
              <label> Enter  Temprature in celcius : </label>
              <input  className='form-control'type='number' value={this.props.celcius}  onChange={this.props.handlecelcius} />
              </div>
          
        </div>

                   <div className="row">
                   <div className='col-md-6 offset-md-2 mt-2'>
                   <label> Enter  Temprature in kelvin : </label>
                   <input  className='form-control ' value={this.props.kelvin}  onChange={this.props.handlekelvin} type='number'  />

                   </div>
                    
         
         </div>
         </div>
       )
}
}
