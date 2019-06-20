import React from 'react';
import {synonymsApi} from "../config/api";

const WordLink = props => {

    const generateLink = word => {
        return synonymsApi + `/words?syn=${word.toLowerCase()}&max=10`
    };

    return(
        <a href={generateLink(props.word)}>{ `${props.word} ` }</a>
    )
};

export default WordLink;