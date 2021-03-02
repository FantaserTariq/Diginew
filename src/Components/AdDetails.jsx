import React from "react";
import axios from "axios"
import { get_seller_all_data } from ".././store/action/index";
import Categories from "./Categories";
import { connect } from "react-redux";
import Header from "./Header";
import { Link } from "react-router-dom";
import Ads from "./Ads";
import Footer from "./Footer";
import frontPic from "../UI/front.png";
import "../Styling/Header.css";
import "../Styling/Home.css";
import "../Styling/AdDetails.css";
import history from "../history";
import { FiPhone } from "react-icons/fi";

class AdDetails extends React.Component {
  constructor(props) {
    super(props);
    const Location = history.location.pathname;
    this.state = {
      key: "",
      path: Location,
      productDetail:{},
      userdetails:[],
    };
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
          this.setState({userdetails:tempor},() => {
              console.log(this.state.userdetails, 'dealersOverallTotal1');
            });
          if(this.state.userdetails){
          console.log(this.state.userdetails,"user details");
          }
      }
          }
  
      
    console.log("here")
    console.log(this.props.SET_KEY)
    console.log(this.props.USER_AUTH_DATA)
    console.log(this.state.key)
    let temp;
    await this.getdata().then(data=>{
      temp=data.data;
    });
    console.log(temp,"we")
    this.setState({productDetail:temp},()=>{
      console.log("fasds",this.state.productDetail);
    })
    
}

handleClick = async(c,event) => {
  await this.componentDidMount();
  console.log(this.state.userdetails,"user details now");
   alert(event.target.innerText);
   //////////////////////////////////////////////
   let name = this.state.userdetails.name;
   let email = this.state.userdetails.email;
   let id=this.state.userdetails.id;
   // let photo = firebase.auth().currentUser.photoURL;
   let category=c;
   let subCategory=event.target.innerText;

   let Selldata = {
       SellerName: name,
       SellerEmail: email,
       SellerId:id,
       // SellerPhoto: photo,
       Category: category,
       SubCategory:subCategory
   }
   console.log("Inside==>", this.state.SellData)
   this.props.set_seller_data(Selldata)
   this.setState({
       SellData: Selldata,
       condition: true
   })
   //////////////////////////////////////////////
   
}
async getdata(){
  var apiBaseUrl = "http://localhost:5000/products/";
  var self = this;
  let temper
  console.log("this.prop",this.props.SET_KEY);
return await axios.get(apiBaseUrl+'getProducts/'+this.props.SET_KEY)
}

  render() {



    console.log(this.props.SET_KEY);
    console.log(
      "firebase sales data in AdDetails",
      this.state.productDetail
    );
    return (
      <div>
        <div className="fixed-top" style={{ marginTop: "0px", width: "100%" }}>
          <Header />
        </div>
        <div id="structure">
          <Categories />
          <hr />

          <div
            style={{ borderRadius: "1%", marginLeft: "320px", marginTop: "3%" }}
          >
            <h6 className="text-dark">
              Home / {this.state.productDetail.category}/
              {this.state.productDetail.subCategory}
            </h6>
          </div>
          <br />

          {/* This is the picture frame */}
          <div id="main">
            <div style={{width: "800px", height: "800px", marginRight: "150px"}}>
            <img
              id="image"
              src={this.state.productDetail.image}
              alt=""
            />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div id="pricedaba" style={{display: "flex"}, {marginBottom: "-8px"}}>
                <div className="setMargin" style={{marginTop: "15px"}}>
                  <h2 style={{fontSize: "23px"}, {fontWeight: "bold"}} className="text-dark">
                    {" "}
                    Rs {this.state.productDetail.price}
                  </h2>
                  <span className="text-secondary" style={{ fontSize: "18px" }}>
                    {this.state.productDetail.title}
                  </span>
                  <br />
                  <div style={{ display: "flex" }}>
                    <p
                      className="text-secondary"
                      style={{ fontSize: "15px", marginTop: "25px" }}
                    >
                      {this.state.productDetail.selectLocation}
                    </p>
                    <p
                      className="text-secondary text-right"
                      style={{
                        fontSize: "15px",
                        marginTop: "25px",
                        marginLeft: "50px",
                      }}
                    >
                      {this.state.productDetail.dateTime}
                    </p>
                  </div>
                </div>
              </div>
              <div id="sellerdaba">
                <div className="setMargin">
                  <h4 style={{ marginTop: "3%" }} className="text-dark">
                    Seller description
                  </h4>
                  <div style={{ display: "flex" }}>
                    <img
                      style={{
                        marginTop: "10px",
                        marginLeft: "10px",
                        borderRadius: "50%",
                        width: "35px",
                        height: "35px",
                      }}
                      src={this.state.productDetail.SellerPhoto}
                      alt=""
                    />
                    <p
                      style={{
                        fontSize: "15px",
                        marginLeft: "16px",
                        fontWeight: "bolder",
                        marginTop: "16px",
                      }}
                    >
                      {this.state.productDetail.SellerName}
                    </p>
                  </div>
                </div>
                <Link
                  to="/chat"
                  style={{
                    marginLeft: "5%",
                    marginTop: "4%",
                    fontSize: "15px",
                    width: "80%",
                  }}
                  className="btn btn-primary text-center"
                >
                  Chat with seller
                </Link>
                <h6
                  
                  className="text-center text-dark" style={{marginRight: "50px"},{marginTop: "5px"}}
                >
                  {" "}
                  <FiPhone style={{ fontSize: "23px" },{marginTop: "10px"},{marginRight: "10px"}} />{" "}
                  {this.state.productDetail.mobilePhone}
                </h6>
                <div style={{ display: "flex" }}>
                <h4 style={{ marginLeft: "10px" }} className="text-dark">
                    Posted In:
                  </h4>
                  <p
                    className="text-secondary"
                    style={{
                      fontSize: "15px",
                      marginLeft: "25%",
                      marginTop: "2.5%",
                    }}
                  >
                    {this.state.productDetail.selectLocation}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* This is the picture frame */}

          {/* This is the description */}

         
          <div id="disc">
                        <div style={{ marginLeft: "40px" }, {marginTop: "8px"}}>
                            <h3 style={{fontSize: "20px"},{fontWeight: "300"},{color: "color: #002f34"}} className="text-dark">Details :</h3>
                            <div style={{ display: "flex" }}>
                                <p style={{ marginLeft: "2%", fontWeight: "bolder" }} className="text-secondary">Condition</p>
                                <p className="text-dark" style={{ fontSize: "15px", marginLeft: "25%" }}>{this.state.productDetail.itemCondition}</p>
                            </div>
                        </div>
                        <hr />
                        <div style={{ marginLeft: "40px" }, {marginTop: "8px"}}>
                        <h3 style={{fontSize: "20px"},{fontWeight: "300"},{color: "color: #002f34"}} className="text-dark">Description :</h3>
                            
                          
                                <p className="text-dark" style={{ fontSize: "15px", marginLeft: "2%" }}>{this.state.productDetail.description}</p>
                            
                        </div>
                    </div>
        </div>

        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
 
  SET_KEY: state.app.SET_KEY,
  USER_AUTH_DATA: state.auth.USER,
  users_ads: state.app.GET_SELL,

  
}

);
//updating the data of the state
// const mapDispatchToProp = (dispatch) => ({
//     setCurrentKey: (key) => setCurrentKey(key),
// })
//updating the data of the state
export default connect(mapStateToProps, null)(AdDetails);
