import React from 'react';
import Signin from './Signin';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const style = {
  nav: `bg-[#000000] h-20 flex justify-between items-center p-4 rounded-t-3xl`,
  heading: `text-white text-3xl font-bold`,
};

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Friendly Chat</h1>
      <Signin />
    </div>
  );
};

export default Navbar;
