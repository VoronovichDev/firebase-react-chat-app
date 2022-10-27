import React, { useLayoutEffect, useRef, useState } from 'react';
import { useEffect } from 'react';
import Message from './Message';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import SendMessage from './SendMessage';

const style = {
  main: `flex flex-col p-[10px] h-[80vh] gap-4 scrollbar scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-y-scroll`,
};

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const mainBlock = useRef(null);
  const scrollRef = useRef(null);
  useLayoutEffect(() => {
    mainBlock.current.scrollBy(0, mainBlock.current.clientHeight * messages.length);
  }, [messages]);

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
      <main ref={mainBlock} className={style.main}>
        {messages &&
          messages.map((message) => (
            <Message messages={messages} scrollRef={scrollRef} key={message.id} message={message} />
          ))}
      </main>
      <SendMessage />
      <span ref={scrollRef}></span>
    </>
  );
};

export default Chat;
