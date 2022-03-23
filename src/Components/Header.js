import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    height: 100,
    backgroundColor: 'rgb(80, 114, 104)',
    color: 'white',
    fontWeight: 700,
    letterSpacing: 2,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: '24px',
  },
  subTitle: {
    textAlign: 'center',
    fontSize: '18px',
    marginTop: -5,
  },
});

const Header = ({}) => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <h1 className={classes.title}>Prairie Health Progress</h1>
      <h2 className={classes.subTitle}>
        Keep track of how your Progress is trending
      </h2>
    </div>
  );
};
export default Header;
