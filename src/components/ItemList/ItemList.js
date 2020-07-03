import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner/';

import './ItemList.css';

export default class ItemList extends Component {

  _swapi = new SwapiService();

  state = {
    peopleList: null
  }

  componentDidMount(){
    this._swapi
      .getAllPeople()
      .then( peopleList => {
        this.setState({
          peopleList
        });
      })
  }

  render() {

    const { peopleList } = this.state;
    const { selectedItem } = this.props;

    if(!peopleList){
      return (
        <Spinner />
      )
    }

    return (
      <ul className="item-list list-group">
        {
          peopleList.map( man => {
            return (
              <li 
              key={man.id} 
              className="list-group-item"
              onClick={() => selectedItem(man.id)}>
                { man.name }
              </li>
            )
          })
        }
      </ul>
    );
  }
}
