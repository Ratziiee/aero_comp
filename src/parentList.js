import React, { Component } from 'react';
import SimpleSelect from './list';

class ParentList extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: ['user1', 'user2', 'user3', 'user4', 'user5'],
            arr: [1,2]
        }
    }

    handleChange = (data)=> {
        alert('click done');
    }

    render() {
        return (
            <div>
               { this.state.arr.map((value) => (
                   <SimpleSelect data={this.state.data} /> 
               )) }
               <button onClick={this.handleChange}>Click</button>
            </div>
        );
    }
}

export default ParentList;