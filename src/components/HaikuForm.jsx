import React, { useContext } from 'react';
import {Store} from "../Store";

const HaikuForm = () => {
    const {state, dispatch} = useContext(Store);

    const handleChange = e => {
        console.log(e.target);
        dispatch({ type: e.target.name, payload: e.target.value })
    };

    return(
        <section>
            <input className="input"
                   type="text"
                   placeholder="First line (5 syllables)"
                   name="UPDATE_FIRST"
                   value={state.firstLine}
                   onChange={handleChange}
            />
            <br/><br/>
            <input className="input"
                   type="text"
                   placeholder="Second line (7 syllables)"
                   name="UPDATE_SECOND"
                   value={state.secondLine}
                   onChange={handleChange}
            />
            <br/><br/>
            <input className="input"
                   type="text"
                   placeholder="Text input (5 syllable)"
                   name="UPDATE_THIRD"
                   value={state.thirdLine}
                   onChange={handleChange}
            />
        </section>
    )
};

export default HaikuForm;