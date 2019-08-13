import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 130
  },
  control: {
    padding: theme.spacing(2)
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
}));

function ControlPanel(props) {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        {/* <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2].map(value => (
            <Grid key={value} item>
              <Paper className={classes.paper}>Microservice 1</Paper>
            </Grid>
          ))}
        </Grid>
      </Grid> */}
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Microservice-1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Microservice-1 Description
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                id="microservice-1"
                onClick={props.onClick}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Microservice-2
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Microservice-2 Description
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                id="microservice-2"
                name="button"
                onClick={props.onClick}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Microservice-3
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Microservice-3 Description
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                id="microservice-3"
                name="button"
                onClick={props.onClick}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Microservice-5
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Microservice-5 Description
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                id="microservice-5"
                onClick={props.onClick}
                name="button"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Microservice-6
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Microservice-6 Description
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                id="microservice-6"
                name="button"
                onClick={props.onClick}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Microservice-7
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Microservice-7 Description
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                id="microservice-7"
                name="button"
                onClick={props.onClick}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default ControlPanel;
