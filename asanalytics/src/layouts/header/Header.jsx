import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          PruebaAsA
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },            
  }));

  

  const Header = () => {
    const classes = useStyles();
  
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
              <Link href="home">
              AsAnalytics
              </Link>
            </Typography>
            <nav>
              <Link variant="button" color="textPrimary" href="Checkout" className={classes.link}>
                Vender
              </Link>
              <Link variant="button" color="textPrimary" href="Purchase" className={classes.link}>
                Comprar
              </Link>
              <Link variant="button" color="textPrimary" href="Home" className={classes.link}>
                Support
              </Link>
            </nav>
            <Button href="/login" color="primary" variant="outlined" className={classes.link}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
    </React.Fragment>
  );
}

export default Header