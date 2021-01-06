import PokeCard from './components/PokeCard';
import './App.css';
import { Paper, withStyles } from '@material-ui/core';
import React from 'react';

const useStyles = {
  root: {
    height: '100%',
    textAlign: 'center'
  }
};

class App extends React.Component {

  render() {
    return (
      <Paper className={this.props.classes.root} square={true}>
        <PokeCard />
      </Paper>
    );
  }

  async componentDidMount() {
    const pokemonUrls = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20").then(resp => resp.json()).then(resp => resp.results.map(data => data.url));
    const pokemonPromises = pokemonUrls.map(url => fetch(url).then(resp => resp.json()));
    const pokemons = await Promise.all(pokemonPromises);
    console.log(pokemons);
  }

}

export default withStyles(useStyles)(App);
