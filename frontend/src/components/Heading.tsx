import React from "react";
import { Box, Typography } from "@material-ui/core";

import { useTextStyles } from "../util/styles";

function Heading(props: {page: string}) {
  const textClasses = useTextStyles();
  return (
    <Box m={2} textAlign="center">
      <Typography variant="h2" className={textClasses.heading}>{props.page}</Typography>
    </Box>
  )
}
export default Heading;
