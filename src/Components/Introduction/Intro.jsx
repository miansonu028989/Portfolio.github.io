// eslint-disable-next-line no-unused-vars
import react,{ Component } from "react";
import './introStyle.css';
import ReactTyped from "react-typed";
import imagesurl from "./images/student.jpg";

class Intro extends Component{
    state = {
        "aboutMe":`Hi! My name is Muhammad Talha. I’m 21 and I live in Lahore .

        I’m interested in computer science, music, sport and E-Gaming. Computers first appered in my life when I was seven. Then I had got my first computer.
         
        It was Commodore 64 and I remember myself thinking, that it was the best thing in the world. I was playing it whenever I could. Then I had got my first PC. At first, I was just playing computer games, but some time later, I noticed that I could do a lot more things with the computer, for example programming. Now, I can already programue in C#,React,Database,Javascript,CSS, C++ and HTML. I have my own site on the internet and I have done many programues.
         
        I hope that in the future I will get a job as a Full Stock Developer.
        `,
    }
    render(){
        return (
            <div className="Intro-body" id="AboutMe">
                <div className="Intro-header-text mb-3">
                    <h1 className="h1-text text-center">
                        Introduction | <span className="span">About Me</span>
                    </h1>
                </div>
                <div className="card card-id mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={imagesurl} className="img-fluid rounded-start" id="img-fluid" alt="student"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body text-center" id="card-body">
                                <h5 className="card-title" id="card-title">Muhammad Talha</h5>
                                <p className="card-text" id="card-text">
                                <ReactTyped
                                    className="typed-text"
                                    strings={[this.state.aboutMe]}
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
export default Intro;