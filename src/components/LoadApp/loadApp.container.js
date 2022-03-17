
import { connect } from 'react-redux';
import { PureComponent } from 'react';
import LoadApp from './loadApp.component';
import '../../styles/main.scss';

/** @namespace  Positium/Component/LoadApp/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    user_id: state.PositiumReducer.user_id,
    name: state.PositiumReducer.name
})
/** @namespace  Positium/Component/LoadApp/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
   
});
/** @namespace  Positium/Component/LoadApp/Container/LoadAppContainer */
export class LoadAppContainer extends PureComponent {
    static propTypes = {}
    static defaultProps = {};
    state = {
     weather:[]
    }
     
    async componentDidMount() {
         this.getData();
    }  

    async getData() {
       
        let requestOptions = {    
            method: 'GET',
            mode: 'cors'

        };
        let link = "http://api.weatherapi.com/v1/current.json?key=1c9788cb28e24e538cb144826221703&q=Estonia&aqi=yes";

      
            await fetch(link, requestOptions ) 
            .then(response => response.json())
            .then(data => {
              console.log('Success, the answer from server API is:', data);
              this.setState({
                weather: data
            });
            })
            .catch((error) => {
              console.error('The data has some errors:', error);
            });
    
        }     

    render() {
        

        return (
            <div className='container'>
                     <LoadApp
                     { ...this.state }
                    />
            </div>
        )
    }
 }
export default connect(mapStateToProps, mapDispatchToProps)(LoadAppContainer);