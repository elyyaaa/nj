import React from 'react';

const Person = ({name,zodiacSign}) => {
    return (
        <>
            <h1>WELCOME!</h1>
            <p>name: {name}</p>
            <p>zodiacSign: {zodiacSign}</p>
        </>
    );
};

export default Person;