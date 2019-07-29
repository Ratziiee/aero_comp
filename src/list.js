import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './App.css';


export default class  SimpleSelect extends Component {
 
    constructor(props){
        super(props);
        this.state = {
            data : props.data
        };
    }
    render() {
        return (
            <div >
                <form className="inline">
                    <div>
                        <FormControl >
                            <InputLabel htmlFor="age-simple">List1</InputLabel>
                            <Select
                            value='SDFKG'
                            >
                            {this.state.data.map((data) => (
                                <MenuItem value={data}>{data}</MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </div>

                    <div>
                        <FormControl >
                            <InputLabel htmlFor="age-simple">List1</InputLabel>
                            <Select
                            value='SDFKG'
                            >
                            {this.state.data.map((data) => (
                                <MenuItem value={data}>{data}</MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </div>

                    <div>
                        <FormControl >
                            <InputLabel htmlFor="age-simple">List1</InputLabel>
                            <Select
                            value='SDFKG'
                            >
                            {this.state.data.map((data) => (
                                <MenuItem value={data}>{data}</MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </div>

                </form>   
            </div>
            
        );
    }
}