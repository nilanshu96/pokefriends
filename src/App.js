import PokeCardList from './components/PokeCardList';
import './App.css';
import { Paper, Typography, withStyles } from '@material-ui/core';
import React from 'react';
import Scroll from './components/Scroll';

const useStyles = {
  root: {
    height: '100%',
    textAlign: 'center'
  }
};

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      pokemons: [],
      searchfield: ''
    }
  }

  render() {
    return (
      <Paper className={this.props.classes.root} square={true}>
        <Typography variant="h1">PokeFriends</Typography>
        <Scroll>
          <PokeCardList pokemons={this.state.pokemons} />
        </Scroll>
      </Paper>
    );
  }

  async componentDidMount() {
    const pokemonUrls = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100").then(resp => resp.json()).then(resp => resp.results.map(data => data.url));
    const pokemonPromises = pokemonUrls.map(url => fetch(url).then(resp => resp.json()));
    const pokemons = await Promise.all(pokemonPromises);
    this.setState({ pokemons: pokemons });
  }

}

export default withStyles(useStyles)(App);
