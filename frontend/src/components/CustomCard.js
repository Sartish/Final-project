import React from "react";
import {
  Card,
  makeStyles,
  CardHeader,
  CardContent,
  Typography,
} from "@material-ui/core";
import CustomButton from "./CustomButton";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
}));

const CustomCard = ({ header, paragraph }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardHeader>{header}</CardHeader>
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
