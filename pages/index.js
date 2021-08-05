import Layout from "../components/Layout";
import {makeStyles} from '@material-ui/core/styles';
import RandomNumber from "../components/RandomNumber";
import Grid from '@material-ui/core/Grid';



const Index = () => {
  return (
    <div>
      <Layout>
          <RandomNumber />
      </Layout>
    </div>

  );
};


export default Index;
