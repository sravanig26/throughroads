import React from 'react'
import BusHome from './images/bus_hom.png'

function About(){
    return <div>
        
        <div className="container">
        <h1 className="titleh1">About Through Roads</h1> 
            <div className="row" style={{position:"relative",top:"50px"}}>
                <div className="col-md-5">
                    <img src={BusHome} className="img-fluid" alt="Bus Home Image" />
                </div>
                <div className="col-md-7 paraTitle">
                    <p>             "ThroughRoads", a travel application, keeps track of all private and public
                        transport buses available at any location and time. Passengers can enter
                        source and destination and the app would give the results of all the buses
                        servicing through the desired route. The results would have the bus
                        registration number with the current location and approximate time it
                        would take to reach the pickup point. With our app we would be able to
                        provide the all possible buses from source to destination in the desired
                        route.
                    </p>
                </div>
            </div> 
        </div>
    </div>
}
export default About