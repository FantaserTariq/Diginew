import React from "react";
import axios from "axios";
import { Card, Container, Row, Col } from 'react-bootstrap';
import "../Styling/Signup.css";
import Header from "../Components/Header"
import Categories from './Categories'
import Footer from './Footer'

class Signup extends React.Component {

    constructor(props){
        super(props);
        this.state={
          first_name:'',
          last_name:'',
          email:'',
          tel:'',
          password:'',

          error:''
        }
      }


      
    submitHandler = event => {  event.preventDefault()

        if (this.state.password !== this.state.confirmpassword) {
            this.setState({error:'Password Do Not Match'})
          } else {
            
          
    console.log(this.state.first_name)
    console.log(this.state.last_name)
    console.log(this.state.email)
    console.log(this.state.tel)
    console.log(this.state.password)
    console.log(this.state.confirmpassword)

    var apiBaseUrl = "http://localhost:5000/users/";
    var self = this;
    var payload={
        "firstname":this.state.first_name,
        "lastname":this.state.last_name,        
        "phonnumber":this.state.tel,       
    "email":this.state.email,
    "password":this.state.password

    }
    axios.post(apiBaseUrl+'signup', payload)
    .then(function (response) {
    console.log(response);
    if(response.data.code == 200){
    console.log("Login successfull");
    }
   
    else{
    console.log(response.data.error);
    alert(response.data.error);
    }
    })
    .catch(function (error) {
    console.log(error);
    });
    }
}
  render() {
    




    return (

      <div className="home-page">
                <div className="fixed-top" style={{ marginTop: "0px", width: "100%" }}>
                  
                    <Header/>

             

                 
                </div>
                
                <div style={{ position: "relative", display: "block" }} id="structure">
                    <Categories />
                    </div>
                    





  
      <Container>
      
          <Row>
          <div className="hello">

          </div>
          </Row>
          <Row>
          <Col lg="3"></Col>

        <Col lg="6">
        <h3 style={{textAlign: "center"}}>Sign Up</h3>
            <Card>
                <h6 style={{marginLeft: "60px", color: "red", marginTop: "20px"}}>{this.state.error}</h6>
          <form style={{marginLeft: "60px"}} onSubmit={this.submitHandler}>
            

            <div className="form-group"style={{marginTop: "25px"}} >
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                onChange={(e) => this.setState({first_name:e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                onChange={(e) => this.setState({last_name:e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => this.setState({email:e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter Phone Number"
                onChange={(e) => this.setState({tel:e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => this.setState({password:e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter confirm password"
                onChange={(e) => this.setState({confirmpassword:e.target.value})}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block text-center" id="btnclass" > 
              Sign Up
            </button>
            <p className="forgot-password text-center" style={{marginRight: "50px"}} >
              Already registered <a href="/Login">Sign in?</a>
            </p>
          </form>
          </Card>
        </Col>

        <Col></Col>
        </Row>
      </Container>
      <div style={{ position: "relative", bottom: "0px" }}>
                    <Footer />
                </div>
      </div>
    );
  }
}

export default Signup;
