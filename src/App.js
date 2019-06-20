import React, { useContext } from 'react';
import ReactModal from 'react-modal';
import Hero from "./components/Hero";
import {Store} from "./Store";

import './App.css';

function App() {
    const {state, dispatch} = useContext(Store);

  return (
    <div className="App">
        <Hero />
        <ReactModal
            isOpen={state.showModal}
            contentLabel="Testing..."
        >
            <button onClick={() => { dispatch({ type: 'CLOSE_MODAL' }) } }> Close Modal </button>
        </ReactModal>
    </div>
  );
}

export default App;
