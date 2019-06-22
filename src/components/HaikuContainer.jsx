import React from 'react';
import HaikuForm from "./HaikuForm";
import HaikuOutput from "./HaikuOutput";

const HaikuContainer = () => {
    return(
        <div className="columns">
            <div className="column">
                <HaikuForm/>
            </div>
            <div className="column is-two-thirds">
                <article className="message" style={{ backgroundColor: "rgba(250, 250, 250, 0.6)", height: '234px' }}>
                    <div className="message-body">
                        <HaikuOutput />
                    </div>
                </article>
                <h2 className="subtitle">
                    #
                </h2>
            </div>
        </div>
    )
};

export default HaikuContainer;