import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class Gdfg extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: ['user1', 'user2', 'user3', 'user4', 'user5', ]
        }
    }
    render() {
        return (
            <div>
                <form >
                    <FormControl >
                        <InputLabel htmlFor="age-simple">Age</InputLabel>
                        <Select
                        value='SDFKG'
                        inputProps={{
                            name: 'age',
                            id: 'age-simple',
                        }}
                        >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    </form>
            </div>
        );
    }
}

export default Gdfg;