import React from "react";
import { Card, makeStyles, CardContent, Typography } from "@material-ui/core";
import { FavoriteIcon } from "@material-ui/icons/Favorite";
import CustomButton from "./CustomButton";

const useStyles = makeStyles(() => ({
  root: {
    width: 300,
  },
}));

const CustomCard = ({ header, paragraph }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <Typography variant="body2" component="p">
          {header}
        </Typography>
        <CardContent>
          <Typography variant="body2" component="p">
            {paragraph}
          </Typography>
          <CustomButton type="submit" text="read more" />
        </CardContent>
      </Card>
      ;
    </>
  );
};

export default CustomCard;
