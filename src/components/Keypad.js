import React from 'react';

// create function for keypad
function Keypad () {
    //function to handle the changes
    function changeHandler () {
        //on handling the change, print the text
        console.log('Entering password...');
        
    }
    return (

        //pass input type as the password
        //use onChange to handle the change
        <input type='password' onChange={changeHandler}/>
    );
};

export default Keypad;



