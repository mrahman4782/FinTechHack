import React from 'react';
import { Box, Typography } from '@material-ui/core';

import BasePage from '../components/BasePage';
import Showcase from '../components/Showcase';
import Heading from '../components/Heading';
import { useTextStyles } from '../util/styles';

import linus from '../assets/linus.jpeg';
import hoodie from '../assets/hoodie.jpeg';
import squidward from '../assets/squidward.png';
import squidwardShirt from '../assets/squidward-shirt.jpeg';

function CommunityPage() {
  const textClasses = useTextStyles();
  const posts = [
    {
      avatar: linus,
      username: 'whoisJoe321',
      body: 'Ay yoo guys check out my latest hoodie design!',
      clothing: hoodie,
    },
    {

      avatar: squidward,
      username: 'kingsquidward',
      body: 'Let me know which design you guys like this design, and I’ll create more in different colors!',
      clothing: squidwardShirt,
    }
  ];
  return (
    <BasePage>
      <Heading page="Community" />
      <Box display="flex" flexDirection="column" alignItems="center">
        {posts.map(post => <Showcase {...post} />)}
      </Box>
    </BasePage>
  );
}
export default CommunityPage;
