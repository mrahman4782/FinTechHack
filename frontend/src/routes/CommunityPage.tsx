import React, { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@material-ui/core';

import BasePage from '../components/BasePage';
import Showcase from '../components/Showcase';
import Heading from '../components/Heading';
import { db } from '../util/firebase';

function CommunityPage() {
  const [posts, setPosts] = useState<any[]>([]);
  useEffect(() => {
    db.collection('shirtDesigns').get()
      .then(data => setPosts(data.docs.map(d => d.data())));
  })
  return (
    <BasePage>
      <Heading page="Community" />
      <Box display="flex" flexDirection="column" alignItems="center">
        {posts.length > 0 ? posts.map(post => <Showcase {...post} />) : (
          <Box p={2}>
            <CircularProgress />
          </Box>
        )}
      </Box>
    </BasePage>
  );
}
export default CommunityPage;
