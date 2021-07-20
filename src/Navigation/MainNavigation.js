import React,{useState} from 'react'
import './MainNavigation.css';
import { ListItems } from './ListItems';

function MainNavigation() {
    const [clicked,setClicked] = useState(false)
    function handleClick(){
        setClicked(!clicked)
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
                                <a className={item.Cname} href={item.url}>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
    )
}

export default MainNavigation
