import React from 'react'
import General from './collectionInformation'

import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'


function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    )
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired
  }
  
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      marginTop: 50
    }
  }))
  
   function NavTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    function handleChange(event, newValue) {
      setValue(newValue)
    }
  
    return (       
        <div className={classes.root}>
          <h1>Создать коллекцию:</h1>
                <hr/>
                <hr/>
            <TabContainer ><General/></TabContainer>
          </div>
    )
  }

  export default NavTabs