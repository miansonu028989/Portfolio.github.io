import React, {Component} from "react";
import pStyle from './projectsStyle.module.css'
import Roboturl from './Images/robots.png'
class Projects extends Component{
    render(){
        return (
            <div className={`${pStyle.projectBody} container`}>
                <div className={`row g-0 d-flex justify-content-center justify-content-xl-evenly justify-content-md-evenly`}>
                    <div className={`col-sm-12 col-md-4 col-xl-4`}>
                        <div className={`card ${pStyle.customCard} mt-5 mb-5`}>
                            <img src={Roboturl} className={`card-img-top`} alt="..."/>
                            <div className={`card-body`}>
                                <h5 className={`card-title`}>Card title</h5>
                                <p className={`card-text`}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className={`btn btn-primary`}>Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className={`col-sm-12 col-md-4 col-xl-4`}>
                        <div className={`card customCard mt-5 mb-5`}>
                            <img src={Roboturl} className={`card-img-top`} alt="..."/>
                            <div className={`card-body`}>
                                <h5 className={`card-title`}>Card title</h5>
                                <p className={`card-text`}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className={`btn btn-primary`}>Go somewhere</a>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        );
    }
} 

export default Projects;