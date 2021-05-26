import React, { Component } from 'react';
import axios from 'axios';
import Sidebar from '../sidebar';
import Select from 'react-select';

export default class AddTransport extends Component {
    constructor(props) {
        super(props); 
          
        this.onChangeBusno = this.onChangeBusno.bind(this);
        this.onChangeBusRegd = this.onChangeBusRegd.bind(this);
        this.onChangeSource = this.onChangeSource.bind(this);
        this.onChangeDest = this.onChangeDest.bind(this);
        this.onChangeSourceTime = this.onChangeSourceTime.bind(this);
        this.onChangeDestTime = this.onChangeDestTime.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeTransportType = this.onChangeTransportType.bind(this);
        this.onChangeStopsOne = this.onChangeStopsOne.bind(this);
        this.onChangeStopsTwo = this.onChangeStopsTwo.bind(this);
        this.onChangeStopsThree = this.onChangeStopsThree.bind(this);
        this.onChangeStopsFour = this.onChangeStopsFour.bind(this);
        this.onChangeStopsFive = this.onChangeStopsFive.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            busno : '',
            busregd: '',
            source: '',
            dest: '',
            sourceTime: '',
            destTime: '',
            price: '',
            transportType: '',
            stopsOne: '',
            stopsTwo:'',
            stopsThree:'',
            stopsFour:'',
            stopsFive:''
        }
    }
    onChangeBusno(e) {
        this.setState({
            busno: e.target.value
        })
    }
    onChangeBusRegd(e) {
        this.setState({
            busregd: e.target.value
        })
    }
    onChangeSource(e) {
        this.setState({
            source: e.target.value
        })
    }
    onChangeDest(e) {
        this.setState({
            dest: e.target.value
        })
    }
    onChangeSourceTime(e) {
        this.setState({
            sourceTime: e.target.value
        })
    }
    onChangeDestTime(e) {
        this.setState({
            destTime: e.target.value
        })
    }
    onChangePrice(e) {
        this.setState({
            price: e.target.value
        })
    }
    onChangeTransportType(e) {
        this.setState({
            transportType: e.target.value
        })
    }
    onChangeStopsOne(e) {
        this.setState({
            stopsOne: e.target.value
        })
    }
    onChangeStopsTwo(e) {
        this.setState({
            stopsTwo: e.target.value
        })
    }
    onChangeStopsThree(e) {
        this.setState({
            stopsThree: e.target.value
        })
    }
    onChangeStopsFour(e) {
        this.setState({
            stopsFour: e.target.value
        })
    }
    onChangeStopsFive(e) {
        this.setState({
            stopsFive: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();
    
        const transport = {
            busno: this.state.busno,
            busregd: this.state.busregd,
            source: this.state.source,
            dest: this.state.dest,
            sourceTime: this.state.sourceTime,
            destTime: this.state.destTime,
            price: this.state.price,
            transportType: this.state.transportType,
            stopsOne: this.state.stopsOne,
            stopsTwo: this.state.stopsTwo,
            stopsThree: this.state.stopsThree,
            stopsFour: this.state.stopsFour,
            stopsFive: this.state.stopsFive
        }
    
        console.log(transport);
    
        axios.post('http://localhost:5000/transport/add', transport)
          .then(res => console.log(res.data));
    
        window.location = '/managetransport';
      }
      render() {
        return (
            <div className="row">             
                <Sidebar />            
            <div className="col-md-10">
            <div className="container">
          <h3>Create New Transport</h3> 
          <form onSubmit={this.onSubmit}>
              <div className="row">
                  <div className="col-md-4">
                    <div className="form-group"> 
                        <label>Transport Type: </label>
                        <select required
                            className="form-control"
                            value={this.state.transportType}
                            onChange={this.onChangeTransportType}>
                             <option value='Public Transport'>Public Transport</option>
                             <option value='Private Transport'>Private Transport</option>
                        </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group"> 
                        <label>Bus Number: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.busno}
                            onChange={this.onChangeBusno}
                            />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group"> 
                            <label>Bus Registration: </label>
                            <input  type="text"
                                required
                                className="form-control"
                                value={this.state.busregd}
                                onChange={this.onChangeBusRegd}
                                />
                        </div>
                    </div>
              </div>
              <div className="row">
                  <div className="col-md-6">
                      <label>Enter starting (source) Stop</label>
                      <input type="text" required className="form-control"
                        value={this.state.source} onChange={this.onChangeSource} />
                  </div>
                  <div className="col-md-6">
                      <label>Enter Dropping (Destination) Stop</label>
                      <input type="text" required className="form-control"
                        value={this.state.dest} onChange={this.onChangeDest} />
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-4">
                      <label>Enter starting (source) Time</label>
                      <input type="text" required className="form-control"
                        value={this.state.sourceTime} onChange={this.onChangeSourceTime} />
                  </div>
                  <div className="col-md-4">
                      <label>Enter Dropping (Destination) Time</label>
                      <input type="text" required className="form-control"
                        value={this.state.destTime} onChange={this.onChangeDestTime} />
                  </div>
                  <div className="col-md-4">
                      <label>Enter Price ₹</label>
                      <input type="text" required className="form-control"
                        value={this.state.price} onChange={this.onChangePrice} />
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-6">
                    <label>Enter Stops 1</label>
                      <input type="text" required className="form-control"
                        value={this.state.stopsOne} onChange={this.onChangeStopsOne} />
                  </div>
               
                  <div className="col-md-6">
                    <label>Enter Stops 2</label>
                      <input type="text" required className="form-control"
                        value={this.state.stopsTwo} onChange={this.onChangeStopsTwo} />
                  </div>
              </div> 
              <div className="row">
                  <div className="col-md-6">
                    <label>Enter Stops 3</label>
                      <input type="text" required className="form-control"
                        value={this.state.stopsThree} onChange={this.onChangeStopsThree} />
                  </div>
               
                  <div className="col-md-6">
                    <label>Enter Stops 4</label>
                      <input type="text" required className="form-control"
                        value={this.state.stopsFour} onChange={this.onChangeStopsFour} />
                  </div>
              </div> 
              <div className="row">
                  <div className="col-md-6">
                    <label>Enter Stops 5</label>
                      <input type="text" required className="form-control"
                        value={this.state.stopsFive} onChange={this.onChangeStopsFive} />
                  </div>
                </div>
            <div className="form-group" style={{marginTop:"20px"} }>
              <input type="submit" value="Create Transport Log" className="btn btn-primary" />
            </div>
          </form>
        </div>
        </div>
        </div>
        )
      }
    
}