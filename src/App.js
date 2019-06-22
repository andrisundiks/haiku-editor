import React, {useContext} from 'react';
import {BrowserRouter} from "react-router-dom";
import Hero from "./components/Hero";
import {Store} from "./Store";

import './App.css';
import Modal from "react-modal";
import ModalBody from "./components/ModalBody";

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

function App() {
    const {state} = useContext(Store);

    return (
        <BrowserRouter>
            <div className="App">
                <Hero/>
                <Modal
                    isOpen={state.showModal}
                    contentLabel="Testing..."
                    style={modalStyles}
                    appElement={document.getElementById('root')}
                >
                    <ModalBody/>
                </Modal>
            </div>
        </BrowserRouter>
    );
}

export default App;
