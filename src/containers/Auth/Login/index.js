import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import * as actions from '../../../store/actions';
import { Box, TextField } from '@mui/material';
import './style.scss';
import { Button } from 'reactstrap';
import google from './img/google.png';
import facebook from './img/facebook.png';

const style = {
  width: 400,
  //   height: 400,
  backgroundColor: '#fff',
  borderRadius: 15,
  boxShadow: '4px 4px 6px #000',
  display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  flexDirection: 'column',
  padding: '30px 24px',
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.btnLogin = React.createRef();
  }

  render() {
    return (
      <div className='login-screen'>
        <div className='bgr-login'>
          <Box sx={style}>
            <div className='login-title'>Login</div>
            <Box
              component='form'
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <TextField
                id='username'
                label='User name'
                variant='outlined'
                fullWidth
                className='text-field-item'
              />
              <TextField
                id='password'
                label='Password'
                variant='outlined'
                fullWidth
              />
            </Box>
            <div className='forgotPassword'>Forgot password?</div>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <Button size='large' className='login-button'>
                LogIn
              </Button>
              <div className='other-login'>--Or login with--</div>
              <div className='social-network'>
                <div className='social-google'>
                  <img alt='gg' src={google} width={24} height={24} />
                </div>
                <div>
                  <img alt='gg' src={facebook} width={24} height={24} />
                </div>
              </div>

              <div className='route-signup-block'>
                Don't have an account?{' '}
                <span className='route-signup'>Sign up</span>
              </div>
            </Box>
          </Box>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
