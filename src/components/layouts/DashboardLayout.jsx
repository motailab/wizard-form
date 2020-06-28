import React from 'react';
import {makeStyles, Drawer, CssBaseline, List, ListItem, Container} from '@material-ui/core';
import grid from '../../assets/img/grid.svg';
import pie from '../../assets/img/pie-chart.png';
import card from '../../assets/img/credit-card.png';
import calendar from '../../assets/img/calendar.png';
import BottomLogo from '../../assets/img/bottom-logo.png';


const drawerWidth = 80;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },

  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#314197',
    alignItems: 'center'
  },

  listStyle: {
      marginTop: '3rem',
      width: '100%'
  },

  listItemStyle: {
    padding: '1rem',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


const DashBoardLayout = ({children}) => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{paper: classes.drawerPaper}}
          anchor='left'>
            <List className={classes.listStyle}>
                <ListItem className={classes.listItemStyle}>
                    <img src={grid} alt="grid"/>
                </ListItem>
                <ListItem className={classes.listItemStyle}>
                    <img src={pie} alt="chart"/>
                </ListItem>
                <ListItem className={classes.listItemStyle}>
                    <img src={card} alt="card"/>
                </ListItem>
                <ListItem className={classes.listItemStyle}>
                    <img src={calendar} alt="calander"/>
                </ListItem>
            </List>
            <img src={BottomLogo} alt="" style={{marginTop: 'auto', marginBottom: '1rem'}}/>
        </Drawer>
        <main className={classes.content}>
           <Container maxWidth="lg">
              {children}
           </Container>
        </main>
      </div>
    );
}


export default DashBoardLayout;