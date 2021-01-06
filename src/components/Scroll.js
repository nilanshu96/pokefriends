import {Paper, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        overflowY: 'scroll',
        height: '70vh',
    }
})

const Scroll = (props) => {

    const classes = useStyles();

    return (
        <Paper className={classes.root} elevation={0}>
            {props.children}
        </Paper>
    )
}

export default Scroll;