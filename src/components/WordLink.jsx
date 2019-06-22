import React, { useContext } from 'react';
import {synonymsApi} from "../config/api";
import {Store} from "../Store";

const WordLink = props => {
    const { state, dispatch } = useContext(Store);

    const handleClick = () => {
        const payload = {
            word: props.word,
            line: props.line,
            index: props.index
        };

        dispatch({ type: 'OPEN_MODAL' });
        dispatch({ type: 'UPDATE_QUERY', payload })
    };

    return(
        <a
            className="button is-text column is-pulled-left is-narrow is-thin"
            onClick={handleClick}
            style={{fontSize: '32px', fontFamily: state.font, color: 'black'}}
        >
            { `${props.word} ` }
        </a>
    )
};

export default WordLink;