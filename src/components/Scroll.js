import {Paper, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        overflow: 'scroll',
        height: '800px'
    }
})

const Scroll = (props) => {

    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            {props.children}
        </Paper>
    )
}

export default Scroll;