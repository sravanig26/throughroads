
import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table"; 
import 'react-table/react-table.css'

export default class DataList extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
      filtered: [],
      loading:true
    }
  }
  async getUsersData(){
    const res = await axios.get('http://localhost:5000/transport/')
    console.log(res.data)
    this.setState({loading:false, users: res.data})
  }
  componentDidMount(){
    this.getUsersData()
  }

  onFilteredChangeCustom = (value, accessor) => {
    console.log(value,accessor);
    let filtered = this.state.filtered;
    let insertNewFilter = 1;

    if (filtered.length) {
      filtered.forEach((filter, i) => {
        if (filter["id"] === accessor) {
          if (value === "" || !value.length) filtered.splice(i, 1);
          else filter["value"] = value;

          insertNewFilter = 0;
        }
      });
    }
    if (insertNewFilter) {
      filtered.push({ id: accessor, value: value });
    }
    this.setState({ filtered: filtered });
    console.log(filtered);
  };

  render() {
    const columns = [{  
      Header: 'Transport Type',  
      accessor: 'transportType',
        
            filterMethod: (filter, row) => {
            if (filter.value.indexOf("all") > -1) {
                return true;
            }
            if (filter.value.indexOf("Public Transport") > -1) {
                return row[filter.id] == "Public Transport";
            }
            return row[filter.id] == "Private Transport";
            },
            Filter: ({ filter, onChange }) => {
            return (
                <select
                onChange={event => {
                    let selectedOptions = [].slice
                    .call(event.target.selectedOptions)
                    .map(o => {
                        return o.value;
                    });

                    this.onFilteredChangeCustom(selectedOptions[0], "transportType");
                }}
                style={{ width: "100%" }}
                value={filter ? filter.value : ["all"]}
               
                >
                <option value="all">Show All</option>
                <option value="Public Transport">Public Transport</option>
                <option value="Private Transport">Private Transport</option>
                </select>
            );
        }
     }
     ,{  
      Header: 'Bus Number',  
      accessor: 'busno' ,
      }
     
     ,{  
     Header: 'Bus Registration ',  
     accessor: 'busregd' ,
     }
     ,{  
     Header: 'Source',  
     accessor: 'source',
     },
     {  
      Header: 'Destination',  
      accessor: 'dest',
      },
      {  
        Header: 'Source Time',  
        accessor: 'sourceTime',
        },
    {  
        Header: 'Destination Time',  
        accessor: 'destTime',
        },
    {  
        Header: 'Price',  
        accessor: 'price',
        },
    {  
      Header: 'Stops 1',  
      accessor: 'stopsOne',
      style: { 'whiteSpace': 'unset' },
      },
      {  
        Header: 'Stops 2',  
        accessor: 'stopsTwo',
        style: { 'whiteSpace': 'unset' },
        },
      {  
        Header: 'Stops 3',  
        accessor: 'stopsThree',
        style: { 'whiteSpace': 'unset' },
        },
        {  
          Header: 'Stops 4',  
          accessor: 'stopsFour',
          style: { 'whiteSpace': 'unset' },
          },
          {  
            Header: 'Stops 5',  
            accessor: 'stopsFive',
            style: { 'whiteSpace': 'unset' },
            }                        
  ]
    return (
      <ReactTable  
      data={this.state.users}  
      filterable
          filtered={this.state.filtered}
          onFilteredChange={(filtered, column, value) => {
            this.onFilteredChangeCustom(value, column.id || column.accessor);
          }}
          defaultFilterMethod={(filter, row, column) => {
            const id = filter.pivotId || filter.id;
            if (typeof filter.value === "object") {
              return row[id] !== undefined
                ? filter.value.indexOf(row[id]) > -1
                : true;
            } else {
              return row[id] !== undefined
                ? String(row[id]).indexOf(filter.value) > -1
                : true;
            }
          }}
      columns={columns}  
      defaultPageSize={5}
          className="-striped -highlight"
     />
    )
  }
}