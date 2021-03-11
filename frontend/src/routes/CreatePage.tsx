import React, { useState } from 'react';
import { Box, Button, Dialog, Tab, Tabs, Typography } from '@material-ui/core';
import Designer, { Preview } from 'react-designer';

import BasePage from '../components/BasePage';
import Heading from '../components/Heading';
import Exporter from '../components/Exporter';

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
  const [backObjects, setBackObjects] = useState([]);
  const backSvg = {
    type: 'image',
    x: 0, y: 0,
    width: width, height: height,
    xlinkHref: shirtBack
  };
  const [tab, setTab] = useState(0);
  const [showModal, setShowModal] = useState(false);
  return (
    <BasePage>
      <Heading page="Create" />
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">

        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowModal(true)}>
          <Typography variant="h5">
            Post
          </Typography>
        </Button>

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

        <Dialog
          open={showModal}
          onClose={() => setShowModal(false)}>
          <Exporter
            width={width}
            height={height}
            frontObjects={frontObjects}
            backObjects={backObjects}
            setShow={setShowModal} />
        </Dialog>

      </Box>
    </BasePage>
  );
}
export default CreatePage
