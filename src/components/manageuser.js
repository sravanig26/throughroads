import React, { Component } from 'react';
import Sidebar from '../sidebar';
import axios from 'axios';

const UsersList = props => (
    <tr>
      <td>{props.usertran.user}</td>
      <td>{props.usertran.number}</td>
      <td>{props.usertran.email}</td>
      <td>{props.usertran.pass}</td>
      <td>
        <a href="#" onClick={() => { props.deleteUser(props.usertran._id) }}>delete</a>
      </td>
    </tr>
)

export default class ManageUser extends Component {
    constructor(props) {
      super(props);
  
      this.deleteUser = this.deleteUser.bind(this)
  
      this.state = {users: []};
    }
    componentDidMount() {
        axios.get('http://localhost:5000/users/')
          .then(response => {
            this.setState({ users: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }
      deleteUser(id) {
        axios.delete('http://localhost:5000/users/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          users: this.state.users.filter(el => el._id !== id)
        })
      }
      userList() {
        return this.state.users.map(currentuser => {
          return <UsersList usertran={currentuser} deleteUser={this.deleteUser} key={currentuser._id}/>;
        })
      }
      render() {
        return (
          <div className="row">             
                <Sidebar />            
            <div className="col-md-10">
          <div>
            <h3>Manage Users</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>User Name</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Password</th> 
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                { this.userList() }
              </tbody>
            </table>
          </div>
          </div>
          </div>
        )
      }
}