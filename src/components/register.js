import React,{Component} from 'react';
import {Link} from 'react-router-dom';


 
 class Register extends Component {
  
    render() {
    
    return (

      <div className="reg">
      <div className="register">
      <center>
        <div>
        <br/>
        <br/>
          <label>Enter the first Name</label>
          <input type="text" data-test="first name"/>
          </div>
         <br/>
          <div>
          <label>Enter the last Name</label>
          <input type="text" data-test="last name"  />
          </div>
<br/>
          <div>
          <label>Enter the password</label>
          <input type="password" data-test="password"  />
          </div>
          <div>
<br/>
          <label>Confirm password</label>
          <input type="password" data-test="password"  />
          </div>

<br/>
          <div>
          <button><Link to ="/landingpage" >REGISTER</Link></button>
           
          </div>
          
       </center>         
      </div>
      </div>
     
    );
  }
}

export default Register;