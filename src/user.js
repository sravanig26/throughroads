import React, {useState, useContext} from 'react'
import axios from "axios";
import passimg1 from './images/busimage.png';
import {Link, useHistory} from 'react-router-dom';
import ErrorNotice from './components/ErrorNotice';
 
 
function User() {
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [error, setError] = useState();

    
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        try{
            const loginUser = {email, pass};
            const loginResponse = await axios.post("http://localhost:5000/users/login", loginUser);
             
            localStorage.setItem("auth-token", loginResponse.data.token);
            history.push("/home");
        } catch(err) {
            err.response.data.msg && setError(err.response.data.msg)
        }
        
    };
    return  <div>        
      <div className="container">
      <h1 className="titleh1">User Login</h1>
      
        <div className="row">
          <div className="col-md-6">
            <img src={passimg1} className="img-fluid"/>
          </div>
          <div className="col-md-6 my-auto bg-dark p-5 rounded">
          {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
              <form onSubmit={submit}>
              <div className="mb-3">
                <label>Email id</label>
                <input type="email" required className="form-control" placeholder="Email" onChange={e=>setEmail(e.target.value) }/> 
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input type="password" required className="form-control" placeholder="Password" onChange={e=>setPass(e.target.value) }/>
              </div>
              <div className="mb-3">
                <input type="submit" value="Login" style={{marginTop:"10px"}} className="btn btn-primary" /> 
                </div> 
                    <Link to='/newuser' className=''>New User? Register here</Link>   
              </form> 
          </div>
        </div>
      </div>
    </div>
}
export default User