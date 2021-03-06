import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import withStyles from '@material-ui/core/styles/withStyles';

import Menu from 'mdi-material-ui/Menu';

import Breadcrumbs from './breadcrumbs';


const styles = theme => ({
  home: {color: theme.palette.primary.contrastText},
  root: {margin: 0, padding: 0},
});


class Header extends React.Component {
  render() {
    const { classes, toggleDrawer } = this.props;
    return (
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <Grid container alignItems="center" wrap="nowrap">
            <Hidden mdUp>
              <Grid item style={{marginRight: '1em'}}>
                <IconButton children={<Menu />} color="inherit" onClick={toggleDrawer} />
              </Grid>
            </Hidden>
            <Grid item children={<Breadcrumbs />} />
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}


export default withStyles(styles)(Header);
