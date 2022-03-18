import { connect } from 'react-redux';
import { PureComponent } from 'react';
import { Navigate } from "react-router-dom";
import { isAuthenticated, setError } from '../../store/positium/positium.actions';
import Login from './login.component';
import  './login.style.scss';


/** @namespace  Positium/Component/Login/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    isSubmitted: state.PositiumReducer.isSubmitted,
    error: state.PositiumReducer.error
});
/** @namespace  Positium/Component/Login/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
    isAuthenticated: (isSubmitted, user_id, name, ip) => dispatch(isAuthenticated(isSubmitted, user_id, name, ip)),
    setError: (login) => dispatch(setError(login))
});
/** @namespace  Positium/Component/Login/Container/LoginContainer */
export class LoginContainer extends PureComponent {
    static propTypes = {}
    static defaultProps = {};
    constructor(props) {
        super(props)
        
        this.handleLogin = this.handleLogin.bind(this);
    }   
    state = {
        ip: null
    } 
    async componentDidMount() {
        this.getIP();
    }  
    
    getIP() {
        async function myIP(x) {
            await fetch('https://ipapi.co/json/', { //catch public IP
            method: 'GET',
            headers: { 'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(ipData => {
            console.log(JSON.stringify(ipData, null, 2));
            x.setState({
                ip: ipData.ip
            });
        });
        }   
        myIP(this);

    }
    handleLogin(event){
        
        event.preventDefault(); //the page doesn't reload
        let { email, pass } = document.forms[0];
        var userEmail = email.value;
        var userPass = pass.value;
        var userFound = false;

        async function getUsers(x) {

            let payload =  {
                "userEmail": userEmail,
                "userPass": userPass
            }
            
            var requestOptions = {    
            method: 'POST',
            headers: {
                "Content-type": "application/json;"
            },
            mode: 'cors',
            body: JSON.stringify(payload)
        };
        await fetch('https://aistica.com/positium/server/api/v1/sessions/', requestOptions ) 
            .then(response => response.json())
            .then(data => {
                console.log('Successful Login:', data);

                    if(data != null){
                        const user_id = parseInt(data['id']);
                        const myIP =  x.state.ip;
                        userFound = true;   
                        return (
                            x.props.isAuthenticated(true, user_id, data['name'], myIP)
                        )
                    }
                    if (userFound === false){
                        return (
                            x.props.isAuthenticated(false),
                            x.props.setError('login')
                        )
                    }
            })
            .catch((error) => {
                console.error('fail fetching the users, you have errors:', error);
            });
        }
        getUsers(this);
    
    }
    render(){
        const { isSubmitted } = this.props;
        

            if(isSubmitted === true) {
                this.props.setError('submitted')
                return <Navigate to="/home" />;
            }

        return(
            <div>  
                <div id="login">
                    <Login
                    { ...this.state }
                    { ...this.props }
                    handleLogin = { this.handleLogin }
                    />
                </div> 
            </div>
                
        )    
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);