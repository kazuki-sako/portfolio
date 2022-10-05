import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import ImageFile from '../static/images/my_avatar.png'

const useStyles = makeStyles((theme) => ({
  // 表示サイズを指定
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  profile: {
    display: 'flex',
    justifyContent: 'center',
  }
}));

const MyAvatar: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box p={2}>
        <Box className={classes.profile}>
          <Box p={1} >
            <Avatar
              alt='K S'
              src={ImageFile}
              className={classes.large}
            />
          </Box>
        </Box>
        <Box className={classes.profile}>
          <Box p={1} >
            <Typography variant='h5' >
              K.S
            </Typography>
          </Box>
        </Box>
        <Box className={classes.profile}>
          <Box p={1} >
            <Typography variant='body1'>
              Front End Enginner
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MyAvatar;