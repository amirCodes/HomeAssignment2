
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import WelcomeMessage from './WelcomeMessage';
import PersonalDetails from './PersonalDetails';
import Agreements from './Agreements';
import DateOfBirth from './DateOfBirth';
import Logo from './MoneyLionLogo';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
        color: '#66cfc0'
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    createAcountDiv: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto 10px 10px 5%',
        justifyContent: 'center',
        alignItems: 'center',
    }

}));
function getSteps() {
    // if we do not want to display any text just leave it blang
   // return ['', '', '', '']
    // here if we want to display text with steper numbering 
    return ['welcome', 'user details','date of birth','agreements']
    //return ['SAY HELLO TO MONEYLION', 'CREATE YOUR ACCOUNT', 'WHAT IS YOUR DATE OF BIRTH', 'ONE LAST STEP!'];
}
export default function UserForm() {
    const classes = useStyles();
    // declare our intial stats using react hooks
    const [activeStep, setActiveStep] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [DOB, setDOB] = useState('');
    const [agreement1, setAgreement1] = useState(false);
    const [agreement2, setAgreement2] = useState(false);

    const steps = getSteps(); // get the steps function inside the stepper component

    // assign/destructure all state values to a variable called values and then we can pass it to any childe components as props 
    const values = { firstName, lastName, email, DOB, agreement1, agreement2 }

    // Handle next button to move the next form/component/step
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    // Handle back button to move the previous form/component/step
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // we can restet the steps by call this fun while i'm not using here
    const handleReset = () => {
        setActiveStep(0);
    };

    // Handle fields change and user input 
    const handleChange = input => e => {
        const checked = e.target.checked;
        // console.log(checked)
        this.setState({ [input]: e.target.value });
        // check if checkbox is checked asign it to true
        if (e.target.name === 'agreement1' && checked) {
            setAgreement1({ agreement1: true })
        }
        if (e.target.name === 'agreement2' && checked) {
            setAgreement2({ agreement2: true })
        }
    };


    // Here we will post the user data using the the endpoint << user >>
    const createAcoount = () => {
        fetch('https://5f79819fe402340016f93139.mockapi.io/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then(response => response.json())
            .then(values => {
                console.log('Success:', values); // for testing i will just display a console success message here
            })
            .catch((error) => {
                console.error('Error:', error); // get the error message if post faild
            });
        // here we realod and set the step state to 0 for resume and ready for new application
        setTimeout(reLoadApp, 6000);

    }
    function reLoadApp(){
        window.location.reload();

    }
    function getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (
                    <WelcomeMessage />
                );
            case 1:
                return (
                    <PersonalDetails
                        handleChange={handleChange}
                        values={values}
                        setFirstName={setFirstName}
                        setLastName={setLastName}
                        setEmail={setEmail}
                    />
                );
            case 2:
                return (
                    <DateOfBirth
                        values={values}
                        setDOB={setDOB}
                    />);
            case 3:
                return (
                    <Agreements
                        values={values}
                        setAgreement1={setAgreement1}
                        setAgreement2={setAgreement2}

                    />);
            default:
                return 'Unknown stepIndex';
        }
    }
    return (
        <div className={classes.root}>
            <Logo />
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div className={classes.createAcountDiv}>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button variant="contained" color="primary" onClick={createAcoount}>Agree & Create Account</Button>
                    </div>
                ) : (
                        <div>
                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                            <div style={{ float: 'right', marginRight: '25%' }}>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.backButton}
                                >Back</Button>
                                <Button variant="contained" color="primary" onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}
