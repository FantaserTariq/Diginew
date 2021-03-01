import React from "react";
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
    };
  }
  render() {
    console.log(this.props.SET_KEY);
    console.log(
      "firebase sales data in AdDetails",
      this.props.users_ads[this.props.SET_KEY]
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
              Home / {this.props.users_ads[this.props.SET_KEY].Category}/
              {this.props.users_ads[this.props.SET_KEY].SubCategory}
            </h6>
          </div>
          <br />

          {/* This is the picture frame */}
          <div id="main">
            <div style={{width: "800px", height: "800px", marginRight: "150px"}}>
            <img
              id="image"
              src={this.props.users_ads[this.props.SET_KEY].url}
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
                    Rs {this.props.users_ads[this.props.SET_KEY].price}
                  </h2>
                  <span className="text-secondary" style={{ fontSize: "18px" }}>
                    {this.props.users_ads[this.props.SET_KEY].title}
                  </span>
                  <br />
                  <div style={{ display: "flex" }}>
                    <p
                      className="text-secondary"
                      style={{ fontSize: "15px", marginTop: "25px" }}
                    >
                      {this.props.users_ads[this.props.SET_KEY].selectLocation}
                    </p>
                    <p
                      className="text-secondary text-right"
                      style={{
                        fontSize: "15px",
                        marginTop: "25px",
                        marginLeft: "50px",
                      }}
                    >
                      {this.props.users_ads[this.props.SET_KEY].dateTime}
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
                      src={this.props.users_ads[this.props.SET_KEY].SellerPhoto}
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
                      {this.props.users_ads[this.props.SET_KEY].SellerName}
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
                  {this.props.users_ads[this.props.SET_KEY].mobilePhone}
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
                    {this.props.users_ads[this.props.SET_KEY].selectLocation}
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
                                <p className="text-dark" style={{ fontSize: "15px", marginLeft: "25%" }}>{this.props.users_ads[this.props.SET_KEY].itemCondition}</p>
                            </div>
                        </div>
                        <hr />
                        <div style={{ marginLeft: "40px" }, {marginTop: "8px"}}>
                        <h3 style={{fontSize: "20px"},{fontWeight: "300"},{color: "color: #002f34"}} className="text-dark">Description :</h3>
                            
                          
                                <p className="text-dark" style={{ fontSize: "15px", marginLeft: "2%" }}>{this.props.users_ads[this.props.SET_KEY].description}</p>
                            
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
});
//updating the data of the state
// const mapDispatchToProp = (dispatch) => ({
//     setCurrentKey: (key) => setCurrentKey(key),
// })
//updating the data of the state
export default connect(mapStateToProps, null)(AdDetails);
