import React, { Component } from 'react'
import './App.css';
import Cardlist from './components/card-list/Cardlist'
import Search from './components/search-box/SearchBox'

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    }

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMoster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))


    // e => this.setState({ searchField: e.target.value })
    return (
      <div className="App" >

        <h1>Monster Rolodex</h1>
        <Search placeholder="search monster" handleChange={this.handleChange} />

        <Cardlist monsters={filteredMoster} />

      </div>
    );
  }
}


export default App;
