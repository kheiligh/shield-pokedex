import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const styles = {
    list_container: {
        margin: '15px'
    },
    card: {
      maxWidth: 345,
      display: 'inline-block'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  };

function List(props) {
    const { classes } = props;
    const results = props.pokemon && props.pokemon.searchResults ? props.pokemon.searchResults : [];
    
    return (
        <div className={classes.list_container}>
            {results.map(x => 
            <Card key={x.id} className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={x.imgSrc}
                    title={x.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {x.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        <Link key={x.id} to={{pathname: `/poke/${x.id}`, state: { modal: false } }}>
                        Share
                        </Link>
                    </Button>
                    <Button size="small" color="primary">
                        <Link key={x.id} to={{pathname: `/poke/${x.id}`, state: { modal: true } }}>
                            Learn More 
                        </Link>
                    </Button>
                </CardActions>
            </Card>
            )}
        </div>
    )
}

List.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(List);