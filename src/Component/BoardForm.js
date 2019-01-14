import React from 'react';

class BoardForm extends React.Component {
// for the state of this component
// state = {
//     brdwriter: '',
//     brdtitle: ''
// }

// e: the event parameter transferred from the change event
// e.target: the instance occurred currently- the input by user
// title and writer
// handleChange = (e) => {
//     this.setState ({
//         [e.target.name]: e.target.value
//     })
// }

// handleSelectRow = (row) => {
//     this.setState(row);
// }

shouldComponentUpdate(nextProps, nextState) {
    let selectedBoard = nextProps.selectedBoard;

    if (!selectedBoard.brdno) {
        this.brdtitle.value = "";
        this.brdwriter.value = "";
        return true;
    }

    this.brdtitle.value = seletcedBoard.brdtitle;
    this.brdwriter.value = selectedBoard.brdwriter;
    return true;
}

handleSubmit = (e) => {
    // Not sending into a server, just show on the web: stop the event by using preventDefault
    e.preventDefault();
    // Make sure to use 'props' : whatever the value or function from the parent
    // state has the data for saving: with calling function and transferring this.state
    // this.props.onSaveData(this.state); // save data-- App.js
    // this.setState({
    //     brdno: '',
    //     brdwriter: '',
    //     brdtitle: ''
    // }); //to save 


    let selectedBoard = this.componentWillReceiveProps.selectedBoard;

    let data = {
        brdwriter: this.brdwriter.value,
        brdtitle: this.brdtitle.value
    }

    if (selectedBoard.brdno) {
        data.brdno = selectedBoard.brdno;
        data.brddate = selectedBoard.brddate
    }

    this.props.onSaveData(data);

}

render() {

    return (
        <form onSubmit = {this.handleSubmit}>
        {/* this: to refer the function or variables inside Component */}
            {/* <input palceholder = "title" name = "brdtitle" onChange = {this.handleChange} />
            <input palceholder = "title" name = "brdwriter" onChange = {this.handleChange} /> */}
        <inut placeholder="title" ref={node => this.brdtitle = node} />
        <input placeholder="name" ref={node => this.brdwriter = node} />

        <button type="submit">Save</button>
        </form>
    );
}
}


export default BoardForm;