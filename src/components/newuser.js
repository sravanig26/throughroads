import React, { useState } from 'react';
import axios from 'axios';
import trip from '../images/trip.png' 
import { useHistory } from "react-router-dom";
import ErrorNotice from './ErrorNotice'
import swal from 'sweetalert'

export default function CreateUser(){

    const [user, setUser] = useState();
    const [email, setEmail] = useState();
    const [number, setNumber] = useState();
    const [pass, setPass] = useState();
    const [passCheck, setPassCheck] = useState(); 
    const [error, setError] = useState();

    const history = useHistory();

    const submit = async (e) => {
      e.preventDefault();

      try{
          const newUser = {email, pass, passCheck, user, number};
          await axios.post("http://localhost:5000/users/add", newUser);
          history.push("/");
          swal('Sucessful','User Added',"success")
      } catch(err) {
          err.response.data.msg && setError(err.response.data.msg)
      }
      
  }; 

        return (        
          <div className="container">
            <h3>New User Registration</h3>
            {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
            <div className="row">
              <div className="col-md-8">
              <form onSubmit={submit}>
                <div className="form-group"> 
                  <label>Username: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      onChange={e => setUser(e.target.value)}
                      placeholder="Usename" 
                      />
                       
                </div>
                <div className="form-group"> 
                  <label>Phone Number: </label>
                  <input type="tel"
                      required pattern="[0-9]{10}"
                      className="form-control"
                      onChange={e => setNumber(e.target.value)}
                      placeholder="Phone Number"
                      />
                </div>
                <div className="form-group"> 
                  <label>Email: </label>
                  <input type="email"
                      required  
                      className="form-control"
                      onChange={e => setEmail(e.target.value)}
                      placeholder='Email'
                      />
                </div>
                <div className="form-group"> 
                  <label>Password: </label>
                  <input type="password"
                      required  
                      className="form-control"
                      onChange={e => setPass(e.target.value)} minLength="6"
                      placeholder="Password (minimum Length = 6)"
                      />
                </div>
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input type="password" required
                    placeholder="Confirm Password"
                    className="form-control"
                    onChange={e => setPassCheck(e.target.value)}
                      minLength="6" />
                  </div>
                <div className="form-group" style={{marginTop:"20px"} }>
                  <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
              </form>
              </div>
              <div className="col-md-4">
                <img src={trip} width="80%" alt="Trip Image" />
              </div>
            </div>
          </div>
        )
}
 