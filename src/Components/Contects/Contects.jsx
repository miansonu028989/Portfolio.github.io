import { Component } from "react";
import contectStyle from "./contectStyle.module.css";
class  Contect extends Component {

    // eslint-disable-next-line react/require-render-return
    render(){
        return (
           <div className={`${contectStyle.contectBody}`}>
                <div className={`${contectStyle.upperDiv}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="gray" fill-opacity="1" d="M0,0L40,10.7C80,21,160,43,240,96C320,149,400,235,480,250.7C560,267,640,213,720,208C800,203,880,245,960,266.7C1040,288,1120,288,1200,261.3C1280,235,1360,181,1400,154.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z">
                </path>
                </svg>
                </div>
           </div> 
        );
    }
}

export default  Contect;