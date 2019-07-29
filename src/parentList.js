import React, { Component } from 'react';
import SimpleSelect from './list';

class ParentList extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    

    render() {
        return (
            <div>
               <SimpleSelect  /> 
            </div>
        );
    }
}

export default ParentList;