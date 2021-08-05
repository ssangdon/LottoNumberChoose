import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Image from "next/image";
import LottoImg from "../public/Lotto.jpeg";

const useStyles = makeStyles({
  layoutBlock: {
    position: "relative",
    border: "1px solid white",
    backgroundColor: "white",
    borderRadius: "16px",
    width: "720px",
    height: "400px",
    boxShadow: "0 0 8px 0 rgba(0, 0 ,0, 0.04)",
    marginTop: "96px",
    marginBottom: "32px",
    display: "flex",
    flexDirection: "column",
  },
  imgStyle:{
    marginTop:"23px",
  }
});


const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid container item xs={12}>
      <Grid className={classes.layoutBlock}>
        <Image width={385} height={131} src={LottoImg} alt="Picture of Lotto" />
        {children}
      </Grid>
      ;
    </Grid>
  );
};

export default Layout;
