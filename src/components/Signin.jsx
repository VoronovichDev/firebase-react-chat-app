import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase';
import { FcGoogle } from 'react-icons/fc';

const style = {
  wrapper: `flex justify-start items-center mw-[240px] bg-[#4285f4] h-12 cursor-pointer hover:bg-[#2A77FA]`,
  textBtn: `text-white self-center px-4 whitespace-nowrap`,
  icon: `bg-white h-full w-12`,
};

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

const Signin = () => {
  return (
    <div onClick={googleSignIn} className={style.wrapper}>
      <FcGoogle className={style.icon} />
      <p className={style.textBtn}>Sign in</p>
    </div>
  );
};

export default Signin;
