import React from 'react';
import Signin from './Signin';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import LogOut from './LogOut';

const style = {
  nav: `bg-[#000000] h-20 flex justify-between items-center p-4 rounded-t-3xl gap-2`,
  heading: `text-white text-xl font-bold sm:text-3xl`,
};

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Friendly Chat</h1>
      {user ? <LogOut /> : <Signin />}
    </div>
  );
};

export default Navbar;
