import {Paper, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        overflowY: 'scroll',
        height: '70vh',
        margin: '20px'
    }
})

const Scroll = (props) => {

    const classes = useStyles();

    return (
        <Paper className={classes.root} variant="outlined">
            {props.children}
        </Paper>
    )
}

export default Scroll;