import React, { Component } from 'react';
import axios from 'axios';
import trip from '../images/trip.png' 
import ErrorNotice from './ErrorNotice'

export default class CreateUser extends Component {
   
     constructor(props) {
      super(props);
  
      this.onChangeUser = this.onChangeUser.bind(this);
      this.onChangeNumber = this.onChangeNumber.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangePass = this.onChangePass.bind(this);
      this.onChangePassCheck = this.onChangePassCheck.bind(this);
      this.setError=this.setError.bind(this); 
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        user: '',
        number: '',
        email: '',
        pass: '',
        passCheck:'',
        error: '',
        
      }
    }
    onChangeUser(e) {
        this.setState({
            user: e.target.value,            
        })
        
    }
    onChangeNumber(e) {
        this.setState({
            number: e.target.value
        })
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    onChangePass(e) {
        this.setState({
            pass: e.target.value
        })
    }
    onChangePassCheck(e) {
      this.setState({
          passCheck: e.target.value
      })
    }
    setError(e) {
      this.setState({
        error:e.target.value
      })
    }


    
    onSubmit(e) {
        e.preventDefault();
        /* if(this.state.pass!==this.state.passCheck){
          alert("Passwords Doesn't Match");
          e.preventDefault();
        } */
        const user = {
          user: this.state.user,
          number: this.state.number,
          email: this.state.email,
          pass: this.state.pass,
          passCheck: this.state.passCheck,
          error: this.state.error
        }
    
        console.log(user);
    
        axios.post('http://localhost:5000/users/add', user)
          .then(res => console.log(res.data));
          this.setState({
            user: '',
            number: '',
            email: '',
            pass: '',
            passCheck: '',
            error: ''
        }) 
    }
    render() {
        return (
        
          <div className="container">
            <h3>New User Registration</h3>
            {this.error && <ErrorNotice message={this.error} clearError={() => this.setError(undefined)} />}
            <div className="row">
              <div className="col-md-8">
              <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                  <label>Username: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={this.state.user}
                      onChange={this.onChangeUser}
                      placeholder="Usename"
                     
                      />
                      <div style={{fontSize:"14px", color:"red"}}>
                        {this.state.nameError}
                      </div>
                </div>
                <div className="form-group"> 
                  <label>Phone Number: </label>
                  <input type="tel"
                      required pattern="[0-9]{10}"
                      className="form-control"
                      value={this.state.number}
                      onChange={this.onChangeNumber}
                      placeholder="Phone Number"
                      />
                </div>
                <div className="form-group"> 
                  <label>Email: </label>
                  <input type="email"
                      required  
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      placeholder='Email'
                      />
                </div>
                <div className="form-group"> 
                  <label>Password: </label>
                  <input type="password"
                      required  
                      className="form-control"
                      value={this.state.pass}
                      onChange={this.onChangePass} minLength="6"
                      placeholder="Password (minimum Length = 6)"
                      />
                </div>
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input type="password" required
                    placeholder="Confirm Password"
                    className="form-control"
                    value={this.state.passCheck}
                    onChange={this.onChangePassCheck} minLength="6" />
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

}