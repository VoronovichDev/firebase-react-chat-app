import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { useRef } from 'react';
import { auth, db } from '../firebase';

const style = {
  form: `h-14 w-full max-w-[728px] flex text-xl absolute bottom-0`,
  input: `w-full text-xl p-3 bg-black text-white outline-none border-none`,
  button: `w-[20%] bg-sky-300`,
  emptyMessage: ` bg-red-300 placeholder:text-slate-600`,
};

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === '') {
      inputRef.current.placeholder = 'please, write something';
      inputRef.current.className += style.emptyMessage;
      console.log(inputRef.current);
      return;
    }
    inputRef.current.placeholder = 'type a message...';
    inputRef.current.className = style.input;
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, 'messages'), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput('');
    scroll.current.scrollIntoView({ behavior: 'smooth' });
  };

  const onInputChange = (e) => {
    setInput(
      e.target.value,
      (inputRef.current.className = style.input),
      (inputRef.current.placeholder = 'type a message...'),
    );
  };

  return (
    <form onSubmit={sendMessage} className={style.form}>
      <input
        ref={inputRef}
        value={input}
        onChange={onInputChange}
        className={style.input}
        type="text"
        placeholder="type a message..."
      />
      <button type="submit" className={style.button}>
        Send
      </button>
    </form>
  );
};

export default SendMessage;
