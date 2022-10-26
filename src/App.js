import React from 'react';
import Navbar from './components/Navbar';

import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Chat from './components/Chat';

const style = {
  appContainer: `max-w-[728px] mx-auto text-center h-[90vh]`,
  sectionContainer: `flex flex-col h-full bg-zinc-200 mt-10 shadow-xl border rounded-t-3xl relative`,
};

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        <Navbar />
        {user ? <Chat /> : null}
      </section>
    </div>
  );
}

export default App;
