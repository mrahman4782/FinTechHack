import React from 'react';
import { AppBar, Box, createMuiTheme, createStyles, IconButton, makeStyles, Theme, ThemeProvider, Toolbar, Typography } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#3D3C3C'
    }
  }
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    title: {
      fontSize: "2em",
      color: "#ffffff",
      textDecoration: "none",
      padding: theme.spacing(1),
    },
  })
)

function BasePage(props: { children: JSX.Element }) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Box className={classes.grow}>
            <Link to="/" className={classes.title}>
              Sample Title
            </Link>
          </Box>
          <IconButton color="inherit">
            <PersonIcon />
          </IconButton>
          <IconButton color="inherit">
            <ShoppingIcon />
          </IconButton>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <AppBar position="static" color="secondary">
        <Box bgcolor="secondary" display="flex" justifyContent="space-evenly">
          <Link to="/releases" className={classes.title}>
            New Releases
          </Link>
          <Link to="/create" className={classes.title}>
            Create
          </Link>
          <Link to="/community" className={classes.title}>
            Community
          </Link>
        </Box>
      </AppBar>

      {props.children}

      <Box
        width="100%"
        height={160}
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        bgcolor={theme.palette.primary.main}>
        <Link to="#" className={classes.title}>
          English (US)
        </Link>
        <Link to="/about" className={classes.title}>
          About Us
        </Link>
        <Link to="#" className={classes.title}>
          Cookies
        </Link>
        <Link to="/legal" className={classes.title}>
          Legal
        </Link>
      </Box>
    </ThemeProvider>
  );
}
export default BasePage;
