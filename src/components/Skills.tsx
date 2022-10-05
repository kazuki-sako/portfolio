import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    width: 730,
    maxWidth: '100%',
  },
  skillBox: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px'
  }
  
  
});

const Skills: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box p={2}>
        <Box className={classes.skillBox}>
          <Typography variant='h5' >
            Skills
          </Typography>
        </Box>
        <Box className={classes.skillBox}>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">
                言語
              </Typography>
              <Typography color="textSecondary">
                HTML / CSS / JavaScript / TypeScript
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box className={classes.skillBox}>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">
                フレームワーク
              </Typography>
              <Typography color="textSecondary">
                React
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box className={classes.skillBox}>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">
                その他
              </Typography>
              <Typography color="textSecondary">
                WordPress / jQuery
              </Typography>
            </CardContent>
          </Card>
        </Box>

      </Box>
    </>
  );
}

export default Skills;