import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  ballStyle: {
    border: "2px solid black",
    borderRadius: "30%",
  },
  containerStyle:{
      height:"30px",
  }
});
const numFormatter = (num) => {
  num = Number(num).toString();
  if (Number(num) < 10 && num.length == 1) num = "0" + num;
  return num;
};

const RandomNumber = () => {
  const classes = useStyles();
  const [numbers, setNumbers] = useState([]);
  const createNumber = () => {
    setNumbers([
      ...numbers,
      {
        key: numbers.length,
        value: Math.floor(Math.random() * 45) + 1,
      },
    ]);
  };

  return (
    <Grid container item xs={12} justifyContent="center" alignItems="center">
      <button onClick={createNumber}>{numbers.length + 1}번 생성하기</button>
      <Grid container item justifyContent="center" xs={6} alignItems="center">
        <Grid container item justifyContent="center" xs={12} alignItems="center">
          {numbers.map((d) => (
            <div key={d.key}>
              <Grid
                container
                item
                justifyContent="center"
                xs={12}
                alignItems="center"
              >
                <Grid
                  container
                  item
                  justifyContent="center"
                  xs={12}
                  alignItems="center"
                >
                  {d.key + 1}번
                </Grid>
                <Grid
                  continaer
                  item
                  justifyContent="center"
                  xs={8}
                  alignItems="center"
                  className={classes.ballStyle}
                >
                  {d.value}
                </Grid>
              </Grid>
            </div>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RandomNumber;

{
  /* <Grid container item justifyContent="center" xs={1} alignItems="center">
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
          <div className={classes.ballStyle}></div>
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
          <div className={classes.ballStyle}></div>
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
          <div className={classes.ballStyle}></div>
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
          <div className={classes.ballStyle}></div>
        </Grid>
      </Grid> */
}
{
  /* <Grid container item justifyContent="center" xs={1} alignItems="center">
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
          <div className={classes.ballStyle}></div>
        </Grid>
      </Grid> */



// const createNumber = () => {
//   for (var i = 0; i < 6; i++) {
//     var ranN = Math.floor(Math.random() * 45) + 1;
//     var twoN = numFormat(ranN);
//     NumArr.push(twoN);
//   }
// };
}
