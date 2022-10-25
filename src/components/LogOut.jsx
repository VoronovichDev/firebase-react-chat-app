import { signOut } from 'firebase/auth';

import React from 'react';
import { auth } from '../firebase';

const style = {
  button: `bg-gray-200 px-4 py-2 rounded hover:bg-gray-100`,
};

const LogOut = () => {
  return (
    <button onClick={() => signOut(auth)} className={style.button}>
      Log out
    </button>
  );
};

export default LogOut;
