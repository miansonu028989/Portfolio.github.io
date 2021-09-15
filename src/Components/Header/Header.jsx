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
                <ReactTyped
                className="typed-text"
                strings={["React Developer",
                            "Database Monitoring",
                            "Application Using React",
                            "Front-End Developer",
                            "Back-End Developer"]}
                typeSpeed={100}
                backSpeed={50}
                loop
                />
                <br/>
                <a href="#" className="btn">Contect Me</a>
            </div>
            <br/>
        </div>
    );
}

export default Header;