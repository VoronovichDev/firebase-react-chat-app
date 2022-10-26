import React from 'react';
import { auth } from '../firebase';

const style = {
  message: `flex flex-col items-center`,
  name: `text-gray-600 text-xs w-full`,
  sent: `text-black self-end text-end float-right `,
  received: `bg-[#e5e5ea] text-black rounded-br-full`, //todo
  text: `bg-[#c8f246] max-w-[280px] whitespace-normal break-words self-end text-left shadow-xl m-2 py-4 px-3 rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl`,
  soloMessage: `flex flex-col`,
};

const Message = ({ message }) => {
  const messageClass = message.uid === auth.currentUser.uid ? `${style.sent}` : `${style.received}`;
  return (
    <div className={style.soloMessage}>
      <div className={`${style.message} ${messageClass}`}>
        <p className={style.name}>{message.name}</p>
        <span className={style.text}>{message.text}</span>
      </div>
    </div>
    //  <div>
    //    <div className={`${style.message} ${messageClass}`}>
    //      <p className={style.name}>{message.name}</p>
    //      <span className={style.text}>{message.text}</span>
    //    </div>
    //  </div>
  );
};

export default Message;
