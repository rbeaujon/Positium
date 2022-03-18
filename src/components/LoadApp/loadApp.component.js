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
                <div className='container'> 
                    <div>
                        <img id="icon" src={ weather.current.condition.icon } alt="icon" />
                    </div>
                    <label>Forecast Summary </label>
                    <div className='country'>{ weather.location.country }, { weather.location.name }, <label> { weather.location.region }</label></div>
                    <div className='gps'>
                        Lat { weather.location.lat }, Lon { weather.location.lon }
                    </div> 
                    
                    <div className='container-cond'>
                        <div id="temp">Temperature:</div>
                        <div>{ weather.current.temp_c }°C</div>
                        <div id="wind">Wind:</div>
                        <div>{ weather.current.wind_kph }</div>
                        <div id="windTemp">Wind Degree:</div>
                        <div>{ weather.current.wind_degree }</div>
                        <div id="pressure_mb">Pressure: </div>
                        <div> { weather.current.pressure_mb } mb</div>
                        <div id="precipitacion">Precipitacion: </div>
                        <div>{ weather.current.precip_mm } mm</div>
                         <div id="humidity">Humidity: </div>
                        <div>{ weather.current.humidity }</div>
                        <div id="cloud">Cloud </div>
                        <div>{ weather.current.cloud }</div>
                        <div id="feelslike_c">Feels Like: </div>
                        <div>{ weather.current.feelslike_c }°C</div>
                        <div id="vis_km">Visibility:</div>
                        <div> { weather.current.vis_km }Km</div>
                        <div id="uv">UV:</div>
                        <div> { weather.current.uv }</div>
                        <div id="co">co: </div>
                        <div>{ weather.current.air_quality.co }</div> 
                        <div id="no2">no2: </div>
                        <div>{ weather.current.air_quality.no2 }</div>
                    </div>
                </div> 
            </div> 
        )  }
  
    }
}
export default LoadApp;