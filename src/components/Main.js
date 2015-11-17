require('normalize.css');
require('styles/App.css');

import React from 'react';

class HeroList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }
  onSelect(id) {
    this.props.onSelect(id)
  }
  render() {
    var heroList = this.state.data.map(function(hero) {
      return (
        <li onClick={this.onSelect.bind(this, hero.id)}>{hero.name}</li>
      );
    }.bind(this));
    return (
      <ul className="heroes">
        {heroList}
      </ul>
    );
  }
}

class HeroForm extends React.Component {
  handleChange(e) {
    var name = this.refs.name.value.trim();
    this.props.onChange(name);
    return;
  }
  render() {
    return (
      <input type="text" ref="name" onChange={this.handleChange} />
    );
  }
}
var HEROES = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: HEROES, selectedHero: HEROES[0] };
  }
  onSelectedHeroNameChange(newName) {
    //this.state.selectedHero.name = newName;
  }
  handleHeroSelect = (selectedHeroId) => {
    console.log("selected hero id", selectedHeroId);
    this.state.selectedHero = this.state.data.find(function(e) { e.id === selectedHeroId; })
    console.log("changed selected hero to", this.state.selectedHero);
  }
  render() {
    var title = 'Tour of Heroes'; // FIXME, this should be a property
    return (
      <div>
        <h1>{title}</h1>
        <h2>My Heroes</h2>
        <p>Selected: {this.state.selectedHero.name}</p>
        <HeroList data={this.state.data} onSelect={this.handleHeroSelect} />
        <HeroForm onChange={this.onSelectedHeroNameChange}/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
