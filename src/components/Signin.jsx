import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import React from 'react';
import GoogleButton from 'react-google-button';
import { auth } from '../firebase';

const style = {
  wrapper: `flex justify-center w-32 sm:w-[240px]`,
};

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

const Signin = () => {
  return (
    <div className={style.wrapper}>
      <GoogleButton className={style.button} />
    </div>
  );
};

export default Signin;
