import React, { Component } from 'react';
import Switch from './switch';

export default class SwitchList extends Component {

  handleChange(field, value){
    this.setState({
      ...this.state,
      [field]: value
    });
  }

  render(){
    return (
      <div>
        <div>
          <h2>Filters</h2>
          <Switch
            onChange={this.handleChange.bind(this, 'switch1')}
            checked={this.state.switch1}
            label="This is a switch"
          />
          <Switch
            onChange={this.handleChange.bind(this, 'switch2')}
            checked={this.state.switch2}
            label="Yet another switch"
          />
        </div>
        <div>
          <h2>Players</h2>
        </div>
      </div>

    );
  }

}
