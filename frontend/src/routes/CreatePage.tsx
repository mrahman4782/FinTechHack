import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import Designer from 'react-designer';

import BasePage from '../components/BasePage';
import Heading from '../components/Heading';

import shirtFront from '../assets/shirt-front.png';
import shirtBack from '../assets/shirt-back.png';

const ShirtBG = ({ width, height, back = false }) => (
  <svg width={width} height={height} style={{position: "absolute"}}>
    <image x={0} y={0} width={width} height={height}
      xlinkHref={back ? shirtBack : shirtFront} />
  </svg>
);

function CreatePage() {
  const width = 400, height = 600;
  const [objects, setObjects] = useState([]);
  return (
    <BasePage>
      <Heading page="Create" />
      <Box display="flex" justifyContent="center">
        <Box p={2} m={4} border="1px solid black">
          <ShirtBG width={width} height={height} />
          <Designer width={width} height={height}
            background="transparent"
            objects={objects}
            onUpdate={objects => setObjects(objects)} />
        </Box>
      </Box>
    </BasePage>
  );
}
export default CreatePage
