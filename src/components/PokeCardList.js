import { makeStyles } from '@material-ui/core';
import React from 'react';
import PokeCard from './PokeCard';

const useStyles = makeStyles({
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        rowGap: '20px'
    }
})

const PokeCardList = ({ pokemons }) => {

    const classes = useStyles();

    return (
        <div className={classes.grid}>
            {pokemons.map(pokemon => <PokeCard name={pokemon.name} height={pokemon.height} weight={pokemon.weight} img={pokemon.sprites.front_default} />)}
        </div>


    )
}

export default PokeCardList;