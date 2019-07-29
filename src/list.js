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
            list: ['user1', 'user2', 'user3', "user4", "user5"],
            data: [
                {layer:'', attribute: '', value:'', key: 1},
                {layer:'', attribute: '', value:'', key: 2}
            ],
            selectedAttribute : [{

            }]
        };
    }

    handleChange = (e)=> {
        alert('click done');
    }

    submit = e =>{
        e.preventDefault();
        for(let i=0;i<e.target.length-1;i+= 3){
            console.log(e.target[i].value);
            console.log(e.target[i + 1].value);
            console.log(e.target[i + 2 ].value);
        }
    }

    valueChanged = (e, key) =>{
        let newData = this.state.data;
        for(let i=0; i < newData.length;i++){
            if(newData[i].key === key){
                newData[i].layer = (e.target.name ==='layer') ? e.target.value : newData[i].layer;
                newData[i].attribute = (e.target.name ==='attribute') ? e.target.value : newData[i].attribute;
                newData[i].value = (e.target.name ==='value') ? e.target.value : newData[i].value;
            }
        }
        console.log(newData);
        this.setState({data : newData});

    }

    render() {
        return (
            <div onSubmit={this.submit}>
                <form  >
                {this.state.data.map((data)=>(
                    <div key={data.key} className="inline">
                        <div>
                        <FormControl >
                            <InputLabel htmlFor="age-simple">Select Layer</InputLabel>
                            <Select
                            value={data.layer}
                            name={'layer'}
                            onChange={(e)=>this.valueChanged(e,data.key)}
                            >
                            {this.state.list.map((list) => (
                                <MenuItem key={list} value={list}>{list}</MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                        </div>
                        <div>
                        <FormControl >
                            <InputLabel htmlFor="age-simple">Select Attribute</InputLabel>
                            <Select
                            value={data.attribute}
                            name={'attribute'}
                            onChange={(e)=>this.valueChanged(e,data.key)}
                            >
                            {this.state.list.map((list) => (
                                <MenuItem key={list} value={list}>{list}</MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                        </div>
                        <div>
                        <FormControl >
                            <InputLabel htmlFor="age-simple">Select value</InputLabel>
                            <Select
                            value={data.value}
                            name={'value'}
                            onChange={(e)=>this.valueChanged(e,data.key)}
                            >
                            {this.state.list.map((list) => (
                                <MenuItem key={list} value={list}>{list}</MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                        </div>
                    </div>
                    

                ))}
                <button>submit</button>
                </form>  
                
            </div>
            
        );
    }
}