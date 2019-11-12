import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Pricing from './pricing/Pricing';
import Album from './album/Album';
import Blog from './blog/Blog';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function MainNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Skiing" {...a11yProps(1)} />
          <Tab label="Snowboarding" {...a11yProps(2)} />
          <Tab label="Trekking" {...a11yProps(3)} />
          <Tab label="Renting Equipments" {...a11yProps(4)} />
          <Tab label="Hotels" {...a11yProps(5)} />
          <Tab label="Contact Us" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Blog/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Album/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Pricing/>
      </TabPanel>
    </div>
  );
}
