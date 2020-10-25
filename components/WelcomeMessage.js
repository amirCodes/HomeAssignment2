import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStylesWelcomMessage = makeStyles((theme) => ({
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
  name: {
    color:'#66cfc0'
  }
}));
  export default function WelcomeMessage({ values }) {
      const classes= useStylesWelcomMessage();
    return (
        <div className={classes.root}>
            <h1>Say Hello to <b className={classes.name}>MoneyLion</b></h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    );
  }

