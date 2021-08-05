import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  ballStyle: {
    border: "2px solid black",
    borderRadius: "50%",
  },
});
const NumArr = [];
const numFormat = (num) => {
  num = Number(num).toString();
  if (Number(num) < 10 && num.length == 1) num = "0" + num;
  return num;
};
for (var i = 0; i < 6; i++) {
    var ranN = Math.floor(Math.random() * 45) + 1;
    var twoN = numFormat(ranN);
  NumArr.push(twoN);
}
const RandomNumber = () => {
  const classes = useStyles();

  return (
    <Grid container item xs={12} justifyContent="center" alignItems="center">
      <Grid container item justifyContent="center" xs={1} alignItems="center">
        <Grid
          container
          item
          justifyContent="center"
          xs={12}
          alignItems="center"
        >
          1번
        </Grid>
        <Grid
          container
          item
          justifyContent="center"
          xs={12}
          alignItems="center"
        >
          <div className={classes.ballStyle}>{NumArr[0]}</div>
        </Grid>
      </Grid>
      <Grid container item justifyContent="center" xs={1} alignItems="center">
        <Grid
          container
          item
          justifyContent="center"
          xs={12}
          alignItems="center"
        >
          2번
        </Grid>
        <Grid
          container
          item
          justifyContent="center"
          xs={12}
          alignItems="center"
        >
          <div className={classes.ballStyle}>{NumArr[1]}</div>
        </Grid>
      </Grid>
      <Grid container item justifyContent="center" xs={1} alignItems="center">
        <Grid
          container
          item
          justifyContent="center"
          xs={12}
          alignItems="center"
        >
          3번
        </Grid>
        <Grid
          container
          item
          justifyContent="center"
          xs={12}
          alignItems="center"
        >
          <div className={classes.ballStyle}>{NumArr[2]}</div>
        </Grid>
      </Grid>
      <Grid container item justifyContent="center" xs={1} alignItems="center">
        <Grid
          container
          item
          justifyContent="center"
          xs={12}
          alignItems="center"
        >
          4번
        </Grid>
        <Grid
          container
          item
          justifyContent="center"
          xs={12}
          alignItems="center"
        >
          <div className={classes.ballStyle}>{NumArr[3]}</div>
        </Grid>
      </Grid>
      <Grid container item justifyContent="center" xs={1} alignItems="center">
        <Grid
          container
          item
          justifyContent="center"
          xs={12}
          alignItems="center"
        >
          5번
        </Grid>
        <Grid
          container
          item
          justifyContent="center"
          xs={12}
          alignItems="center"
        >
          <div className={classes.ballStyle}>{NumArr[4]}</div>
        </Grid>
      </Grid>
      <Grid container item justifyContent="center" xs={1} alignItems="center">
        <Grid
          container
          item
          justifyContent="center"
          xs={12}
          alignItems="center"
        >
          6번
        </Grid>
        <Grid
          container
          item
          justifyContent="center"
          xs={12}
          alignItems="center"
        >
          <div className={classes.ballStyle}>{NumArr[5]}</div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RandomNumber;
