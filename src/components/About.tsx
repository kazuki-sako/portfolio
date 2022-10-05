import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  // 表示サイズを指定
  about: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
  },
  pt30: {
    paddingTop: '30px'
  }
}));

const About: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.pt30}>
        <Box className={classes.about}>
          <Box>
            <Typography variant='h5' >
              About
            </Typography>
          </Box>
        </Box>
        <div className={classes.about}>
          <Box p={1}>
            <Typography variant='body1' align='left'>
              はじめてK.Sです。<br />
              東京でWebエンジニアとして働いていて、主にコーディングがメインでしたが、<br />
              最近はReactとTypeScriptを使っています。<br />

            </Typography>
          </Box>
        </div>
      </Box>
    </>
  );
}

export default About;