// eslint-disable-next-line no-unused-vars
import react,{ Component } from "react";
import './introStyle.css';
import ReactTyped from "react-typed";
import imagesurl from "./images/student.jpg";

class Intro extends Component{
    state = {
        "aboutMe":`Hi! My name is Muhammad Talha. I’m 21 and I live in Lahore .

        I’m interested in computer science, music, sport and fantasy literature. Computers first appered in my life when I was seven. Then I had got my first computer. It was Commodore 64 and I remember myself thinking, that it was the best thing in the world. I was playing it whenever I could. Then I had got my first PC. At first, I was just playing computer games, but some time later, I noticed that I could do a lot more things with the computer, for example programming. Now, I can already programue in Pascal, C++ and HTML. I have my own site on the internet and I have done many programues. I hope that in the future I will get a job as a computer scientist.
        
        My favorite music band is QUEEN. I think it is the best group on the earth. Together with my sister, we are devoted Queen fans. We have all their albums, many video tapes, books, posters, gadgets and interviews. I love them, but I also like other groups like The Doors, The Baeatles, The Rolling Stones, some Polish rock groups and many others. Apart from that I’m really fascinated by Scottisch bagpipe songs, and one of my favorite albums is the „Braveheart” soundtrack.
        
        I have always been good at sports. I like playing soccer, running and swimming (also SCUBA diving and diving). I have played in many sport tournaments (football cups, handball cups, races) in which together with my team, I have won many trophys. My favorite intelectual game is chess, but I have never played it professionaly.
        
        I love fantasy literature. I read fantasy books and magazines, watch fantasy films and play role playing games in which fantasy world is used as background. Once every two weeks, I meet with my friends and we play „Middle Earth”. I’m the master of the game and they are players. We play about five hours sesion.
        
        It’s a lot of fun. „Middle Earth” is a game based on Tolkien’s books. I chose it, becouse I love everything that J.R.R. Tolkien wrote. He is my favorite writer, but I like other writers as well, for example Piers Anthony or Robert Jordan.
        
        My dream is to study computer science and to go to Japan. I love everything associated with this country. and I hope that in the future, I will learn Japanise. I want to go to Japan and stay there for a long time. I want to get a job there as a computer scientist. Now, I try to learn Japanise by myself. I already know some words and about sixty letters of their alfabeth. My parents promised me that if I learn German and English well, they will find me a Japanise teatcher.
        
        I hate spiders. When I see a spider (especialy when it’s a big one) I feel so very small and the spider seems so huge. I don’t feel scarred when I see a mouse, snake or any other animal and when I come across a spider I think: „Why is it not a mouse? Why do I always find spiders and not mise for example”. This is terrible..
        `,
    }
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
                                    strings={[this.state.aboutMe]}
                                    typeSpeed={5}
                                    backSpeed={10}
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