import React from 'react';
import { Avatar, Box, createStyles, IconButton, makeStyles, Typography } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownIcon from '@material-ui/icons/ThumbDownOutlined';
import CommentIcon from '@material-ui/icons/CommentOutlined';

import { Preview } from 'react-designer';

const useStyles = makeStyles(() =>
  createStyles({
    underlineBlack: {
      borderBottom: "1px solid black"
    }
  })
)

function Showcase(props: {
  avatar: string,
  username: string,
  body: string,
  clothing?: string,
  frontObjects?: [],
  backObjects?: [],
}) {
  const classes = useStyles();
  return (
    <Box minWidth={450} m={2} bgcolor="secondary.light" color="primary.main" textAlign="center">
      <Box display="flex" m={2} p={1} className={classes.underlineBlack} textAlign="left">
        <Box mr={2}>
          <Avatar src={props.avatar} />
        </Box>
        <Box>
          <Typography>@{props.username}</Typography>
          <Typography>{props.body}</Typography>
        </Box>
      </Box>
      {props.clothing ? <img src={props.clothing} alt={`${props.username}'s design`} height={170} /> :
        <Box m={2} display="flex" flexDirection="row">
          <Preview width={400} height={600} objects={props.frontObjects} />
          <Preview width={400} height={600} objects={props.backObjects} />
        </Box>
      }
      <Box>
        <IconButton>
          <ThumbUpIcon />
        </IconButton>
        <IconButton>
          <CommentIcon />
        </IconButton>
        <IconButton>
          <ThumbDownIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
export default Showcase;
