import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner/';

import './PersonDetails.css';

export default class PersonDetails extends Component {

  _swapi = new SwapiService();

  state = {
    person: null,
    isLoading: true
  }

  upadatePerson = () => {
    const { personId } = this.props;

    if(!personId){
      return;
    }

    this.setState({
      isLoading:true
    });

    this._swapi.getPerson(personId)
      .then( person => {
        this.setState({
          person,
          isLoading: false
        });
      });
  }

  componentDidMount(){
    this.upadatePerson();
  }

  componentDidUpdate(prevProps){
    if(this.props.personId !== prevProps.personId){
      this.upadatePerson();
    }
  }

  render() {

    if(!this.state.person){
      return (
        <span>Select a person from a list</span>
      )
    }

    if(this.state.isLoading){
      return (
        <Spinner />
      )
    }

    const { id, name, gender, birthYear, eyeColor } = this.state.person;

    return (
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} 
          alt="person-details"/>

        <div className="card-body">
          <h4>{ name }</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{ gender }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{ birthYear }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{ eyeColor }</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
