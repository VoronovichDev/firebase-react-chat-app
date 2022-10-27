import React from 'react';
import { auth } from '../firebase';

const style = {
  message: `flex flex-col items-center`,
  nameReceived: `text-gray-600 text-xs w-full pl-4`,
  nameSent: `text-gray-600 text-xs w-full pr-4`,
  sent: `text-black self-end text-end float-left `,
  received: `text-black self-start text-start float-right`,
  textSent: `bg-[#c8f246] max-w-[280px] whitespace-normal break-words self-end text-left shadow-xl m-2 py-4 px-3 rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl`,
  textReceived: `bg-[#fff] max-w-[280px] whitespace-normal break-words self-start text-left shadow-xl m-2 py-4 px-3 rounded-br-2xl rounded-tr-2xl rounded-tl-2xl`,
  soloMessage: `flex flex-col`,
};

const Message = ({ message }) => {
  const messageClass = message.uid === auth.currentUser.uid ? `${style.sent}` : `${style.received}`;
  const nameClass =
    message.uid === auth.currentUser.uid ? `${style.nameSent}` : `${style.nameReceived}`;
  const textClass =
    message.uid === auth.currentUser.uid ? `${style.textSent}` : `${style.textReceived}`;
  return (
    <div className={style.soloMessage}>
      <div className={`${style.message} ${messageClass}`}>
        <p className={nameClass}>{message.name}</p>
        <span className={textClass}>{message.text}</span>
      </div>
    </div>
  );
};

export default Message;
