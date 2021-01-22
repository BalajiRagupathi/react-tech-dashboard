import React,{ Component } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import './Navbar.css';
import { IconContext } from 'react-icons'

class Navbar extends Component{

    state = {
        sidebar: false
    }

    toggleNavbar = () => {
        this.setState({sidebar: !this.state.sidebar});
        console.log("Clicked Navbar!!!",this.state.sidebar);
    }

    render(){
        return (
            <IconContext.Provider value={{color: '#fff'}}>
                <div className="navbar">
                    <Link to="#" className="menu-bars" >
                        <FaIcons.FaBars onClick={this.toggleNavbar}/>
                    </Link>
                </div>
                <nav className={this.state.sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-item" onClick={this.toggleNavbar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item,index) => {
                            return (
                                <li key={index} className={item.cName} >
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        );
    }
}

export default Navbar;