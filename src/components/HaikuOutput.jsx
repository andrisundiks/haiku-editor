import React, {useContext} from 'react';
import {Store} from "../Store";
import {countWordSyllables, totalLineSyllables} from "../helpers/formatting";

const HaikuOutput = () => {
    const {state} = useContext(Store);

    const firstLine = {
        text: countWordSyllables(state.firstLine),
        total: totalLineSyllables(state.firstLine),
        color: parseInt(totalLineSyllables(state.firstLine)) === 5 ? 'green' : 'red'
    };
    const secondLine = {
        text: countWordSyllables(state.secondLine),
        total: totalLineSyllables(state.secondLine),
        color: parseInt(totalLineSyllables(state.secondLine)) === 7 ? 'green' : 'red'
    };
    const thirdLine = {
        text: countWordSyllables(state.thirdLine),
        total: totalLineSyllables(state.thirdLine),
        color: parseInt(totalLineSyllables(state.thirdLine)) === 5 ? 'green' : 'red'
    };

    return (
            <section>
                <div className="columns">
                    <div
                        style={{fontSize: '32px', fontFamily: 'brush', color: 'black'}}
                        className="column is-11"
                    >
                        {firstLine.text}
                    </div>
                    <div
                        style={{fontSize: '32px', fontFamily: 'brush', color: firstLine.color, justifyContent: 'space-between'}}
                        className="column"
                    >
                        {firstLine.total}
                    </div>
                </div>

                <div className="columns">
                    <div
                        style={{fontSize: '32px', fontFamily: 'brush', color: 'black'}}
                        className="column is-11"
                    >
                        {secondLine.text}
                    </div>
                    <div
                        style={{fontSize: '32px', fontFamily: 'brush', color: secondLine.color}}
                        className="column"
                    >
                        {secondLine.total}
                    </div>
                </div>

                <div className="columns">
                    <div
                        style={{fontSize: '32px', fontFamily: 'brush', color: 'black'}}
                        className="column is-11"
                    >
                        {thirdLine.text}
                    </div>
                    <div
                        style={{fontSize: '32px', fontFamily: 'brush', color: thirdLine.color}}
                        className="column"
                    >
                        {thirdLine.total}
                    </div>
                </div>
            </section>
)
};

export default HaikuOutput;