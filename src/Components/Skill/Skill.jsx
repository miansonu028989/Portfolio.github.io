/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import react,{ Component } from "react";
import Csharp from './images/csharp.png'
import './skillStyle.css';

class Skill extends Component{
    state = { 

    }
    render(){
        return (
            <div className="skillBody">
                <div className="Intro-header-text mb-3">
                    <h1 className="h1-text text-center">
                        Best |<span className="span"> Skill</span> |<span className="span"> Course</span>
                    </h1>
                </div>
                <div className="card card-id mb-3" id="AboutMe">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={Csharp} className="img-fluid rounded-start" id="img-fluid" alt="student"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body text-center" id="card-body">
                                <h5 className="card-title" id="card-title">C#</h5>
                                <p className="card-text" id="card-text">
                                </p>
                                <p className="card-text" id="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Skill;