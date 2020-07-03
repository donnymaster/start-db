import React, { Component } from 'react';
import Spinner from '../Spinner/';
import ErrorIndicator from '../ErrorIndicator/';

import SwapiService from '../../services/SwapiService';

import './RandomPlanet.css';

class RandomPlanet extends Component{

    _swapi = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: {
            statusError: false,
            codeError: null
        }
    }

    componentDidMount(){
        this.updatePlanet();
    }

    // componentWillUnmount(){
    //     clearInterval(this.interval);
    // }

    
    // static getDerivedStateFromProps(props, state){
    //     console.log(props, state, 'getDerivedStateFromProps');
    //     return null;
    // }

    
    // UNSAFE_componentWillUpdate(){
    //     console.log('componentWillUpdate');
    // }


    onPlanetLoaded = planet => {
        this.setState({planet, loading: false});
    }

    onErrorInLoad = error => {
        this.setState({
            error: {
                statusError: true,
                codeError: error.message
            },
            loading: false
        })
    }

    updatePlanet = () => {
        let id = Math.floor(Math.random() * 17) + 2;
        this._swapi
            .getPlanet(id)
            .then(this.onPlanetLoaded)  // get data
            .catch(this.onErrorInLoad); // if error in response

    }

    render(){
        
        const { planet, loading } = this.state;
        const { statusError, codeError } = this.state.error;

        const isShowContent = !(loading || statusError);

        const errorMessage = statusError ? <ErrorIndicator msg={codeError} /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = isShowContent ? <PlanetCard planet={planet} /> : null;
        
        // console.log('render');
        return(
            <>
                <div className="random-planet jumbotron rounded">
                    { spinner }
                    { content }
                    { errorMessage }                
                </div>
                <button
                className="btn btn-primary mb-3"
                onClick={() => this.updatePlanet()}>Update Planet</button>
            </>
        )
    }
}

function PlanetCard({ planet }){

    const { id, name, population, 
        rotationPeriod, diameter } = planet;

    return(
        <>
            <img className="planet-image"
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                alt="planet" />
            <div>
            <h4>{ name }</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <span className="term">Population</span>
                    <span>{ population }</span>
                </li>
                <li className="list-group-item">
                    <span className="term">Rotation Period</span>
                    <span>{ rotationPeriod }</span>
                </li>
                <li className="list-group-item">
                    <span className="term">Diameter</span>
                    <span>{ diameter }</span>
                </li>
            </ul>
            </div>
        </>
    )
}

export default RandomPlanet;