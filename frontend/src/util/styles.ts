import { createStyles, makeStyles } from "@material-ui/core";

export const useTextStyles = makeStyles(() =>
  createStyles({
    heading: {
      display: "inline",
      borderBottom: "1px solid black"
    },
    centered: {
      textAlign: "center"
    },
    underlineWhite: {
      borderBottom: "1px solid white"
    },
    underlineBlack: {
      borderBottom: "1px solid black"
    }
  })
);
