import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem, { ListItemProps } from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import FolderIcon from '@material-ui/icons/Folder'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 770,
    maxWidth: '100%',
  },
  workBox: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px'
  },
}));

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

const Works: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box p={2}>
        <Box className={classes.workBox}>
          <Typography variant='h5' >
            Works
          </Typography>
        </Box>
        <Box className={classes.workBox}>
          <List className={classes.root}>
            <ListItem>
              <ListItemLink href='https://wakiyamaseisakusyo.jp/' target="_blank">
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='株式会社 脇山製作所様' secondary='会社のホームページ作成を担当させていただきました。' />
              </ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href='https://kobasetsubi.jp/' target="_blank">
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='株式会社 コバ設備様' secondary='会社のホームページ作成を担当させていただきました。' />
              </ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href='https://kazuki-sako.github.io/react-sandbox/' target="_blank">
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='SandBox' secondary='Reactで作成したアプリ置き場（自分用）' />
              </ListItemLink>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
}

export default Works;