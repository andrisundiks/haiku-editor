import React, {useContext} from 'react';
import WordLink from './WordLink';

import {Store} from "../Store";
import syllable from "syllable";

const HaikuOutput = () => {
    const {state} = useContext(Store);

    const formatLine = line => {
        return line.split(' ').map(word => {
            return (
                <div>
                    <section>
                        <WordLink word={word} />
                        <div
                            style={{fontSize: '18px', fontFamily: 'brush', color: 'black', marginTop: '-10px'}}
                        >
                            {syllable(word) ? syllable(word) : ''}
                        </div>
                    </section>
                </div>
            )
        })
    };

    const totalLineSyllables = line => {
        return line ? "  " + syllable(line) : '';
    };

    const lineDetails = {
        first: {
            total: totalLineSyllables(state.firstLine),
            color: parseInt(totalLineSyllables(state.firstLine)) === 5 ? 'green' : 'red'
        },
        second: {
            total: totalLineSyllables(state.secondLine),
            color: parseInt(totalLineSyllables(state.secondLine)) === 7 ? 'green' : 'red'
        },
        third: {
            total: totalLineSyllables(state.thirdLine),
            color: parseInt(totalLineSyllables(state.thirdLine)) === 5 ? 'green' : 'red'
        }
    };

    return (
            <section>
                <div className="columns">
                        {formatLine(state.firstLine)}
                    <div
                        style={{fontSize: '32px', fontFamily: 'brush', color: lineDetails.first.color, justifyContent: 'space-between'}}
                        className="column is-narrow is-pulled-left"
                    >
                        {lineDetails.first.total}
                    </div>
                </div>

                <div className="columns">
                    {formatLine(state.secondLine)}
                    <div
                        style={{fontSize: '32px', fontFamily: 'brush', color: lineDetails.second.color, justifyContent: 'space-between'}}
                        className="column is-narrow is-pulled-left"
                    >
                        {lineDetails.second.total}
                    </div>
                </div>

                <div className="columns">
                    {formatLine(state.thirdLine)}
                    <div
                        style={{fontSize: '32px', fontFamily: 'brush', color: lineDetails.third.color, justifyContent: 'space-between'}}
                        className="column is-narrow is-pulled-left"
                    >
                        {lineDetails.third.total}
                    </div>
                </div>
            </section>
)
};

export default HaikuOutput;