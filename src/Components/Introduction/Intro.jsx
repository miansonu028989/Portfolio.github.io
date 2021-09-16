// eslint-disable-next-line no-unused-vars
import react,{ Component } from "react";
import './introStyle.css';
import ReactTyped from "react-typed";
import imagesurl from "./images/student.jpg";

class Intro extends Component{
    render(){
        return (
            <div className="Intro-body">
                <div className="Intro-header-text mb-3">
                    <h1 className="h1-text text-center">
                        Introduction | <span className="span">About Me</span>
                    </h1>
                </div>
                <div className="card mb-3" id="AboutMe">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={imagesurl} className="img-fluid rounded-start" alt="student"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body text-center">
                                <h5 className="card-title">Muhammad Talha</h5>
                                <p className="card-text">
                                <ReactTyped
                                    className="typed-text"
                                    strings={["Hi! ",
                                                "Database Monitoring",
                                                "Application Using React",
                                                "Front-End Developer",
                                                "Back-End Developer"]}
                                    typeSpeed={100}
                                    backSpeed={50}
                                    loop
                                    />
                                </p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Intro;