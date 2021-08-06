import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles({
  ballStyle: {
    border: "2px solid black",
    borderRadius: "30%",
  },
  mobileContainerStyle: {
    height: "30px",
    width: "100%",
    position: "relative",
  },
  pcContainerStyle: {
    height: "30px",
    width: "100%",
    position: "relative",
  },
});

const RandomNumber = () => {
  const classes = useStyles();
  const [hidden, setHidden] = useState(true);
  const [numbers, setNumbers] = useState([]);
  const [price, setPrice] = useState("");
  const match = useMediaQuery("(max-width : 600px)");

  const createNumber = () => {
    setNumbers([
      ...numbers,
      {
        key: numbers.length,
        value: numFormatter(),
      },
    ]);
    if (numbers.length > 5) {
      alert("6자리를 초과할수 없습니다! 다시 생성해 주세요!");
      setNumbers([]);
    }
  };
  const hiddenClick = () => {
    setHidden(false);
  };

  const hiddenFalseClick = () => {
    setHidden(true);
    setNumbers([]);
  };
  const numFormatter = () => {
    var num = Math.floor(Math.random() * 45) + 1;
    num = Number(num).toString();
    if (Number(num) < 10 && num.length == 1) num = "0" + num;
    return num;
  };
  const checkPrice = (e) => {
    setPrice(e.target.value);
  };

  return (
    <Grid
      className={
        match ? classes.mobileContainerStyle : classes.pcContainerStyle
      }
      container
      item
      xs={12}
      justifyContent="center"
      alignItems="center"
    >
      {hidden ? (
        <Grid
          style={{ marginBottom: "40%" }}
          container
          item
          justifyContent="center"
          alignContent="center"
        >
          <Grid container item justifyContent="center" alignContent="center">
            <h1> 로또 번호 추첨기</h1>
          </Grid>
          <div></div>
          <Grid container item justifyContent="center" alignContent="center">
            <FormControl style={{ width: "200px" }}>
              <InputLabel>금액을 선택하세요!</InputLabel>
              <Select onChange={checkPrice} value={price}>
                <MenuItem value={"1000"}>1,000원</MenuItem>
                <MenuItem value={"2000"}>2,000원</MenuItem>
                <MenuItem value={"3000"}>3,000원</MenuItem>
                <MenuItem value={"4000"}>4,000원</MenuItem>
                <MenuItem value={"5000"}>5,000원</MenuItem>
              </Select>
              <Button variant="contained" onClick={hiddenClick}>
                번호 생성하러 가기
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      ) : (
        <Grid
          style={{ marginBottom: "70%" }}
          container
          item
          alignItems="center"
          justifyContent="center"
          xs={12}
        >
          <Grid
            container
            item
            xs={12}
            justifyContent="center"
            alignItems="center"
          >
            <Button variant="contained" onClick={createNumber}>
              번호 생성하기
            </Button>
          </Grid>
          <Grid
            container
            item
            justifyContent="center"
            xs={12}
            alignItems="center"
          >
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
                    container
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
          <Grid
            container
            item
            xs={12}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              style={{ marginTop: "20%" }}
              variant="contained"
              onClick={hiddenFalseClick}
            >
              뒤로가기
            </Button>
          </Grid>

          <Grid
            container
            item
            justifyContent="center"
            xs={6}
            alignItems="center"
          ></Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default RandomNumber;
