import React from 'react';
import axios from "axios";
import { Link} from "react-router-dom";
import { Redirect } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom"


class AdminLogin extends React.Component{

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


    render(){
        return(

<div>
(!this.state.isLoggedin)
              ?
              (

  {/* Begin page */}
  <div className="accountbg bg-primary" />
  <div className="home-btn d-none d-sm-block">
    <a href="index.html" className="text-white"><i className="fas fa-home h2" /></a>
  </div>
  <div className="wrapper-page">
    <div className="card card-pages shadow-none">
      <div className="card-body">
        <div className="text-center m-t-0 m-b-15">
          <a href="/" className="logo logo-admin"><h1 className="font-weight-bold">DigiMart</h1></a>
        </div>
        <h5 className="font-20 text-center">Login as Admin of DigiMart.</h5>
        <form className="font-15 form-horizontal m-t-30" action="/" onSubmit={this.submitHandler}>
          <div className="form-group">
            <div className="col-12">
            <label>Email address</label>
              <input required
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => this.setState({email:e.target.value})}
              />
            </div>

          </div>
          <div className="front-15 form-group">
            <div className="col-12">
            <label>Password</label>
              <input required
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => this.setState({password:e.target.value})}
              />
            </div>
          </div>

          <div className=" font-20 form-group text-center m-t-20">
            <div className="col-12"><br></br>
              <button type="submit" className="btn btn-primary btn-block btn-lg waves-effect waves-light" type="submit"> 
              Login
            </button>
            </div>
          </div>
          <div className="form-group row m-t-30 m-b-0">
            <div className="col-sm-5 text-right">
              <a href="/Adminregister" className="text-muted">Create an account</a>
            </div>
            </div>  
        </form>
      </div>
    </div>
  </div>):(
                            <div style={{ marginTop: "50vh" }}>

                                <h1 className="text-center text-warning">You are logged in</h1>
                                <Route
      path="/admin"
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
                                      <Link className="btn btn-primary btn-lg" to="/admin">Home</Link>
                                      </div>)
                                  }
                                  
                                  </div>
                            </div>
                        )
</div>
);
}}

export default AdminLogin;