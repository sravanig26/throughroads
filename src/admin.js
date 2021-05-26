import React, {useState} from 'react'
import passimg from './images/admin.jpg';
function Admin(){
    const [user,setUser]= useState('')
    const [pass,setPass]= useState('')
    const handleValidate=(e)=>{
      e.preventDefault()
      if (user == 'admin' && pass == 'admin123') { 
          
          window.location.href="/dash"; }
       
    }
    return <div> 
    <div className="container">
    <h3 className="titleh1">Admin Login</h3>
      <div className="row">
        <div className="col-md-6">
          <img src={passimg} className="img-fluid"/>
        </div>
        <div className="col-md-6 my-auto bg-dark p-5 rounded">
           
            <form onSubmit={handleValidate}>
            <div className="mb-3">
              <label>User Name</label>
              <input type="text" value={user} className="form-control" placeholder="Username" onChange={(e)=>setUser(e.target.value) }/> 
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input type="password" value={pass} className="form-control" placeholder="Password" onChange={(e)=>setPass(e.target.value) }/>
            </div>
            <div className="mb-3">
              <input type="submit" value="Submit" style={{marginTop:"10px"}} className="btn btn-primary" /> 
              </div>
            </form> 
        </div>
      </div>
      </div>
    </div>
}
export default Admin