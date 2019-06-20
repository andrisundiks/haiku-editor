import React, { useContext } from 'react';
import {synonymsApi} from "../config/api";
import {Store} from "../Store";

const WordLink = props => {
    const { state, dispatch } = useContext(Store);

    const generateLink = () => {
        return `${synonymsApi}/words?syn=${props.word.toLowerCase()}&max=10`
    };

    const handleClick = () => {
        dispatch({ type: 'OPEN_MODAL' });
        dispatch({ type: 'UPDATE_QUERY', payload: generateLink() })
    };

    return(
        <a
            className="button is-text column is-pulled-left is-narrow"
            onClick={handleClick}
            style={{fontSize: '32px', fontFamily: 'brush', color: 'black'}}
        >
            { `${props.word} ` }
        </a>
    )
};

export default WordLink;