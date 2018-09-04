import React, { Component } from 'react';
import './App.css';

import Navbar from './components/navbar/navbar';
import CarAuction from './components/carAuction/carAuction';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <CarAuction />
            </div>
        );
    }
}

export default App;
