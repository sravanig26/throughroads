import React from "react";
import {Nav} from 'react-bootstrap'; 
import './dash.css';
import {Link} from 'react-router-dom'

function Sidebar(){
    return  <div>     
            <Nav className="col-md-2 d-none d-md-block sidebar"  activeKey="/home">
                <div className="sidebar-sticky"></div>
                <div style={{backgroundColor:"rgba(200, 210, 207, 0.77)",padding:"10px"}} >
                    <Nav.Item>
                        <Link to='/dash' className="sidelink">Dashboard</Link>
                    </Nav.Item>
                    <Nav.Item>                        
                         <Link to='/addtransport' className="sidelink">Add Transport</Link>
                         <Link to='/managetransport' className="sidelink">Manage Transport</Link>
                    </Nav.Item>
                    <hr />
                    <Nav.Item>
                         <Link to='/manageuser' className="sidelink">User Management</Link>
                    </Nav.Item>
                </div>
            </Nav>          
       </div>
  }; 
  export default Sidebar;