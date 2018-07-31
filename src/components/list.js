import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const styles = {
    list_container: {
        padding: '15px'
    },
    card: {
      maxWidth: 345,
      display: 'inline-block',
      height: 135,
      width: 185,
      marginLeft: 10,
      backgroundColor: '#FFF8DE',
      marginBottom: 10
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
      'background-size': 'auto'
    }
  };

function List(props) {
    const { classes } = props;
    const results = props.pokemon && props.pokemon.searchResults ? props.pokemon.searchResults : [];
    if(results.length > 0) {
        return (
            <div className={classes.list_container}>
                {results.map(x => 
                <Link key={x.id} to={{pathname: `/poke/${x.id}`, state: { modal: true } }}>
                <Card key={x.id} className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={x.imgSrc}
                        title={x.name}
                    />
                    <CardContent className='card_content'>
                        <Typography gutterBottom variant="headline" component="h2" className='card_title'>
                            {x.name}
                        </Typography>
                    </CardContent>
                </Card>
                </Link>
                )}
            </div>
        )
    } else {
        return (
            <div className='loading'>Waiting for Results</div>
        )
    }
}

List.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(List);