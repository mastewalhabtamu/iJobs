import React, {Fragment, Component} from 'react';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import {green} from '@material-ui/core/colors';
import classes from './Form.module.css'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css/'

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

class Register extends Component {
    state = {
        'fname': '',
        'lname': '',
        'email': 0,
        'phone': 0,
        postSuccess: false
    };

    handleSubmit = () => {
        const user = {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            phone: this.state.phone
        }
        axios.post('https://gcelab-235621.firebaseio.com/user.json', user)
            .then(response => {
                this.setState({postSuccess: true})
                this.props.history.goBack()
            });
    }


    render() {
        return (
            <Fragment>
                <div className={classes.Content}>
                    <ThemeProvider theme={theme}>
                        <Typography className={classes.Right} variant="h3" component="h2">
                            Create an Account
                        </Typography>
                        <div className={classes.Input}>
                            <TextField
                                value={this.state.fname}
                                onChange={(event) => this.setState({vegName: event.target.value})}
                                label="First Name"
                                variant="outlined"
                                id="mui-theme-provider-outlined-input"
                            />
                        </div>
                        <div className={classes.Input}>
                            <TextField
                                value={this.state.lname}
                                onChange={(event) => this.setState({upperPrice: event.target.value})}
                                label="Last Name"
                                type="text"
                                variant="outlined"
                                id="mui-theme-provider-outlined-input"
                            />
                        </div>
                        <div className={classes.Input}>
                            <TextField
                                value={this.state.email}
                                onChange={(event) => this.setState({lowerPrice: event.target.value})}
                                label="Email"
                                type="text"
                                variant="outlined"
                                id="mui-theme-provider-outlined-input"
                            />
                        </div>
                        <div className={classes.Right}>
                            <div className={classes.Input}>
                                <TextField
                                    value={this.state.phone}
                                    onChange={(event) => this.setState({marketPlace: event.target.value})}
                                    label="Phone"
                                    variant="outlined"
                                    id="mui-theme-provider-outlined-input"
                                />
                            </div>
                        </div>
                    </ThemeProvider>
                </div>
                <div style={{marginLeft: '50%', marginTop: '-70px'}}>
                    <Button onClick={this.handleSubmit} variant="contained">
                        Submit
                    </Button>
                </div>
                <div className={classes.Alert}>
                    <div style={{display: this.state.postSuccess ? 'block' : 'none'}}>
                        <div class="alert alert-success" role="alert">Successful!!</div>
                    </div>
                    <div style={{
                        display: !this.state.postSuccess ? 'block' : 'none',
                        marginLeft: '40px'
                    }}>
                        <div class="alert alert-danger" role="alert">Sorry, try again!!</div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default Register