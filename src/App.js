import './App.css';
import data from './data.json';
import { makeStyles } from '@material-ui/core/styles';
import Chart from './Components/Chart';
console.log(data);

const useStyles = makeStyles({
  container: {
    height: '100vh',
    width: '100vw',
  },
  header: {
    height: 100,
    backgroundColor: 'green',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: '24px',
    color: 'white',
    fontWeight: 700,
    letterSpacing: 2,
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.header}>Mental Health Progress</div>
      {/* HELLO */}
      {/* <div style={{ width: 900, height: 600 }}> */}
      <Chart data={data} />
      {/* </div> */}
    </div>
  );
}

export default App;
