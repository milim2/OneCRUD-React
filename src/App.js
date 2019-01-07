import React, { Component } from 'react';
import './App.css';
import BoardForm from './Component/BoardForm';
import BoardItem from './Component/BoardItem';

class App extends Component {

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
    this.setState ({
        maxNo: this.state.maxNo+1,
        boards: this.state.boards.concat({
          brdno: this.state.maxNo,
          brddate: new Date(), ...data
        })
    });
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
        <BoardForm onSaveData = {this.handleSaveData} />

        <table border="1"> 
          <tbody> 
            <tr align="center"> 
              <td width="50">No.</td> 
              <td width="300">Title</td> 
              <td width="100">Name</td> 
              <td width="100">Date</td> 
            </tr>
            { boards.map(row =>
               (<BoardItem key={row.brdno} row={row} />) 
             ) } 
          </tbody> 
        </table>
      </div>
    );
  }
}


export default App;
