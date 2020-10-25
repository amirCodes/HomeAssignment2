import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStylesAgreement = makeStyles((theme) => ({
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
export default function Agreements({ values, setAgreement1, setAgreement2 }) {
const classes =useStylesAgreement();
// console.log(values)
  return (
    <div className={classes.root}>
      <h1>One Last STEP!</h1>
      <FormControlLabel
        control={<Checkbox name="agreement1"
          onChange={(e) => setAgreement1(e.target.value)}
          value={values.agreement1} />}
        label="I agrree to the "
      />
      <FormLabel component="legend" color="66cfc0">Electronic Transaction Esign Consent</FormLabel>

      <FormControlLabel
        control={<Checkbox name="agreement2" 
        onChange={(e) => setAgreement2(e.target.value)}
        value={values.agreement2} />}
        label="I agrree to the folowing agreements:"
      />
      <FormLabel component="legend" color="66cfc0"><span style={{ color: "66cfc0" }}>Privacy Notice</span></FormLabel>
      <FormLabel component="legend">Terms and Conditions</FormLabel>
      <FormLabel component="legend">Membership Agreement</FormLabel>

    </div>
  )
}
