import './App.css';
import cusData from './data.json';
import { makeStyles } from '@material-ui/core/styles';
import Chart from './Components/Chart';
import Header from './Components/Header';
import { useState, useEffect } from 'react';

const useStyles = makeStyles({
  container: {
    height: '100vh',
    width: '100vw',
  },
});

function App() {
  const classes = useStyles();
  const [users, setUsers] = useState(null);
  const [userListInfo, setUserListInfo] = useState({});
  const [chosenUser, setChosenUser] = useState(0);

  function groupUserData(data) {
    let userList = {};

    for (let key of data) {
      let currName = key['Patient Name'],
        gad = ['GAD-7 Score'],
        phq = ['PHQ-9 Score'],
        date = key.Timestamp.split(' ')[0];

      if (!userList[currName]) {
        userList[currName] = {
          [gad]: {
            id: gad[0],
            color: 'hsl(231, 70%, 50%)',
            data: [{ x: date, y: key[gad] }],
          },
          [phq]: {
            id: phq[0],
            color: 'hsl(231, 70%, 50%)',
            data: [key[phq]],
          },
        };
      } else {
        userList[currName][gad].data.push({ x: date, y: key[gad] });
        userList[currName][phq].data.push({ x: date, y: key[phq] });
      }
    }

    setUsers(Object.keys(userList));
    setUserListInfo(userList);
    return userList;
  }
  useEffect(() => {
    groupUserData(cusData);
  }, []);

  const formatData = (obj) => {
    let userArr = [];

    userArr.push(obj['GAD-7 Score']);
    userArr.push(obj['PHQ-9 Score']);

    return userArr;
  };

  if (users) formatData(userListInfo[users[chosenUser]]);

  return (
    <div className={classes.container}>
      <Header />
      {users && <h2>Current User: {users[chosenUser]}</h2>}

      <div style={{ width: 900, height: 600 }}>
        <Chart newData={formatData(userListInfo[users[2]])} />
      </div>
    </div>
  );
}

export default App;
