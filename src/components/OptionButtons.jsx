import React, { useContext } from 'react';
import {Store} from "../Store";


const OptionButtons = () => {
    const { state, dispatch } = useContext(Store);

    const handleResetClick = () => {
        dispatch({ type: 'RESET' })
    };

    const handleFontClick = () => {
        const font = state.font === 'brush' ? 'lato' : 'brush';
        dispatch({ type: 'TOGGLE_FONT', payload: font });
    };

    const handleCopyClick = () => {
        const haikuText = formatHaiku();
        navigator.clipboard.writeText(haikuText)
            .then(() => alert('Copied the text: \n' + haikuText))
            .catch(err => console.log(err));

    };

    const formatHaiku = () => {
        return `${state.firstLine}\n${state.secondLine}\n${state.thirdLine}`;
    };

    return (
        <div className="buttons">
            <button
                className="button is-success"
                onClick={handleCopyClick}
            >
                Copy
            </button>
            <button
                className="button is-info"
                onClick={handleFontClick}
            >
                Font
            </button>
            <button
                className="button is-danger"
                onClick={handleResetClick}
            >
                Reset
            </button>
        </div>
    )
};

export default OptionButtons;