import React, { useState, useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import StarIcon from '@mui/icons-material/Star';


const useStyles = makeStyles({
  ballStyle: {
    border: "2px solid black",
    borderRadius: "50%",
    background: "yellow",
    width:"15px"
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
  const [rows, setRows] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [price, setPrice] = useState("");
  const match = useMediaQuery("(max-width : 600px)");
  const numbers_ref = useRef([]);
  const price_ref = useRef("");

  const getValue = async () => {
    const value = await axios.get(setPrice());
  };

  // useEffect(() => {
    
  
  // }, []);


  const numFormatter = () => {
    var num = Math.floor(Math.random() * 45) + 1;
    num = Number(num).toString();
    if (Number(num) < 10 && num.length == 1) num = "0" + num;
    return num;
  };

  const hiddenClick = () => {
    //값을 선택하지 않았을 경우
    if(!price){
      alert("금액을 선택해 주세요!");
    }
    else{
      const loop = setInterval(() => {
        numbers_ref.current.push({
          key: numbers_ref.current.length +1,
          value: numFormatter(),
        });
        setNumbers([...numbers_ref.current])
        if (numbers_ref.current.length == 6 * price) {
          console.log(numbers)
          clearInterval(loop);
        }
      }, 500);
      setHidden(false)
    }
  };
  const hiddenFalseClick = () => {
    setHidden(true);
    setNumbers([]);
    numbers_ref.current= [];
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
          <Grid container item justifyContent="center" alignContent="center">
            <FormControl style={{ width: "200px" }}>
              <InputLabel>금액을 선택하세요!</InputLabel>
              <Select onChange={checkPrice} value={price}>
                <MenuItem value={1}>1,000원</MenuItem>
                <MenuItem value={2}>2,000원</MenuItem>
                <MenuItem value={3}>3,000원</MenuItem>
                <MenuItem value={4}>4,000원</MenuItem>
                <MenuItem value={5}>5,000원</MenuItem>
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
            style={{borderBottom:'2px solid black', marginBottom:'40px'}}
          >
            {/* <Button variant="contained" onClick={createNumber}>
              번호 생성하기
            </Button> */}
          </Grid>
          <Grid
            container
            item
            justifyContent="center"
            xs={9}
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
                    {d.key > 6 ? ((d.key % 6) == 0 ? 6 : (d.key % 6)): d.key } 번
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
              style={{ marginTop: "3%" }}
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
            xs={12}
            alignItems="center"
            style={{borderTop:'2px solid black', marginTop:'30px'}}
          >
            <Grid container item justifyContent='center' xs={12} alignItems="center">
              
              </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default RandomNumber;
