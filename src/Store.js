import React, { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
    firstLine: "",
    secondLine: "",
    thirdLine: "",

    showModal: false,
    modalQuery: ''
};

function reducer(state, action) {
    switch (action.type) {
        case 'UPDATE_FIRST':
            return { ...state, firstLine: action.payload };
        case 'UPDATE_SECOND':
            return { ...state, secondLine: action.payload };
        case 'UPDATE_THIRD':
            return { ...state, thirdLine: action.payload };
        case 'OPEN_MODAL':
            return { ...state, showModal: true };
        case 'CLOSE_MODAL':
            return { ...state, showModal: false };
        case 'UPDATE_QUERY':
            return { ...state, modalQuery: action.payload };
        default:
            return state;
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };

    return (
        <Store.Provider value={value}>
            { props.children }
        </Store.Provider>
    )
}

