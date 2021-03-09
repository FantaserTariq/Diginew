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

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state={
          
          email:'',
        
          password:'',
          user:'',

          error:'',
          redirect:true,
          isLoggedin:localStorage.getItem("token"),
          userdetails:[],
          proceed:'',
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
                if(this.state.userdetails.userType=='rider'){
                  console.log("im am rider");
                  this.setState({proceed:"go"})
                }
              });
            if(this.state.userdetails){
            console.log(this.state.userdetails,"user details");
            }
        }
            }
    }
    submitHandler = event => {  event.preventDefault()

            
          
    console.log(this.state.first_name)
    console.log(this.state.last_name)
    console.log(this.state.email)
    console.log(this.state.tel)
    console.log(this.state.password)
    console.log(this.state.confirmpassword)
    console.log(this.state.user)

    if(this.state.user=='rider'){
      var apiBaseUrl = "http://localhost:5000/rider/login";
    }else{
    var apiBaseUrl = "http://localhost:5000/users/login";
    }
    
    var payload={
        
    "email":this.state.email,
    "password":this.state.password

    }
    console.log(apiBaseUrl);
    axios.post(apiBaseUrl, payload)
    .then(function (response) {
    console.log(response);
    if(response.data.code == 200){
    console.log("Login successfull");
    window.location.reload();
    return <Redirect to='http://localhost:5001/' />
    

    
    
    
    }

    
    
    else{
      console.log(response.data.error)
      window.location.reload();
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
          (!this.state.isLoggedin)
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
          <div className="hello">

          </div>
          </Row>
          <Row>
          <Col lg="3"></Col>

        <Col lg="6">
        <h3 style={{textAlign: "center"}}>Login</h3>
            <Card>
                <h6 style={{marginLeft: "60px", color: "red", marginTop: "20px"}}>{this.state.error}</h6>
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
              <label>Password</label>
              <input required
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => this.setState({password:e.target.value})}
              />
            </div>
            <fieldset>

    

            <div className="form-group">
              
              <input required type="radio" name="user" value="rider" onChange={(e) => this.setState({user:e.target.value})}/>
              <label>Rider</label><br></br>
             
              <input required type="radio" name="user" value="buyer" onChange={(e) => this.setState({user:e.target.value})}/>
              <label>Buyer</label>  <br></br>
              <input required type="radio" name="user" value="seller" onChange={(e) => this.setState({user:e.target.value})}/>
              <label>Seller</label><br></br>
              
              
            </div>
            </fieldset>
           

            <button type="submit" className="btn btn-primary btn-block text-center" id="btnclass" > 
              Login
            </button>
            <p className="forgot-password text-center" style={{marginRight: "50px"}} >
              Need To Register <a href="/Signup">Sign Up?</a>
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
   </div>):(
                            <div style={{ marginTop: "50vh" }}>

                                <h1 className="text-center text-warning">You are logged in</h1>
                                <Route
      path="/"
      // render={({ match }) => {
      //   // Do whatever you want with the match...
      //   return <div />;
      // }}
    />
                                <div className="text-center">
                                  {
                                    (this.state.proceed!='')?
                                    (<div>
                                      <Link className="btn btn-primary btn-lg" to="/SendRiderLocation">Proceed</Link>
                                      </div>):
                                    (<div>
                                      <Link className="btn btn-primary btn-lg" to="/">Home</Link>
                                      </div>)
                                  }
                                  
                                  </div>
                            </div>
                        )}
                        </div>
    );
  }
}

export default Login;
