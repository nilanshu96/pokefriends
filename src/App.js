import PokeCardList from './components/PokeCardList';
import './App.css';
import { Paper, TextField, Typography, withStyles } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import React from 'react';
import Scroll from './components/Scroll';

const useStyles = {
  root: {
    height: '100%',
    textAlign: 'center'
  },
  txt: {
    fontSize: '3rem',
    '@media (min-width:600px)': {
      fontSize: '5rem',
    }
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

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {

    const filteredPokemons = this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));

    if (filteredPokemons.length === 0) {
      return (
        <Paper className={this.props.classes.root} square={true}>
          <Typography className={this.props.classes.txt}>PokeFriends</Typography>
          <Skeleton variant="wave" />
        </Paper>
      )
    }

    return (
      <Paper className={this.props.classes.root} square={true}>
        <Typography className={this.props.classes.txt}>PokeFriends</Typography>
        <TextField variant="outlined" style={{ margin: '20px' }} onChange={this.onSearchChange} />
        <Scroll>
          <PokeCardList pokemons={filteredPokemons} />
        </Scroll>
      </Paper>
    );
  }

  async componentDidMount() {
    const pokemonUrls = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=150").then(resp => resp.json()).then(resp => resp.results.map(data => data.url));
    const pokemonPromises = pokemonUrls.map(url => fetch(url).then(resp => resp.json()));
    const pokemons = await Promise.all(pokemonPromises);
    this.setState({ pokemons: pokemons });
  }

}

export default withStyles(useStyles)(App);
