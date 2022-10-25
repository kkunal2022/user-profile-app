import React from 'react';
import styles from './HelloWorld.module.css';

const HelloWorld = () => {
    return (
        <div className= {styles["header-green"]}>
            <h1>Hello World !!</h1>
            <hr/>
            <h2>Styling Summary</h2>
            <ol style={ { fontSize: "20px" } }> </ol>
            <li>Inline</li>
            <li>CSS in JS</li>
            <li>External CSS Files</li>
            <li> --- Styled Components --- </li>
            <hr />
            <h1> Props </h1>
            <p>
                A feature in React that allows 
                us to pass information between React Components
            </p>
        </div>
    );
};

// eslint-disable-next-line no-unused-vars
const headerStyle = {
    color: "white",
    backgroundColor: "black",
};

export default HelloWorld;