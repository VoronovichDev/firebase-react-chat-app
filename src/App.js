import React from 'react';

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-[##ffffff] mt-10 shadow-xl border rounded-t-3xl relative`,
};

function App() {
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}></section>
    </div>
  );
}

export default App;
