import React from 'react';
import { Box, createStyles, Grid, makeStyles, Typography } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles(() => createStyles({
  subtitle: {
    fontFamily: 'Cabin'
  }
}));

function Listing(props: { images: string[], name: string, price: number }) {
  const classes = useStyles();
  return (
    <Box width={220}><Grid container>
      <Grid item xs={12}>
        <Carousel
          autoPlay={false}
          timeout={250}
          navButtonsAlwaysInvisible
          indicatorContainerProps={{
            className: "",
            style: {
              marginTop: "-20px"
            }
          }}
          indicatorIconButtonProps={{
            className: "",
            style: {
              backgroundColor: "white",
              margin: 1,
            }
          }}>
          {props.images.map((image, i) =>
            <Box
              display="flex"
              justifyContent="center"
              alignContent="center"
              width={220}
              height={330}
              overflow="hidden">
              <img height="auto" alt={`img ${i}`} src={image} />
            </Box>
          )}
        </Carousel>
      </Grid>
      <Grid container justify="space-between">
        <Grid item xs={9}>
          <Typography variant="body1" className={classes.subtitle}>{props.name}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body1" className={classes.subtitle} color="textSecondary">${props.price}</Typography>
        </Grid>
      </Grid>
    </Grid></Box>
  );
}
export default Listing;
