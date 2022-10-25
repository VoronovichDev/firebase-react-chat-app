import React from 'react';

const style = {
  nav: `bg-[#000000] h-20 flex justify-between items-center p-4 rounded-t-3xl`,
  heading: `text-white text-3xl font-bold`,
};

const Navbar = () => {
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Friendly Chat</h1>
    </div>
  );
};

export default Navbar;
