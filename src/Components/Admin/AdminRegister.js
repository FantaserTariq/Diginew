import React from 'react';
import axios from "axios";
import { Link, Redirect } from 'react-router-dom';


class AdminRegister extends React.Component{

  constructor(props){
    super(props);
    this.state={
      post:{},
      first_name:'',
      last_name:'',
      email:'',
      password:'',
      confirmpassword:'',
      error:''
    }
  }

  login = () => {
    alert(this.state.post.email);
    axios
      .post('http://localhost:3001/admin/Adminregister', {
        firstname:this.state.post.first_name,
          lastname:this.state.post.last_name,       
          email:this.state.post.email,
          password:this.state.post.password,
          confirmpassword:this.state.post.confirmpassword,
      })
 
      .then((res) => alert("Verified"));
    // history.push('/')
    alert('Successfully Signed Up!');
    // window.location.reload();
  };

// submitHandler = event => {  event.preventDefault()

//     if (this.state.password !== this.state.confirmpassword) {
//         this.setState({error:'Password Do Not Match'})
//       } else {
      
// console.log(this.state.first_name)
// console.log(this.state.last_name)
// console.log(this.state.email)
// console.log(this.state.tel)
// console.log(this.state.password)
// console.log(this.state.confirmpassword)

// var apiBaseUrl = "http://localhost:5000/admin/Adminregister";
// var self = this;
// var payload={
//     "firstname":this.state.first_name,
//     "lastname":this.state.last_name,       
//     "email":this.state.email,
//     "password":this.state.password,
//     "confirmpassword":this.state.confirmpassword
// }

// axios.post(apiBaseUrl+'signup', payload)
// .then(function (response) {
// console.log(response);
// if(response.data.code == 200){
// console.log("Registered successfull");
// }

// else{
// console.log(response.data.error);
// alert(response.data.error);
// }
// })
// .catch(function (error) {
// console.log(error);
// });
// }
// }

    render(){
        return(

<div>
  {/* Begin page */}
  <div className="accountbg bg-primary" />
  <div className="wrapper-page">
    <div className="card card-pages shadow-none">
      <div className="card-body">
      <div className="text-center m-t-0 m-b-15">
          <a href="/" className="logo logo-admin"><h1 className="font-weight-bold">DigiMart</h1></a>
        </div>
        {/* onSubmit={this.submitHandler} */}

        <h5 className="font-20 text-center">Register as Admin of DigiMart.</h5>
        <h6 style={{marginLeft: "60px", color: "red", marginTop: "20px"}}>{this.state.error}</h6>
          <form className="form-horizontal m-t-30"  >
        <div className="form-group font-15">
            <div className="col-12">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                // onChange={(e) => this.setState({first_name:e.target.value})}
                onChange={(event) => {
                  let p = { ...this.state.post };
                  p.first_name = event.target.value;
                  this.setState({ post: p });
                }}
              />
            </div>
          </div>
          <div className="form-group font-15">
            <div className="col-12">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                // onChange={(e) => this.setState({last_name:e.target.value})}
                onChange={(event) => {
                  let p = { ...this.state.post };
                  p.last_name = event.target.value;
                  this.setState({ post: p });
                }}
              />
            </div>
          </div>

          <div className="form-group font-15">
            <div className="col-12">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                // onChange={(e) => this.setState({email:e.target.value})}
                onChange={(event) => {
                  let p = { ...this.state.post };
                  p.email = event.target.value;
                  this.setState({ post: p });
                }}
              />
            </div>
          </div>
          
          <div className="form-group font-15">
            <div className="col-12">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(event) => {
                  let p = { ...this.state.post };
                  p.password = event.target.value;
                  this.setState({ post: p });
                }}
              />
            </div>
            </div>

            <div className="form-group font-15">
            <div className="col-12">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter confirm password"
                onChange={(event) => {
                  let p = { ...this.state.post };
                  p.confirmpassword = event.target.value;
                  this.setState({ post: p });
                }}
              />
            </div>
          </div>

          <div className="form-group text-center m-t-20">
            <div className="col-12">
              <button className="btn btn-primary btn-block btn-lg waves-effect waves-light" onClick={() => this.login()} ><Link to='/Adminlogin'>Register </Link></button>
            </div>
          </div>
          <div className="form-group mb-0 row font-12">
            <div className="col-sm-5 text-right">
              <a href="/Adminlogin" className="text-muted">Already have account?</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* END wrapper */}
  {/* jQuery  */}
  {/* App js */}
</div>

);
}}

export default AdminRegister;