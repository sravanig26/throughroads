import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../sidebar'

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
      <td>{props.transport.stopsOne}</td>
      <td>{props.transport.stopsTwo}</td>
      <td>{props.transport.stopsThree}</td>
      <td>{props.transport.stopsFour}</td>
      <td>{props.transport.stopsFive}</td>
      <td>
        <Link to={"/edit/"+props.transport._id}>edit</Link> | <a href="#" onClick={() => { props.deleteTransport(props.transport._id) }}>delete</a>
      </td>
    </tr>
)

export default class ManageTransport extends Component {
    constructor(props) {
      super(props);
  
      this.deleteTransport = this.deleteTransport.bind(this)
  
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
    deleteTransport(id) {
        axios.delete('http://localhost:5000/transport/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
            transports: this.state.transports.filter(el => el._id !== id)
        })
      }
      transportList() {
        return this.state.transports.map(currenttransport => {
          return <UsersList transport={currenttransport} deleteTransport={this.deleteTransport} key={currenttransport._id}/>;
        })
      }
      render() {
        return (
          <div className="row">             
                <Sidebar />            
            <div className="col-md-10">
              <div>
            <h3>Manage Transport</h3>
            <table className="table">
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
                  <th>Stops 1</th>
                  <th>Stops 2</th>
                  <th>Stops 3</th>
                  <th>Stops 4</th>
                  <th>Stops 5</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                { this.transportList() }
              </tbody>
            </table>
          </div>
            </div>
          </div>
        )
      }
}