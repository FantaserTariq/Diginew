import React from "react";
import axios from "axios";
import { Card, Container, Row, Col } from 'react-bootstrap';
import "../Styling/Signup.css";
import Header from "../Components/Header"
import Categories from './Categories'
import Footer from './Footer'

class OrderPlaced extends React.Component {

    constructor(props){
        super(props);
        this.state={
         longitude:"",
         latitude:""
        }
      }


// // handle(event){
// //     event.preventDefault()
// //     console.log("dscsdc")
// //         navigator.geolocation.getCurrentPosition((position) => {
// //             console.log(position.coords.latitude,"sd--",position.coords.longitude);
            
// //           });
// // }
   
// submitHandler = event => {  event.preventDefault()
//     console.log("dscsdc")
   
//     navigator.geolocation.getCurrentPosition((position) => {
//         console.log(position.coords.latitude,"sd--",position.coords.longitude);
//         this.setState({longitude:position.coords.longitude})
//         this.setState({latitude:position.coords.latitude})
        
//       });

// }
  render() {

   
    




    return (

        <div>
           Please Wait for your Order
        </div>
    );
  }


   
   
    

  }

export default OrderPlaced;
