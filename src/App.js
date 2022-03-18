import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";
import LoadAppContainer from  './components/LoadApp/';
import { isAuthenticated } from './store/positium/positium.actions';
import bg from './assets/bg/wf.jpg';
import './styles/main.scss'

/** @namespace Positium/App/mapStateToProps */
export const mapStateToProps = (state) => ({
  isSubmitted: state.PositiumReducer.isSubmitted,
  name: state.PositiumReducer.name
});
/** @namespace Positium/App/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
  isAuthenticated: (isSubmitted) => dispatch(isAuthenticated(isSubmitted))
});

function App(props) {

  const { isSubmitted } = props;
  if(isSubmitted === false) {
    return <Navigate to="/" />;
}

  return (
    
    <div>   
      <div className="bar" />
      <div className="bg"> 
        <img src={bg} alt="bg"/>
      </div>   
      <div className = "menu">
        <label for="login">Hi,
        <p> {props.name}</p>  
        <button type="button" onClick={() => 
           { return (props.isAuthenticated(false) )}} > 
        </button></label>
      </div>
       
        <LoadAppContainer />
      
       
      <div className="footer col-s-12 col-12 col-b-12"> 
          <p>Positium </p> 
      </div> 
    </div> 
  
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

