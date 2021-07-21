import React,{useEffect, useState} from 'react'
import './MainNavigation.css';
import { ListItems } from './ListItems';
import {Link,useHistory} from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
import {firestore} from '../firebase/firebase'
function MainNavigation() {
    const [clicked,setClicked] = useState(false)
    const {logout,currentUser} = useAuth()
    const history = useHistory()
    const [todo,setTodo] = useState([]);
    function handleClick(){
        setClicked(!clicked)
    }
    async function logoutUser(){
        try{
            await logout()
            history.push('/')
        }
        catch{
            alert("Failed to Logout")
        }
    }
    
    return (
        <nav className="NavbarItems">
                <p className="navbar-logo">NEWS APP</p>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {ListItems.map((item,index) =>{
                        return(
                            <li key={index}>
                                <Link to={item.url} className={item.Cname}>{item.title}</Link>
                            </li>
                        )
                    })}
                    <button className="button" onClick={logoutUser}>Logout</button>

                </ul>
            </nav>
    )
}

export default MainNavigation
