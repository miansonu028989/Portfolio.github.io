import React from "react";
import './headerStyle.css';
import ReactTyped from "react-typed";
const Header=()=>{
    return (
        <div className="container-fluid header-container">
            <div className="mian-text header-text">
                <p className="p-text header-text-p">
                Websites Developer <span className="span-text">Portfolio</span>
                </p>
            </div>
            <br/>
        </div>
    );
}

export default Header;