import React from 'react';
import { Box } from '@material-ui/core';

import BasePage from '../components/BasePage';
import { useTextStyles } from '../util/styles';
import Heading from '../components/Heading';
import Listing from '../components/Listing';

import release1 from '../assets/release1.jpeg';
import release2 from '../assets/release2.jpeg';
import release3 from '../assets/release3.jpeg';
import release4 from '../assets/release4.jpeg';
import release5 from '../assets/release5.jpeg';
import release6 from '../assets/release6.jpeg';
import release7 from '../assets/release7.jpeg';
import release8 from '../assets/release8.jpeg';
import release9 from '../assets/release9.jpeg';

function NewReleasesPage() {
  const textClasses = useTextStyles();
  const listings = [
    {
      images: [release1, release1, release1],
      name: "Brown Overcoat Fit",
      price: 450
    },
    {
      images: [release2, release2, release2],
      name: "White & Tan Semi-formal Fit",
      price: 350
    },
    {
      images: [release3, release3, release3],
      name: "Casual Sports Fit",
      price: 200
    },
    {
      images: [release4, release4, release4],
      name: "1850’s Victorian Fit",
      price: 450
    },
    {
      images: [release5, release5, release5],
      name: "Classic Denim Overwear Fit",
      price: 250
    },
    {
      images: [release6, release6, release6],
      name: "Buttermilk Trenchcoat Fit",
      price: 400
    },
    {
      images: [release7, release7, release7],
      name: "Bold Red Hoodie Fit",
      price: 250
    },
    {
      images: [release8, release8, release8],
      name: "Casual Sports Fit 2",
      price: 250
    },
    {
      images: [release9, release9, release9],
      name: "Street Freewear Fit",
      price: 200
    },
  ];
  return (
    <BasePage>
      <Heading page="New Releases" />
      <Box
        width={850}
        m="auto"
        p={4}
        display="flex"
        justifyContent="space-around"
        flexWrap="wrap">
        {listings.map(listing => <Listing {...listing} />)}
      </Box>
    </BasePage>
  );
}
export default NewReleasesPage;
