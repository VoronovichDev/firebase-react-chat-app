import React from 'react';

const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  name: `absolute mt-[-4rem] text-gray-600 text-xs`,
};

const Message = () => {
  return (
    <div>
      <div className={style.message}>
        <p className={style.name}>Alexander</p>
        <p>Chek out this firebase chat!</p>
      </div>
      <div className={style.message}>
        <p className={style.name}>Alexander</p>
        <p>Chek out this firebase chat!</p>
      </div>
      <div className={style.message}>
        <p className={style.name}>Alexander</p>
        <p>Chek out this firebase chat!</p>
      </div>
    </div>
  );
};

export default Message;
