import React, { useState } from 'react';
import { Box, Tab, Tabs } from '@material-ui/core';
import Designer, { Preview } from 'react-designer';

import BasePage from '../components/BasePage';
import Heading from '../components/Heading';

import shirtFront from '../assets/shirt-front.png';
import shirtBack from '../assets/shirt-back.png';

const ShirtBG = ({ width, height, back = false }) => (
  <svg width={width} height={height} style={{
    position: "absolute",
    marginLeft: "40px",
  }}>
    <image x={0} y={0} width={width} height={height}
      xlinkHref={back ? shirtBack : shirtFront} />
  </svg>
);

const TabPanel = ({ currentTab, tab, children }) => {
  return tab === currentTab && children;
}

function CreatePage() {
  const width = 400, height = 600;
  const [frontObjects, setFrontObjects] = useState([]);
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
  const [backObjects, setBackObjects] = useState([]);
  const [tab, setTab] = useState(0);
  return (
    <BasePage>
      <Heading page="Create" />
      <Box display="flex" justifyContent="center">
        <Box m={4} width={2 * width} border="1px solid black">
          <Tabs
            value={tab}
            onChange={(_, t) => setTab(t)}
            variant="fullWidth">
            <Tab label="Front" />
            <Tab label="Back" />
            <Tab label="Preview" />
          </Tabs>
          <TabPanel currentTab={tab} tab={0}>
            <ShirtBG width={width} height={height} />
            <Designer width={width} height={height}
              background="transparent"
              objects={frontObjects}
              onUpdate={objects => setFrontObjects(objects)} />
          </TabPanel>
          <TabPanel currentTab={tab} tab={1}>
            <ShirtBG width={width} height={height} back />
            <Designer width={width} height={height}
              background="transparent"
              objects={backObjects}
              onUpdate={objects => setBackObjects(objects)} />
          </TabPanel>
          <TabPanel currentTab={tab} tab={2}>
            <Box width={width} display="inline-block">
              <Preview width={width} height={height}
                objects={[frontSvg, ...frontObjects]} />
            </Box>
            <Box width={width} display="inline-block">
              <Preview width={width} height={height}
                objects={[backSvg, ...backObjects]} />
            </Box>
          </TabPanel>
        </Box>
      </Box>
    </BasePage>
  );
}
export default CreatePage
