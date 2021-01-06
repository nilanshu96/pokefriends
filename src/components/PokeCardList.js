import { makeStyles } from '@material-ui/core';
import React from 'react';
import PokeCard from './PokeCard';

const useStyles = makeStyles( theme => ({
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, max-content))',
        justifyContent: 'center',
        gap: '50px'
    }
}))

const PokeCardList = ({ pokemons }) => {

    const classes = useStyles();

    return (
        <div className={classes.grid}>
            {pokemons.map(pokemon => <PokeCard key={pokemon.id} name={pokemon.name} height={pokemon.height} weight={pokemon.weight} img={pokemon.sprites.front_default} />)}
        </div>
    )
}

export default PokeCardList;