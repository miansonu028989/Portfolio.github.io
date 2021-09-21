import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navigation/Navbar";
import Header from './Components/Header/Header';
import Intro from "./Components/Introduction/Intro";
import Skill from './Components/Skill/Skill';
import Projects from './Components/CourseProjects/Projects';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Header/>
    <Intro/>
    <Skill/>
    <Projects/>
    </div>
  );
}

export default App;
