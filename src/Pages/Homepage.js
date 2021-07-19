import React,{useRef} from 'react'
import {useAuth} from '../Context/AuthContext'
import { firestore } from '../firebase/firebase';
function Homepage() {
    const name = useRef();
    const {currentUser} = useAuth()
    function handler(){
        firestore.collection(`${currentUser.uid}`).add({
            Category:"Sports",
            Title:"Vk Hits ton in ODI cricket",

        })
    }
    return (
        <div>
            <input type="text" ref={name}></input>
            <button onClick={handler}>Submit</button>
        </div>
    )
}

export default Homepage
