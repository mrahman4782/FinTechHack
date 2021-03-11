import React, { useState } from 'react';

import { Box, Button, CircularProgress, makeStyles, TextField } from '@material-ui/core';

import { db } from '../util/firebase';

import shirtFront from '../assets/shirt-front.png';
import shirtBack from '../assets/shirt-back.png';

const useStyles = makeStyles({
  input: {
    margin: '10px'
  }
});

function Exporter({ frontObjects, backObjects, width, height, setShow }) {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [body, setBody] = useState('');
  const frontSvg = {
    type: 'image',
    x: 0, y: 0,
    width: width, height: height,
    xlinkHref: shirtFront
  };
  const backSvg = {
    type: 'image',
    x: 0, y: 0,
    width: width, height: height,
    xlinkHref: shirtBack
  };
  const [uploading, setUploading] = useState(false);
  const handleUpload = () => {
    if (username === '' || body === '') return;
    frontObjects.unshift(frontSvg);
    backObjects.unshift(backSvg);
    db.collection('shirtDesigns').add({
      username,
      body,
      frontObjects,
      backObjects
    })
      .then(() => {
        setShow(false);
        setUploading(false);
      });
    setUploading(true);
  };
  return (
    <Box p={2} display="flex" flexDirection="column">
      {uploading ? <CircularProgress />
        : (
          <>
            <TextField
              className={classes.input}
              variant="outlined"
              inputProps={{ style: { color: 'black' } }}
              label="Username"
              value={username}
              onChange={e => setUsername(e.target.value)} />
            <TextField
              className={classes.input}
              variant="outlined"
              inputProps={{ style: { color: 'black' } }}
              label="Body"
              value={body}
              onChange={e => setBody(e.target.value)} />
            <Button
              variant="contained"
              color="primary"
              onClick={handleUpload}>
              Upload
            </Button>
          </>
        )}
    </Box>
  );
}
export default Exporter;
