import React from 'react';
import './Login.css'
import { Button } from '@mui/material';

function Login() {
    const signIn =() =>{
        //sign in stuff

    };

  return (
  <div className='login'>
      <div className='login__logo'>
          <img
          src='https://www.pngarts.com/files/10/Facebook-Logo-PNG-Image-Background.png'
          alt='' />
          <img 
          className='logo__name'
          src='https://ctm.nl/wp-content/uploads/2021/06/1280px-Facebook_Logo_2019.svg_.png'
          alt='' />
      </div>
      <Button type="submit" onClick={signIn}>
          Sign in
      </Button>
    

  </div>
  );
}

export default Login;
