// eslint-disable-next-line no-unused-vars
import react,{ Component } from "react";
import './introStyle.css';
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
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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