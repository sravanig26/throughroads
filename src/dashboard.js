import React from "react";
import Sidebar from './sidebar';
import dash from './images/dash.jpg';

function Dashboard(){
    return <div>
        <div className="row">             
                <Sidebar />            
            <div className="col-md-10">
                <h1 style={{textAlign: 'center'}}>Transport Dashboard</h1>
                <img src={dash} className="img-fluid" alt="dashboard" />
            </div>
        </div>
    </div>
}
export default Dashboard;