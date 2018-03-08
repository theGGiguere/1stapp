import React, { Component } from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		
		const filteredRobots = this.state.robots.filter(robot => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
	})
		console.log(event.target.value);
}
	render() {
			
		return (
			<div className = 'tc'>
				<h1>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList robots={this.state.robots}/>
			</div>
			);
	}
	}

export default App