import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import Message from './Message';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import SendMessage from './SendMessage';

const style = {
  main: `flex flex-col p-[10px] h-[80vh] gap-4 overflow-y-auto`,
};

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnaphot) => {
      let messages = [];
      querySnaphot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);
  return (
    <>
      <main className={style.main}>
        {messages && messages.map((message) => <Message key={message.id} message={message} />)}
      </main>
      <SendMessage />
    </>
  );
};

export default Chat;
