import React, {useContext, useState, useEffect} from 'react';
import {Store} from "../Store";
import syllable from "syllable";
import axios from "axios";
import {synonymsApi} from "../config/api";

const ModalBody = () => {
    const { state, dispatch } = useContext(Store);
    const [wordList, setWordList] = useState([]);

    // Once the component is mounted calls the API and sets the list accordingly.
    // The empty array at the end are the inputs. Empty means only run once.
    useEffect(() => {
        getSynonyms(state.modalQuery.word);
    }, []);

    const getSynonyms = async () => {
        await axios.get(generateLink(state.modalQuery.word))
            .then(res => {
                setWordList(res.data.map( item => {
                    return (
                        <div className="buttons is-centered">
                            <button
                                className="button is-text"
                            >{`${item.word} ${syllable(item.word)}`}</button>
                        </div>
                    )
                }))
            })
            .catch();
    };

    const generateLink = word => {
        return `${synonymsApi}words?rel_syn=${word.toLowerCase()}&max=10`
    };

    const handleCloseClick = () => {
        dispatch({ type: 'CLOSE_MODAL' });
    };

    return (
        <div>
            {wordList}
            <button
                onClick={handleCloseClick}
                className="button"
            > Close </button>
        </div>
    )
};

export default ModalBody;