/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React,{ Component } from "react";
import Csharp from './images/csharp.png'
import Reacts from './images/react.png'; 
import Jquary from './images/Jquary.png';
import Js from './images/Js.png';
import SQLs from './images/SQL.png';
import './skillStyle.css';
import ReactTyped from "react-typed";

class Skill extends Component{
    state = { 
        "Csharp":`C# is a new programming language developed by Microsoft.
         C# has power of C++ since it's derived from C and C++. 
         It is simpler as VB. Besides that, C# is a Java like language for web programming and it has some good features of Delphi too. 
         Microsoft says, that C# is the best language to develop its .NET Framework applications.`,
         "Reacts":`React is a library for building composable user interfaces.
          It encourages the creation of reusable UI components which present data that changes over time.`,
    }
    render(){
        return (
            <div className="skillBody" >
                <div className="Intro-header-text mb-3">
                    <h1 className="h1-text text-center"  id="Skill">
                        Best |<span className="span"> Skill</span> |<span className="span"> Course</span>
                    </h1>
                </div>
                <div className="card card-id mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={Csharp} className="img-fluid rounded-start" id="img-fluid" alt="student"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body text-center" id="card-body">
                                <h5 className="card-title" id="card-title">C#</h5>
                                <p className="card-text" id="card-text">
                                <ReactTyped
                                    className="typed-text"
                                    strings={[this.state.Csharp]}
                                    typeSpeed={15}
                                    backSpeed={10}
                                    />
                                </p>
                                <p className="card-text" id="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-id mb-3 cardMargin">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={Reacts} className="img-fluid rounded-start" id="img-fluid" alt="student"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body text-center" id="card-body">
                                <h5 className="card-title" id="card-title">React</h5>
                                <p className="card-text" id="card-text">
                                <ReactTyped
                                    className="typed-text"
                                    strings={[this.state.Reacts]}
                                    typeSpeed={15}
                                    backSpeed={10}
                                    />
                                </p>
                                <p className="card-text" id="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-id mb-3 cardMargin">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={Jquary} className="img-fluid rounded-start" id="img-fluid" alt="student"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body text-center" id="card-body">
                                <h5 className="card-title" id="card-title">React</h5>
                                <p className="card-text" id="card-text">
                                <ReactTyped
                                    className="typed-text"
                                    strings={[this.state.Reacts]}
                                    typeSpeed={15}
                                    backSpeed={10}
                                    />
                                </p>
                                <p className="card-text" id="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-id mb-3 cardMargin">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={Js} className="img-fluid rounded-start" id="img-fluid" alt="student"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body text-center" id="card-body">
                                <h5 className="card-title" id="card-title">React</h5>
                                <p className="card-text" id="card-text">
                                <ReactTyped
                                    className="typed-text"
                                    strings={[this.state.Reacts]}
                                    typeSpeed={15}
                                    backSpeed={10}
                                    />
                                </p>
                                <p className="card-text" id="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-id mb-3 cardMargin">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={SQLs} className="img-fluid rounded-start" id="img-fluid" alt="student"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body text-center" id="card-body">
                                <h5 className="card-title" id="card-title">React</h5>
                                <p className="card-text" id="card-text">
                                <ReactTyped
                                    className="typed-text"
                                    strings={[this.state.Reacts]}
                                    typeSpeed={15}
                                    backSpeed={10}
                                    />
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