import React from 'react';

class BoardItem extends React.Component {
    render() {
      return (
        <tr>
          <td>{this.props.row.brdno}</td>
          <td>{this.props.row.brdtitle}</td>
          <td>{this.props.row.brdwriter}</td>
          <td>{this.props.row.brddate.toLocaleDateString()}</td>
        </tr>
      );
    }
  }
  
export default BoardItem; 