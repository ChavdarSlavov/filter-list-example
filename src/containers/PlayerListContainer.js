import React, { Component } from 'react';
import { map, union, fill, intersection } from 'lodash';
import Switch from '../components/switch';
import Grid from '../components/Grid/Grid';
import PlayerProfile from '../components/PlayerProfile';
import PlayerData from '../data/players.js';

export default class PlayerListContainer extends Component {
  constructor(props){
    super(props);
    this.uniqueRoles = this.getUniqueRoles(PlayerData);
    this.state = {
      filters: fill(Array(this.uniqueRoles.length), true)
    };
  }

  getUniqueRoles(playerCollection){
    return union(...map(playerCollection, 'role'));
  }

  generateSwitches = (roleCollection) => {
    return roleCollection.map((role, index) => {
      return (
        <Switch
          key={index}
          onChange={this.handleChange.bind(this, index)}
          checked={this.state.filters[index]}
          label={role}
        />
      );
    });
  }

  filterPlayers = () => {
    const activeFilters = this.uniqueRoles.filter((value, index) => {
      return this.state.filters[index];
    });

    return PlayerData.filter((value) => {
      return intersection(activeFilters, value.role).length > 0;
    });
  }

  generatePlayers(playerCollection){
    return playerCollection.map(function(entry, index){
      return (
        <PlayerProfile
          key={index}
          picture={entry.picture}
          name={entry.name}
          role={entry.role}
          description={entry.description}
        />
      );
    });
  }

  handleChange(index, value){
    const filterList = [...this.state.filters];
    filterList[index] = value;
    this.setState({
      filters: filterList
    });
  }

  render(){
    const filterList = this.generateSwitches(this.uniqueRoles);
    const playerFeed = this.filterPlayers();
    const playersList = this.generatePlayers(playerFeed);

    return (
      <div>
        <div>
          <h2>Filters</h2>
          {filterList}
        </div>
        <div>
          <h2>Players</h2>
          <Grid>
            {playersList}
          </Grid>
        </div>
      </div>

    );
  }
}
