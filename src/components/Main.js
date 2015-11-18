require('normalize.css');
require('styles/App.css');

import React from 'react';

class HeroList extends React.Component {

  constructor(props) {
    super(props);
  }

  onSelect(id) {
    this.props.onSelect(id)
  }

  getSelectedClass(id) {
    if (this.props.selected.id == id) {
      return "selected";
    } else {
      return "";
    }
}

  render() {
    var heroList = this.props.data.map(function(hero) {
      return (
        <li className={this.getSelectedClass(hero.id)} onClick={this.onSelect.bind(this, hero.id)}>{hero.name}</li>
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

  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    var name = this.refs.name.value.trim();
    this.props.onChange(name);
    return;
  }
  render() {
    return (
      <input type="text" ref="name" onChange={this.handleChange.bind(this)} value={this.props.value} />
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
  onSelectedHeroNameChange = (newName) => {
    this.state.selectedHero.name = newName;
    this.setState(this.state);
  }
  handleHeroSelect = (selectedHeroId) => {
    this.state.selectedHero = this.state.data.find((e) => { return e.id === selectedHeroId; })
    this.setState(this.state);
  }
  render() {
    var title = 'Tour of Heroes'; // FIXME, this should be a property
    return (
      <div>
        <h1>{title}</h1>
        <h2>My Heroes</h2>
        <HeroList data={this.state.data} selected={this.state.selectedHero} onSelect={this.handleHeroSelect} />
        <h2>{this.state.selectedHero.name} details!</h2>
        <div><label>id: </label>{this.state.selectedHero.id}</div>
        <div>
          <label>name: </label>
          <HeroForm onChange={this.onSelectedHeroNameChange} value={this.state.selectedHero.name} />
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
