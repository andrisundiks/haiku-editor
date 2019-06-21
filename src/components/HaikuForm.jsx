import React, { useContext } from 'react';
import {Store} from "../Store";
import OptionButtons from "./OptionButtons";

const HaikuForm = () => {
    const {state, dispatch} = useContext(Store);

    const handleChange = e => {
        dispatch({
            type: 'UPDATE_LINE',
            payload: {
                value: e.target.value,
                line: e.target.name
            }
        })
    };

    return(
        <section>
            <input className="input"
                   type="text"
                   placeholder="First line (5 syllables)"
                   name="firstLine"
                   value={state.firstLine}
                   onChange={handleChange}
            />
            <br/><br/>
            <input className="input"
                   type="text"
                   placeholder="Second line (7 syllables)"
                   name="secondLine"
                   value={state.secondLine}
                   onChange={handleChange}
            />
            <br/><br/>
            <input className="input"
                   type="text"
                   placeholder="Text input (5 syllable)"
                   name="thirdLine"
                   value={state.thirdLine}
                   onChange={handleChange}
            />

            <br/><br/>

            <OptionButtons />
        </section>
    )
};

export default HaikuForm;