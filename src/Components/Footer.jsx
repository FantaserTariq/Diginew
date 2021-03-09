import React from "react"
import { Link } from "react-router-dom"
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { ImLinkedin } from 'react-icons/im';
import "../Styling/Footer.css";
import badge from "../UI/badge.png";

class Footer extends React.Component {
    render() {
        return (
            <div style={{position: "relative", bottom: "0px",width:"100%"}}>
              

             <div className="text-light" style={{backgroundColor:"grey",height:"50px",lineHeight:"50px", textAlign:"center"}}>
                 <span style={{marginLeft:"5%"}}>Copyrights Digitmart</span> 
             </div>
                

            </div>
        )
    }
}
export default Footer;