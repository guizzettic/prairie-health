import './App.css';
import cusData from './data.json';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Components/Header';
import { useState, useEffect } from 'react';
import { Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';
import Chart from './Components/Chart';

const useStyles = makeStyles({
  container: {
    height: '100vh',
    width: '100vw',
  },
  userSection: {
    display: 'flex',
    width: '50%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 80,
  },
  form: { width: 110 },
  chart: {
    width: '93%',
    height: '70%',
    margin: 'auto auto',
  },
});

function App() {
  const classes = useStyles();
  const [users, setUsers] = useState(null);
  const [userListInfo, setUserListInfo] = useState({});
  const [chosenUser, setChosenUser] = useState(users ? users[0] : null);

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
    return [obj['GAD-7 Score'], obj['PHQ-9 Score']];
  };

  const handleChange = (e) => {
    setChosenUser(e.target.value);
  };

  return (
    <div className={classes.container}>
      <Header />

      {users && (
        <div className={classes.userSection}>
          <h3>Current User: {chosenUser}</h3>
          <FormControl className={classes.form}>
            <InputLabel>Change User</InputLabel>
            <Select
              value={chosenUser}
              label="Change User"
              onChange={handleChange}
            >
              {users.map((user) => (
                <MenuItem value={user} key={user}>
                  {user}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      )}

      {chosenUser && (
        <div className={classes.chart}>
          <Chart chartData={formatData(userListInfo[chosenUser])} />
        </div>
      )}
    </div>
  );
}

export default App;
