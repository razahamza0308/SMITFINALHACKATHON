import React, { useState, createContext } from 'react'
import Buttons from './Buttons';
import { Button } from 'react-bootstrap'
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import {  db, auth, onAuthStateChanged, getDoc, onSnapshot, doc } from '../Config/firebase'

export const numFromState = createContext()
const Deshboard = () => {
    


    const user = auth.currentUser;
    const history = useHistory()
    if (user) {
        console.log("user online ha");
    } else {
        history.push('/')
    }

    








    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         // User is signed in, see docs for a list of available properties
    //         // https://firebase.google.com/docs/reference/js/firebase.User

    //         const uid = user.uid;
    //         console.log(uid);
    //         const unsub = onSnapshot(doc(db, "user", uid), (doc) => {
    //             console.log("Current data: ", doc.data().first);
    //             setuserName(doc.data().first + " " +doc.data().last)
    //         });
    //         // ...
    //     } else {
    //         // User is signed out
    //         // ...
    //     }
    // });







    

    return (
        <>
        <h1>Hello deshboard</h1>
        </>
        
    )
}

export default Deshboard