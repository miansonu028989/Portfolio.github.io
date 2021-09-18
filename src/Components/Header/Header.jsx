import React from "react";
import headerStyle from './headerStyle.module.css';
import ReactTyped from "react-typed";

const Header=()=>{
    return (
        <div className={`${headerStyle.containerFluid} ${headerStyle.headerContainer}`}>  
            <div className={`${headerStyle.mianText} ${headerStyle.headerText}`} id="particles.js">
                <p className={`${headerStyle.pText} ${headerStyle.headerTextT}`}>
                Websites Developer <span className={`${headerStyle.spanText} spanTeaxt`}>Portfolio</span>
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
                <a href="#" className={`${headerStyle.btn} btn`}>Contect Me</a>
            </div>
            <br/>
        </div>
    );
}

export default Header;