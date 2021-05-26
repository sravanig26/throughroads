import React, { Component } from 'react';
import axios from 'axios';
import DataList from './DataList';
const UsersList = props => (
    <tr>
      <td>{props.transport.transportType}</td>
      <td>{props.transport.busno}</td>
      <td>{props.transport.busregd}</td>
      <td>{props.transport.source}</td>
      <td>{props.transport.dest}</td>
      <td>{props.transport.sourceTime}</td>
      <td>{props.transport.destTime}</td>
      <td>{props.transport.price}</td> 
      <td>{props.transport.stops}</td>      
    </tr>
)
 

export default class Home extends Component {
    constructor(props) {
        super(props); 
    
        this.state = {transports: []};
      }
     
    componentDidMount() {
        axios.get('http://localhost:5000/transport/')
          .then(response => {
            this.setState({ transports: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }
      transportList() {
        return this.state.transports.map(currenttransport => {
          return <UsersList transport={currenttransport}/>;
        })
      }
    render(){
        return ( 
     <div className="homeRoad">
         <div className="container homecon">
             <h1 className="titleh1">Through Roads</h1>
             <p className="titlepara">Keeps track of all private and public transport buses available</p>
             <div className="centerDiv"> 
            <div>
            {/* <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Transport Type</th>
                  <th>Bus Number</th>
                  <th>Bus Registration</th>
                  <th>Source</th>
                  <th>Destination</th>
                  <th>Source Time</th>
                  <th>Destination Time</th>
                  <th>Price ₹</th>
                  <th>Stops</th>  
                </tr>
              </thead>
              <tbody>
                { this.transportList() }
              </tbody>
            </table> */}
            <div className="taball">
            <DataList /> 
            </div> 
            </div>
            </div>
         </div>
    </div>
    )
    }
}
