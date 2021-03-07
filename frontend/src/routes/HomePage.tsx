import React from 'react';
import { Box, Button, createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

import BasePage from '../components/BasePage';
import Showcase from '../components/Showcase';

import carouselImg from '../assets/carousel-1.png';
import sunglasses from '../assets/sunglasses.png';
import drip1 from '../assets/drip1.jpeg';
import drip2 from '../assets/drip2.jpeg';
import linus from '../assets/linus.jpeg';
import hoodie from '../assets/hoodie.jpeg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontFamily: 'Berkshire Swash',
      textAlign: 'center',
      padding: theme.spacing(1),
    },
    centered: {
      textAlign: "center"
    },
    underlineWhite: {
      borderBottom: "1px solid white"
    },
    underlineBlack: {
      borderBottom: "1px solid black"
    }
  })
)

function HomePage() {
  const classes = useStyles();
  return (
    <BasePage>
      <Typography variant="h2" className={classes.title}>Introducing this fall</Typography>

      <Box bgcolor="secondary.main">
        <Carousel animation="slide" autoPlay={false}>
          {Array(5).fill(carouselImg).map(img =>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
              height={400}>
              <img src={img} width="80%" />
              <Box position="absolute" bottom="40px">
                <Button variant="contained" color="primary">
                  <Typography variant="h5">Shop Now</Typography>
                </Button>
              </Box>
            </Box>
          )}
        </Carousel>
      </Box>

      <Box p={6} maxWidth={1000} m="auto">
        <Grid container justify="space-evenly" alignItems="center">
          <Grid container>
            <Grid item xs>
              <img src={sunglasses} width={400} />
            </Grid>
            <Grid item xs>
              <Box pt={4} pb={4} width={400}>
                <Typography variant="h3" className={classes.underlineBlack}>
                  Inspire
                </Typography>
                <Typography variant="h5">
                  Buy our stuff
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs>
              <img src={drip1} height={280} />
            </Grid>
            <Grid item xs>
              <Box display="flex" justifyContent="center" width={400} overflow="hidden">
                <img src={drip2} height={280} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box bgcolor="secondary.main" color="text.primary">
        <Box display="flex" justifyContent="center">
          <Box maxWidth={500} pt={4}>
            <Typography variant="h4" className={`${classes.underlineWhite} ${classes.centered}`}>
              Join the Community
            </Typography>
            <Typography variant="h6" className={classes.centered}>
              Create your own clothing designs and earn money by sharing it with the community!
            </Typography>
          </Box>
          <Showcase
            avatar={linus}
            clothing={hoodie} 
            username="whoisJoe321"
            body="Ay yoo guys check out my latest hoodie design!" />
        </Box>
      </Box>
    </BasePage>
  );
}
export default HomePage;
