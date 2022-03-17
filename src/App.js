import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";
import LoadAppContainer from  './components/LoadApp/';
import { isAuthenticated } from './store/positium/positium.actions';
import bg from './assets/bg/lines2.png';
import './styles/main.scss'

/** @namespace Positium/App/mapStateToProps */
export const mapStateToProps = (state) => ({
  isSubmitted: state.PositiumReducer.isSubmitted
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
      <div className = "menu">
        <label for="Weather">Weather </label>
        <button type="button" onClick={() => 
           { return (props.isAuthenticated(false) )}} >Logout  
        </button>
      </div>
      <div className="bg"> 
        <img src={bg} alt="bg"/>
      </div>
       <LoadAppContainer />
      <div className="footer col-s-12 col-12 col-b-12"> 
          <p>Positium </p> 
      </div> 
    </div> 
  
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

