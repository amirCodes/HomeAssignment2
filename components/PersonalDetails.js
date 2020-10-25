import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStylesPersonalDetail = makeStyles((theme) => ({
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
export default function PersonalDetails({ values, setFirstName, setLastName, setEmail }) {
  const classes = useStylesPersonalDetail();

  return (
    <div className={classes.root}>
      <h1>Create Your Account</h1>
      <TextField
        placeholder="Enter Your First Name"
        label="First Name"
        // onChange={handleChange('firstName')}
        onChange={(e) => setFirstName(e.target.value)}
        defaultValue={values.firstName}
        margin="normal"
        fullWidth
      />
      <br />
      <TextField
        placeholder="Enter Your Last Name"
        label="Last Name"
        // onChange={handleChange('lastName')}
        onChange={(e) => setLastName(e.target.value)}
        defaultValue={values.lastName}
        margin="normal"
        fullWidth
      />
      <br />
      <TextField
        placeholder="Enter Your Email"
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
        // onChange={handleChange('email')}
        defaultValue={values.email}
        margin="normal"
        fullWidth
      />
    </div>
  );
}