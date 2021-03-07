import { createStyles, makeStyles } from "@material-ui/core";

export const useTextStyles = makeStyles(() =>
  createStyles({
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
