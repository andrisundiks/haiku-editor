import React from 'react';

const About = () => {

    return (
        <article className="message">
            <div className="message-body has-text-left">
                Whenever I'm trying to make up haikus I tend to get distracted by the act of counting syllables. I don't know what it is, but I always seem entranced by the movement of my own fingers, to the point I forget why the haiku was apposite in the first place. This app solves this problem. Ok, yeah, that's bullshit, but I needed a fun idea for a small project testing Reacts exciting 2019 features and this seemed perfect for that.
                <br/>
                <br/>
                In this case the objective was to use the Context API to recreate a Redux structure only using hooks through the use of a central Store. Never worry about drilling props around whilst breaking stuff again! Fearless refactoring.
                <br/><br/>
                Another objective was to use purely functional components, since the new hooks make classes largely redundant. Despite this, there are instances where I used the 'useState' hook in a way that is almost identical to a more traditional class component (for instance when the data stored was only relevant to that particular component, as to not saturate the reducer with banal calls).
                <br/><br/>
                Overall my impression is that React keeps getting more and more fun as it removes the most tedious and mind-numbing boilerplate in favour of agile, simple solutions, and now that we can simplify the use of Redux writing code becomes a blast.
            </div>
        </article>
    )
};

export default About;