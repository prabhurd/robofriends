import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }


    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
        console.log(event)
    }

    render() {

        const filteredRobots = this.state.robots.filter(
            robot => {
                return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            }
        );

        if (filteredRobots.length == 0) {
            return <h1 className='tc'>loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1> Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>

                </div>
            )
        }

    }


}

export default App;
