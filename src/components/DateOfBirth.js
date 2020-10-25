import React from 'react';
import { ThemeProvider as MuiThemeProvider, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStylesDOB = makeStyles((theme) => ({
  root: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto 10px 10px 5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    marginRight: theme.spacing(1),
    color: '#66cfc0'
  },
  TextField: {
    width: '60%',
  },
}));
export default function DateOfBirth({ values, setDOB }) {
  const classes = useStylesDOB()
  return (
    <div className={classes.root}>
      <h1>What's Your Date Of Birth</h1>
      <TextField type="date" onChange={(e) => setDOB(e.target.value)} />
    </div >
  );
}