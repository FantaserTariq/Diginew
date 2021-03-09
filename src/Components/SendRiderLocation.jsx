import React from "react";
import axios from "axios";
import { Card, Container, Row, Col } from 'react-bootstrap';
import "../Styling/Signup.css";
import Header from "../Components/Header"
import Categories from './Categories'
import Footer from './Footer'
import { Link} from "react-router-dom";
import OrderPlaced from "../Components/OrderPlaced"

class SendRiderLocation extends React.Component {

    constructor(props){
        super(props);
        this.state={
         longitude:"",
         latitude:"",
         userdetails:[]
        }
      }

      componentDidMount() {
        if(localStorage.getItem('token')){
            var token= localStorage.getItem('token');
            if (token) 
            { var base64Url = token.split('.')[1]; 
          var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); 
          var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) { return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2); }).join('')); 
          console.log(JSON.parse(jsonPayload),"daasdasdas")
          var tempor=JSON.parse(jsonPayload);
          console.log("f",tempor)
            this.setState({userdetails:tempor},() => {
                console.log(this.state.userdetails, 'dealersOverallTotal1');
              });
            if(this.state.userdetails){
            console.log(this.state.userdetails,"user details");
            }
        }
            }
    }

// handle(event){
//     event.preventDefault()
//     console.log("dscsdc")
//         navigator.geolocation.getCurrentPosition((position) => {
//             console.log(position.coords.latitude,"sd--",position.coords.longitude);
            
//           });
// }
   
submitHandler =async event => {  event.preventDefault()
    console.log("dscsdc")
    await this.componentDidMount();
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude,"sd--",position.coords.longitude);
        this.setState({longitude:position.coords.longitude},() => {
            this.setState({latitude:position.coords.latitude},()=>{
                var apiBaseUrl = "http://localhost:5000/findrider/updateLocation";
            var loc={
                'lat':this.state.latitude,
                'long':this.state.longitude
            }
            
                var payload={
                    
                "riderId":this.state.userdetails.id,
                "location":loc
            
                }
                console.log(apiBaseUrl);
                axios.post(apiBaseUrl, payload)
                .then(function (response) {
                console.log(response);
                if(response.data.code == 200){
                
                
                console.log("done")
                
                
                }}
            
                
                )   
                       
        })
        
        
    });

    })
}
      

    
  render() {

   
    




    return (

        <div>
            <Container>
      
      <Row>
      <div className="hello">

      </div>
      </Row>
      <Row>
      <Col lg="3"></Col>

    <Col lg="6">
    <h3 style={{textAlign: "center"}}>Location for Delivery</h3>
        <Card>
          
      <form style={{marginLeft: "60px"}} onSubmit={this.submitHandler}>
        

        <div className="form-group"style={{marginTop: "25px"}} >
          <label>Send Location</label>
          
          
        </div>
<div>
        { 
        (this.state.latitude == "")?
        (
        <button type="submit" className="btn btn-primary btn-block text-center" id="btnclass" onClick="handle(event)" > 
          Send
        </button>
        ):(
            <div className="text-center"><Link className="btn btn-primary btn-lg" to="/OrderPlaced">Proceed</Link></div>
        )
        }
        </div>
       
      </form>
      </Card>
    </Col>

    <Col></Col>
    </Row>
  </Container>
        </div>
    );
  }


   
   
    

  }

export default SendRiderLocation;
