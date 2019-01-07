import React, { Component } from 'react';
import './App.css';
import BoardForm from './Component/BoardForm';
import BoardItem from './Component/BoardItem';

class App extends Component {

  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  state = {
    // the state of App component
      maxNo: 3,
      
      boards: [
        {
          brdno: 1,
          brdwriter: 'Facebook',
          brdtitle: 'React closes out dominant 2018',
          brddate: new Date()
        },
        {
          brdno: 2,
          brdwriter: 'Ollie Barder',
          brdtitle: 'The Future Of Nintendo May Not Be On Home Consoles',
          brddate: new Date()
        }
      ]
  }

  handleSaveData = (data) => {
    let boards = this.state.boards;

    if (data.brdno == null || data.brdno === '' || data.brdno === undefined) {
      // New : Insert
      this.setState ({
        maxNo: this.state.maxNo+1,
        boards: boards.concat({
          brdno: this.state.maxNo,
          brddate: new Date(), ...data
        })
    });
    } else {
      this.setState ({
          boards: boards.map(row => data.brdno === row.brdno ? {...data}:row)
          })
      }
  }

  // Clicking by user, remove the texts selected from the boards in the parent
  handleRemove = (brdno) => {
    this.setState ({
      // To remove the value from array: filter 
      boards: this.state.boards.filter(row => row.brdno !== brdno)
    })
  }

  // the parent calls the selected row and data: handleSelectRow -> transfer as a parameter
  handleSelectRow = (row) => {
    this.child.current.handleSelectRow(row);
  }


  render() {
    // JS part ///////////////////

    const { boards } = this.state; // Same with const boards = this.state. boards;
    
    // for making ONE LIST - Used map()
    // const list = boards.map(function(row) {
    //     return row.brdno + row.brdwriter ;
    // });
    //////////////////////////////

    // Inside return: HTML area
    // To use JS inside return : using {}
    return (
      <div>
        {/* To show the resut */} 
        {/* { list } */}

        {/* Receive the parameter(this.props) 
            handleSaveData function is transferred to onSaveData function */}
        
        {/* ref: to bring the element of the component handle => save into this.child*/}
        <BoardForm onSaveData = {this.handleSaveData} ref = {this.child} />

        <table border="1"> 
          <tbody> 
            <tr align="center"> 
              <td width="50">No.</td> 
              <td width="300">Title</td> 
              <td width="100">Name</td> 
              <td width="100">Date</td> 
            </tr>
            { boards.map(row =>
               (<BoardItem key={row.brdno} row={row} onRemove={this.handleRemove}
                          onSelectRow={this.handleSelectRow} />) 
             ) } 
          </tbody> 
        </table>
      </div>
    );
  }
}


export default App;
