import React, { Component } from 'react';


import Header from '../Header/';
import ItemList from '../ItemList/';
import PersonDetails from '../PersonDetails/';
import RandomPlanet from '../RandomPlanet';

import './App.css';

export default class App extends Component {

    state = {
      selectedPerson: null
    };
  
    setShowPerson = id => {
        this.setState({
            selectedPerson: id
        });
    }
  
    render() {
  
      return (
        <div className="stardb-app">
          <Header />
          <div className="container-fluid">

            <RandomPlanet/>

            <div className="row mb2">
                <div className="col-md-6">
                <ItemList selectedItem={this.setShowPerson} />
                </div>
                <div className="col-md-6">
                <PersonDetails personId={this.state.selectedPerson} />
                </div>
            </div>
          </div>
        </div>
      );
    }
  }