import { PureComponent } from 'react';
import  './loadApp.style.scss';

/** @namespace  Positium/Component/LoadApp/Component/loadApp */
export class LoadApp extends PureComponent {
 
   
    
    render() {
       
       let { weather } = this.props;
   if(weather.length === 0){ 
       return "Waiting....."
    }
    else{      
       return (
                <div>
                    <label>Forecast Summary </label>
                    <div className='country'>{ weather.location.country }, { weather.location.name }, <label> { weather.location.region }</label></div>
                    <div className='gps'>
                    Lat { weather.location.lat }, Lon { weather.location.lon }
                    </div> 
                    <div className='condition'>
                       <p id="temp">temperature: { weather.current.temp_c }°C</p>
                       <p id="condition">Condition: { weather.current.condition.text }</p>
                    </div>

                </div>  
        )  }
  
    }
}
export default LoadApp;