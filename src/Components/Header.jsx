import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faAngleDown,
  faQuestionCircle,
  faBook,
  faCamera,
  faMapMarkerAlt,
  faCoffee,
  faSearch,
  faSearchPlus,
  faUserCircle,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./LoginModal";
import { setSearchedData, showCondition } from "../store/action/index";
import "../Styling/App.css";
import axios from "axios"
import firebase from "firebase/app";
import firebaseAuth from "firebase/auth/dist/index.esm";
import { ContactMail } from "@material-ui/icons";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectLocation: "Punjab",
      search: "",
      condition: true,
      isLoggedin:localStorage.getItem("token"),
      userdetails:[],
      newnotification: true,
      userads:[],
      items:""
    };
    this.componentDidMount()
    //alert(this.props.search_ads)
  }

  handle = async event => {  event.preventDefault()
    localStorage.removeItem('token');
   
this.setState({userdetails:[]})

  }

  async getdata(){
    var apiBaseUrl = "http://localhost:5000/users/getNotification/";
    var self = this;
    let temper
  
  return await axios.get(apiBaseUrl+this.state.userdetails.id)


}

  seting(inp){
    console.log(inp,"in set")
    this.setState({userads:inp.data.data},()=>{
        console.log("yoyo",this.state.userads)
        if(this.state.userads.length>0){
          this.state.items=[]
          this.state.userads.forEach(data=>{
            this.state.items.push(<h5  onClick={() => this.iamClicked(data)} style={{cursor:"pointer",color:"white",borderBottomColor:"white",borderBottomStyle:"solid",borderBottomWidth:"0.2rem"}}>{data.msg}</h5>)
          })
          let temp123=this.state.userads.find(a=>a.seen==false)
            if(temp123){
              this.setState({
                newnotification:true
              })
            }
            else{
              this.setState({
                newnotification:false
              })
            }

          
          console.log(this.state.items,"fjjdejdieijdije2ijeijdije2dijij")
        }
       
    })
}

// populate(){
//   console.log("in populate")
//   console.log(this.state.userads)
//   this.state.items=[]
//   this.state.userads.forEach(data=>{
//     this.state.items.push(<p>{data.msg}</p>)
//   })
// }

async iamClicked(inp){
  console.log("im in clicked",inp)
  localStorage.setItem("noti",JSON.stringify(inp))
  this.props.history.push('/FindRider');
}

  async componentDidMount() {

  

    if(localStorage.getItem('token')){
        var token= localStorage.getItem('token');
        if (token) 
        { var base64Url = token.split('.')[1]; 
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); 
      var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) { return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2); }).join('')); 
      console.log(JSON.parse(jsonPayload),"daasdasdas")
      var tempor=JSON.parse(jsonPayload);
      console.log("f",tempor)
        this.setState({userdetails:tempor},async () => {
            console.log(this.state.userdetails, 'dealersOverallTotal1');
            console.log("here")
        let tempor1=await this.getdata();
        console.log("csac",tempor1);
        var a=await this.seting(tempor1);
          });
        if(this.state.userdetails){
        console.log(this.state.userdetails,"user details");
        
        }
    }
        }


        
    
}
  sign_out = () => {
    // firebase.auth().signOut();
    localStorage.removeItem('token');
   
    this.setState({userdetails:[]})
    window.location.reload();
  };
  setLocation = (e) => {
    let val = e.target.value;
    alert(e.target.value);
    this.setState({ selectLocation: e.target.value });
  };
  dummy = (e) => {
    if (e.target.value.length == 0) {
      this.setState({ condition: true });
      this.props.showCondition(this.state.condition);
    }
    this.setState({
      search: e.target.value,
      condition: false,
    });

    let filteredAds = this.props.users_ads.filter((ads) => {
      return (
        ads.title.toLowerCase().indexOf(this.state.search.toLowerCase()) != -1
      );
    });

    this.props.setSearchedData(filteredAds);
    console.log("Chal raha hai Dummy", this.props.search_ads);
  };

   Notification = async () => { 
    console.log("herllo here")
   //await this.populate()
    var x = document.getElementById("notificationbox")
    if (x.style.display=="block"){
      x.style.display="none"
    }else{
      x.style.display="block"
    }
  }
 
  render() {


    
    this.props.showCondition(this.state.condition);
    console.log(
      "The current condition is now in HEADER:",
      this.props.currentCondition
    );
    //For the search functionality
    {
      /* The actual thing from which I learnt how to develop a search functionality */
    }
    let filteredAds = this.props.users_ads.filter((ads) => {
      return (
        ads.title.toLowerCase().indexOf(this.state.search.toLowerCase()) != -1
      );
    });
    {
      /* The actual thing from which I learnt how to develop a search functionality */
    }

 

    //For the search functionality
    //console.log("Do you know what this is",filteredAds)
    // console.log("DATA OF REDUX IN HEADER==>", this.props.USER_AUTH_DATA)
    return (
      <div>
        {/* The actual thing from which I learnt how to develop a search functionality */}
        {/* <ul>
                    {filteredAds.map((ads,i)=>{
                        return <li key={i}>{ads.title}</li>
                    })}
                    
                </ul>                 */}
        {/* This is boostrap navigation bar */}
        {/* The actual thing from which I learnt how to develop a search functionality */}

        
          <div>
            {
              (this.state.userdetails.userType=="rider")?
              (
                <nav
          style={{ position: "center", textAlign:"center" , zIndex: "60000"}}
          className="navbar navbar-expand-lg navbar-light bg-light .container-fluid"
        >
          

          <h2 class="header-class" style={{fontSize: "30px"}}>Digimart</h2>
          <button
                          onClick={this.sign_out}
                          className="btn btn-outline-light btn-danger"
                          style={{ textAlign: "center", fontSize: "25px" }}
                        >
                          SignOut
                        </button>
                </nav>
              ):
              (
                <div>
                  <nav
          style={{ position: "center", textAlign:"center" , zIndex: "60000"}}
          className="navbar navbar-expand-lg navbar-light bg-light .container-fluid"
        >
          

          <h2 class="header-class" style={{fontSize: "30px"}}>Digimart</h2>
                <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                {/* This is the first item in nav bar */}
                <div className="input">
                  <div className="input-group-prepend">
                    <label className="input-group-text">
                      <FontAwesomeIcon
                        style={{ color: "black", fontSize: "13px" }}
                        id="Icon"
                        icon={faSearch}
                      />
                    </label>
                  </div>
                  <select
                    value={this.state.selectLocation}
                    onChange={(e) => this.setLocation(e)}
                    className="custom-select"
                    id="inputGroupSelect01"
                  >
                    <option id="location" value="Use Current Location">
                      Use Current Location
                    </option>
                    <option disabled id="line">
                      ________________________________________________
                    </option>
                    <option
                      defaultValue="Lahore,Pakistan"
                      value="Lahore,Pakistan"
                    >
                      Lahore,Pakistan
                    </option>
                    <option value="Punjab">Punjab</option>
                    <option value="Azad Jammu and Kashmir">
                      Azad Jammu and Kashmir
                    </option>
                    <option value="Balochistan">Balochistan</option>
                    <option value="Gilgit–Baltistan">Gilgit–Baltistan</option>
                    <option value="Islamabad Capital Territory">
                      Islamabad Capital Territory
                    </option>
                    <option value="Khyber Pakhtunkhwa">
                      Khyber Pakhtunkhwa
                    </option>
                    <option value="Sindh">Sindh</option>
                    <option value="Muzaffarabad">Muzaffarabad</option>
                    <option value="Quetta">Quetta</option>
                    <option value="Gilgit">Gilgit</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Karachi">Karachi</option>
                  </select>
                </div>

                {/* This will be used for mobile devices */}
                <div
                  style={{
                    position: "relative",
                    zIndex: "1000",
                    backgroundColor: "white",
                  }}
                  className="inputMobile"
                  id="check"
                  className="row"
                >
                  {this.state.isLoggedin ? (
                    <img
                      style={{ borderRadius: "50%" }}
                      className="userico"
                      // src={firebase.auth().currentUser.photoURL}
                      alt="...."
                    />
                  ) : (
                    <div className="col-xs-6">
                      <FontAwesomeIcon
                        className="userico"
                        icon={faUserCircle}
                      />
                    </div>
                  )}

                  {this.state.isLoggedin ? (
                    <div
                      style={{
                        fontWeight: "bolder",
                        color: "cadetblue",
                        fontSize: "25px",
                        marginTop: "10px",
                        marginLeft: "20px",
                      }}
                      className="col-xs-6"
                    >
                      {/* {firebase.auth().currentUser.displayName} */}
                    </div>
                  ) : (
                    <div
                      style={{
                        fontSize: "20px",
                        marginTop: "10px",
                        marginLeft: "20px",
                      }}
                      className="col-xs-6 text-primary"
                    >
                      Enter to your account
                    </div>
                  )}

                  {/* This will be used for mobile devices */}

                  {/* This is the first item in nav bar */}
                </div>
              </li>
              <li className="nav-item">
                <div id="li_two">
                  <input
                    value={this.state.search}
                    onChange={(e) => this.dummy(e)}
                    id="searchInput"
                    type="text"
                    className="form-control .container-fluid"
                    placeholder="Find Cars,Mobile Phones and more..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <div
                    style={{ marginTop: "7px" }}
                    className="input-group-append"
                  >
                    <button className="input-group-text" id="basic-addon2">
                      <FontAwesomeIcon id="Icon2" icon={faSearch} />
                    </button>
                  </div>
                </div>

                <div style={{ width: "100%" }} className="inputMobile">
                  <Link to="/sell">
                    {" "}
                    <FontAwesomeIcon id="camico" icon={faCamera} />
                    <span
                      style={{
                        fontSize: "22px",
                        marginLeft: "20px",
                        color: "black",
                      }}
                    >
                      Start selling
                    </span>
                  </Link>
                  <br />
                  <Link to="/myads">
                    {" "}
                    <FontAwesomeIcon id="camico" icon={faBook} />
                    <span
                      style={{
                        fontSize: "22px",
                        marginLeft: "20px",
                        color: "black",
                      }}
                    >
                      My Ads
                    </span>
                  </Link>

                  <br />
                  <Link to="/chat">
                    {" "}
                    <FontAwesomeIcon id="camico" icon={faComment} />
                    <span
                      style={{
                        fontSize: "22px",
                        marginLeft: "20px",
                        color: "black",
                      }}
                    >
                      Chat
                    </span>
                  </Link>
                </div>
              </li>

              <li className="nav-item">
                {this.state.isLoggedin ? (
                  //    This is the dropdown items

                  <div id="DropUser" className="dropdown">
                    <button
                      type="button"
                      style={{
                        borderRadius: "50%",
                        width: "35px",
                        height: "35px",
                        marginTop: "-20px",
                        display: "flex",
                      }}
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        style={{
                          borderRadius: "50%",
                          width: "35px",
                          height: "35px",
                          marginTop: "-4.4px",
                          marginLeft: "-5.5px",
                        }}
                        // src={firebase.auth().currentUser.photoURL}
                        alt=""
                      />
                      <FontAwesomeIcon
                        style={{ color: "grey", fontWeight: "initial" }}
                        id="Icon"
                        icon={faAngleDown}
                      />
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenu2"
                    >
                      <Link
                        style={{ marginLeft: "0%", marginBottom: "5px" }}
                        to="/sell"
                        className="btn btn-warning btn-outline-info btn-block text-left"
                        type="button"
                      >
                        <FontAwesomeIcon id="camico" icon={faCamera} />{" "}
                        <span style={{ fontSize: "18px" }}> Start Selling</span>
                      </Link>
                      <Link
                        style={{ marginLeft: "0%", marginBottom: "5px" }}
                        to="/MyAds"
                        className="btn btn-secondary btn-block btn-outline-light text-left"
                        type="button"
                      >
                        <FontAwesomeIcon id="camico" icon={faBook} />{" "}
                        <span style={{ fontSize: "20px" }}>My Ads</span>
                      </Link>
                      <button
                        style={{ width: "100%" }}
                        className="btn btn-danger"
                        onClick={this.sign_out}
                      >
                        <span style={{ fontSize: "20px" }}>SignOut !</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  //    This is the drop down items
                  <div id="btnbtnlogin" className="btn btn-transparent">
                    {" "}
                    <Link className="btn btn-primary btn-lg" to="/login">
                      Login
                    </Link>{" "}
                  </div>
                )}

                <div className="inputMobile">
                  <Link>
                    {" "}
                    <FontAwesomeIcon id="camico" icon={faQuestionCircle} />
                    <span
                      style={{
                        fontSize: "22px",
                        marginLeft: "20px",
                        color: "black",
                      }}
                    >
                      Help
                    </span>
                  </Link>
                  <br />

                  {this.state.isLoggedin ? (
                    <div>
                      <div>
                        <button
                          onClick={this.sign_out}
                          className="btn btn-outline-light btn-danger"
                          style={{ textAlign: "center", fontSize: "25px" }}
                        >
                          SignOut
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div
                        className="btn btn-primary"
                        style={{ textAlign: "center", fontSize: "25px" }}
                      >
                        <Link className="btn btn-primary btn-lg" to="/login">
                          Login
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </li>
              <li className="nav-item">
                {this.state.isLoggedin ? (
                  <Link id="fachat" className="inputDesktop" to="/chat">
                    {" "}
                    <FontAwesomeIcon
                      className="text-dark"
                      style={{
                        fontSize: "30px",
                        marginLeft: "15px",
                        marginTop: "15px",
                      }}
                      icon={faComment}
                    />
                  </Link>
                ) : (
                  <span></span>
                )}

              </li>
              <li className="nav-item">
                {this.state.isLoggedin ? (
              <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenu2"
                    >
                      <Link
                        style={{ marginLeft: "0%", marginBottom: "5px" }}
                        to="/sell"
                        className="btn btn-warning btn-outline-info btn-block text-left"
                        type="button"
                      >
                        <FontAwesomeIcon id="camico" icon={faCamera} />{" "}
                        <span style={{ fontSize: "18px" }}> Start Selling</span>
                      </Link>
                      
                    </div>
                 
                 ) : (
                  <span></span>
                )}
                </li>
              <li className="nav-item">
                {this.state.isLoggedin ? (
                <div>
                {this.state.newnotification ? (
                  
                <div className="" onClick={() => this.Notification()}>
                  <img style={{pointerEvents:"all",cursor:"pointer"}} src="https://uswat.edu.pk/wp-content/uploads/2019/10/image-11.png" height="50px" width="50px" onClick={() => this.Notification}  />
                  <div style={{position:"absolute", height:"220px", width:"230px",maxHeight:"220px",overflowY:"scroll",display:"none",backgroundColor:"black",textAlign:"left"}} id="notificationbox"> 
                  {this.state.items}
                  
                    </div>
                 </div>
                ) : (
                  <img src="https://www.desientrepreneurs.com/wp-content/uploads/2018/04/push-notifications-icon.png" height="50px" width="50px"/>
                )}
                 </div>
                ) : (
                  <span></span>
                )}
              </li>
              <li className="nav-item">
                {this.state.isLoggedin ? (
                  <Link to="/sell" id="sellbtn" className="btn btn-info">
                    SELL
                  </Link>
                ) : (
                  // <Link id="sellbtn" to="" className="btn btn-info">SELL</Link>
                  <div>
                    <Link
                      id="sellbtn"
                      className=" btn btn-warning btn-lg"
                      to="/Signup"
                    >
                      Sign Up
                    </Link>
                    {/* <div className="btn btn-outline-dark btn-warning" style={{ marginLeft: "170%", marginTop: "2%" }}><Login /></div> */}
                  </div>
                )}
              </li>
              <li className="nav-item">
                {this.state.isLoggedin ? (
                  <button className=" btn btn-warning btn-lg" onClick={this.sign_out}>Sign Out</button>
                ) : (
                  // <Link id="sellbtn" to="" className="btn btn-info">SELL</Link>
                  <div>
                   " <Link
                      id="sellbtn"
                      className=" btn btn-warning btn-lg"
                      to="/RiderSignup"
                    >
                      Rider Sign Up
                    </Link>
                    {/* <div clas"sName="btn btn-outline-dark btn-warning" style={{ marginLeft: "170%", marginTop: "2%" }}><Login /></div> */}
                  </div>
                )}
              </li>

              
            </ul>
          </div>
          </nav>
</div>


             )
            }
          </div>
         



       

        {/* This is bootstrap navigation bar */}


  
      </div>
      
    );
  }
}

const mapStateToProps = (state) => ({
  USER_AUTH_DATA: state.auth.USER,
  users_ads: state.app.GET_SELL,
  search_ads: state.app.SETSEARCHEDDATA,
  currentCondition: state.app.SETCONDITION,
});
//updating the data of the state
const mapDispatchToProp = (dispatch) => ({
  setSearchedData: (data) => dispatch(setSearchedData(data)),
  showCondition: (data) => dispatch(showCondition(data)),
});
//updating the data of the state

export default connect(mapStateToProps, mapDispatchToProp)(Header);
