import React from "react";
import axios from "axios";
import { Card, Container, Row, Col } from 'react-bootstrap';
import "../Styling/Login.css";
import Header from "../Components/Header"
import Categories from './Categories'
import Footer from './Footer'
import { Link} from "react-router-dom";
import { FaWindows } from "react-icons/fa";
import { Redirect } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom"

class OrderPage extends React.Component {

    constructor(props){
        super(props);
        this.state={
        
            address:'',
            city:'',
            zipcode:'',
            userdetails:[],
            product:localStorage.getItem('productId'),

          isLoggedin:localStorage.getItem("token"),
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

    
      
    submitHandler = async event => {  event.preventDefault()
        await this.componentDidMount();

            
  
    console.log(this.state.address)
    console.log(this.state.city)
    console.log(this.state.zipcode)
    console.log(this.state.userdetails)

   
    var apiBaseUrl = "http://localhost:5000/order/addorder";
    
    
    var payload={
        "user":this.state.userdetails.id,
        "product":this.state.product,
        "address":this.state.address,
        "city":this.state.city,
        "zipcode":this.state.zipcode,
    

    }
    console.log(apiBaseUrl);
    axios.post(apiBaseUrl, payload)
    .then(function (response) {
    console.log(response);
    if(response.data.code == 200){
    console.log("Login successfull");
    return <Redirect to='http://localhost:5001/Home' />

    
    
    
    }

    
    
    else{
      console.log(response.data.error)
      alert(response.data.error)
      if(response.data.token){
        console.log("yo here",response.data.token);
        localStorage.setItem("token",response.data.token);
        console.log(localStorage.getItem('token'),"äsd");
     
      }
    }
    })
    .catch(function (error) {
    console.log(error);
    });
    }

   
    

  render() {
    




    return (

      <div>
      {
          (this.state.isLoggedin)
              ?
              (
<div className="home-page">
                <div className="fixed-top" style={{ marginTop: "0px", width: "100%" }}>
                  
                    <Header/>

             

                 
                </div>
                
                <div style={{ position: "relative", display: "block" }} id="structure">
                    <Categories />
                    </div>




      <Container>
         
          <Row>
          <Col lg="3"></Col>

        <Col lg="6">
        <h3 style={{textAlign: "center"}}>Please add the Shipping Details</h3>
            <Card>
                <h6 style={{marginLeft: "60px", color: "red", marginTop: "10px"}}>{this.state.error}</h6>
          <form style={{marginLeft: "60px"}} onSubmit={this.submitHandler}>
            

          
            <div className="form-group">
              <label>Email address</label>
              <input required
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => this.setState({email:e.target.value})}
              />
            </div>
            

            <div className="form-group">
              <label>Phone Number</label>
              <input required
                type="text"
                className="form-control"
                placeholder="Enter Phone Number"
                onChange={(e) => this.setState({phonenumber:e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Address</label>
              <input required
                type="text"
                className="form-control"
                placeholder="Enter Address"
                onChange={(e) => this.setState({address:e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <input required
                type="text"
                className="form-control"
                placeholder="Enter City"
                onChange={(e) => this.setState({city:e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Zip Code</label>
              <input required
                type="text"
                className="form-control"
                placeholder="Enter Zip Code"
                onChange={(e) => this.setState({zipcode:e.target.value})}
              />
            </div>
            <fieldset>

    

           
            </fieldset>
           

            <div className="text-center"><Link className="btn btn-primary btn-lg" to="/FindRider">Place Order</Link></div>
           
          </form>
          </Card>
        </Col>

        <Col></Col>
        </Row>
      </Container>
       <div style={{ position: "relative", bottom: "0px" }}>
       <Footer />
   </div>
   </div>):(
                            <div style={{ marginTop: "50vh" }}>

                                <h1 className="text-center text-warning">You are already logged in</h1>
                                <Route
      path="/Home"
      // render={({ match }) => {
      //   // Do whatever you want with the match...
      //   return <div />;
      // }}
    />
                                <div className="text-center"><Link className="btn btn-primary btn-lg" to="/Home">Login</Link></div>
                            </div>
                        )}
                        </div>
    );
  }
}

export default OrderPage;
