import React, { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
    firstLine: "",
    secondLine: "",
    thirdLine: "",

    showModal: false,
    modalQuery: '',
    font: 'brush'
};

function reducer(state, action) {
    switch (action.type) {
        case 'UPDATE_LINE':
            const line = action.payload.line;
            const value = action.payload.value;
            return { ...state, [line]: value };
        case 'OPEN_MODAL':
            return { ...state, showModal: true };
        case 'CLOSE_MODAL':
            return { ...state, showModal: false };
        case 'UPDATE_QUERY':
            return { ...state, modalQuery: action.payload };
        case 'RESET':
            return { ...state, firstLine: '', secondLine: '', thirdLine: ''};
        case 'TOGGLE_FONT':
            return { ...state, font: action.payload };
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

