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
import "../Styling/FindRider.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom"

class FindRider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     Video: true,
     location:"mainpage",
     RiderData:""
    };
    //this.componentDidMount()
    //alert(this.props.search_ads)
  }



// sesettData11(inp){
//   console.log("im here")
//   console.log("im here")
//   console.log("im here")
//   console.log("im here")
//   console.log("im here")
  // this.setState({RiderData:inp},()=>{
  //   console.log("yoyoeerfrfwefewqwdwefer",this.state.RiderData)

// })
// }

// getDataRider(){
//   let temp=localStorage.getItem("myOrder")
    
//     var apiBaseUrl = "http://localhost:5000/order/setRider/"+temp;
    
    
//         console.log(apiBaseUrl);
//         axios.post(apiBaseUrl)
//         .then(function (response) {

//         console.log(response.data);
//         if(response.data){
//             console.log("sdcwdcfveinhcnjwdcnjnjwcnjenjdcnjendc")
//             console.log("sdcwdcfveinhcnjwdcnjnjwcnjenjdcnjendc")
//             console.log(response.data.data)
//             this.sesettData11(response.data.data)
//           //var a= this.setData11(response.data.data)
      
//         }
//         }).catch(err=>{
//           console.log(err)
//         })
// }


async getdata(){
  let temp=localStorage.getItem("myOrder")
    let tempor=""
    var apiBaseUrl = "http://localhost:5000/order/setRider/"+temp;
        console.log(apiBaseUrl);
        axios.post(apiBaseUrl)
        .then(function (response) {

        console.log(response.data);
        if(response.data){
            console.log("sdcwdcfveinhcnjwdcnjnjwcnjenjdcnjendc")
            console.log("sdcwdcfveinhcnjwdcnjnjwcnjenjdcnjendc")
            console.log(response.data.data)
            tempor=response.data.data
            localStorage.setItem("mydata",JSON.stringify(response.data.data))
           return response.data.data
          //var a= this.setData11(response.data.data)
        }
        }).catch(err=>{
          console.log(err)
        })
        return tempor
}
seting(inp){
  console.log(inp,"in set")
  this.setState({RiderData:inp},()=>{
    console.log("yoyoeerfrfwefewqwdwefer",this.state.RiderData)
    console.log("fewfdasdasdasda")
    console.log("fewfdasdasdasda")
    console.log("fewfdasdasdasda")
    console.log("fewfdasdasdasda")

  })
}
async componentDidMount() {
  console.log("here")
  let tempor=await this.getdata();
  console.log("csac",tempor);
  var a=await this.seting(tempor);
  setTimeout(() => 
  
    this.setState({location:"Bank"}),this.setState({RiderData:JSON.parse(localStorage.getItem("mydata"))})

,4100);


  //setTimeout(() => this.setState({location:"Bank"},console.log("yoyoyoyoy")),4100) 
}



 
    

  //    async getSellerdata() {
  //   var apiBaseUrl = "http://localhost:5000/rider/";
  //   var self = this;
  //   let temper;
  //   console.log("this.prop", this.props.SET_KEY);
  //   return await axios.get(apiBaseUrl + "getAllUsers");
  // }
   
  

  render() {
    




    // return (

   
    // );

    return (
      <div>
        {(() => {
          if (this.state.location == 'mainpage') {
            return (
              <div>
      
              <div className="home-page">
                              <div className="fixed-top" style={{ marginTop: "0px", width: "100%" }}>
                                
                                  <Header/>
              
                           
              
                               
                              </div>
                              
                              <div style={{ position: "relative", display: "block" }} id="structure">
                                  <Categories />
                                  </div>
              
              
              
              
                    <Container>
              
                        <Row>
                            <Col id="myVideo">
                            <video width={1000} height={520} autoPlay ={true} muted= {true}>
                <source src="assets/vlc-record-2021-03-08-22h54m30s-Rec_20210308 22.52.13.mp4-.mp4" type="video/mp4"/>
                
                Your browser does not support the video tag.
              </video>
              </Col>
                        </Row>
                       
                    </Container>
                     <div style={{ position: "relative", bottom: "0px" }}>
                     <Footer />
                 </div>
                 </div>
                                      </div>
            );
          } else if (this.state.location == 'Bank') {
            return (
              <div>
                <div className='container'>
                  <div className='row'></div>

                  <div className='row'>
                    <div className='col-3'></div>

                    <div className='col'>
                      <h3></h3>
                      <div className='card mb-3'>
                        <div className='card-body'>
                          <h5 className='card-title'>
                            The Order has been issued to a rider
                          </h5>
                          <h4>Order Number: {this.state.RiderData && this.state.RiderData._id?this.state.RiderData._id:"785412323841"}</h4>
                          <h4>Delivery Date : {this.state.RiderData && this.state.RiderData.date_of_delivery?this.state.RiderData.date_of_delivery:"2021-06-04"}</h4>
                          <h4>Rider Name : {this.state.RiderData && this.state.RiderData.rider.firstName?this.state.RiderData.rider.firstName:"Fantaser"} </h4>
                          <h4>Rider Car Name: {this.state.RiderData && this.state.RiderData.rider.vehicleName?this.state.RiderData.rider.vehicleName:"Suzuki"}</h4>
                          <h4>Rider Car Number: {this.state.RiderData && this.state.RiderData.rider.vehicleNumber?this.state.RiderData.rider.vehicleNumber:"ABC123"}</h4>
                          
                          <div
                            style={
                              ({ marginTop: '20px' }, { marginBottom: '20px' })
                            }
                          >
                          
                          </div>
                        </div>
                      </div>
                      <Link
                        type='button'
                        class='btn btn-primary'
                        style={{  width:"80px",height:"30px"  }}
                       to="/admin"
                      >
                        Back
                      </Link>
                    </div>
                    <div className='col-3'></div>
                  </div>
                </div>
              </div>
            );
          } else if (this.state.location === 'Jazz') {
            return (
              <div>
                <div className='container'>
                  <div className='row'></div>

                  <div className='row'>
                    <div className='col-3'></div>

                    <div className='col'>
                      <h3></h3>
                      <div className='card mb-3'>
                        <div className='card-body'>
                          <h5 className='card-title'>
                            Please send the payment to the seller through
                            following payment method to proceed
                          </h5>
                          <h3>Jazz Cash</h3>
                          <h4>Account Title</h4>
                          <h4>Jazz Cash Number</h4>

                          <div
                            style={
                              ({ marginTop: '20px' }, { marginBottom: '20px' })
                            }
                          >
                            <label htmlFor='formFile' className='form-label'>
                              Please upload the screenshot of transaction
                            </label>
                            <input
                              className='form-control'
                              type='file'
                              id='formFile'
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        type='button'
                        class='btn btn-primary'
                        style={{ marginTop: '20px' }}
                        onClick={this.uploadImage}
                      >
                        Transferred, Next
                      </button>
                    </div>
                    <div className='col-3'></div>
                  </div>
                </div>
              </div>
            );
          } else if (this.state.location === 'Easy') {
            return (
              <div>
                <div className='container'>
                  <div className='row'></div>

                  <div className='row'>
                    <div className='col-3'></div>

                    <div className='col'>
                      <h3></h3>
                      <div className='card mb-3'>
                        <div className='card-body'>
                          <h5 className='card-title'>
                            Please send the payment to the seller through
                            following payment method to proceed
                          </h5>
                          <h3>EasyPaisa</h3>
                          <h4>Account Title</h4>
                          <h4>EasyPaisa Account Number</h4>

                          <div
                            style={
                              ({ marginTop: '20px' }, { marginBottom: '20px' })
                            }
                          >
                            <label htmlFor='formFile' className='form-label'>
                              Please upload the screenshot of transaction
                            </label>
                            <input
                              className='form-control'
                              type='file'
                              id='formFile'
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        type='button'
                        class='btn btn-primary'
                        style={{ marginTop: '20px' }}
                        onClick={this.uploadImage}
                      >
                        Transferred, Next
                      </button>
                    </div>
                    <div className='col-3'></div>
                  </div>
                </div>
              </div>
            );
          }
          else if (this.state.location === 'thankyou') {
            return (
              <div>
                <div className='container'>
                  <div className='row'></div>

                  <div className='row'>
                    <div className='col-3'></div>

                    <div className='col'>
                      <h3></h3>
                      <div className='card mb-3'>
                        <div className='card-body'>

                          <h4>Thankyou for choosing yor service..</h4>
                          <h5>Your payement will be verified in 24-48 hours and your product will be dispached immediately after that.</h5>
                          
                        </div>
                      </div>
                      <Link
                        style={{ marginLeft: "0%", marginBottom: "5px" }}
                        to="/"
                        className="btn btn-warning btn-outline-info btn-block text-left"
                        type="button"
                      >
                       
                        <span style={{ fontSize: "18px" }}>Home</span>
                      </Link>
                    </div>
                    <div className='col-3'></div>
                  </div>
                </div>
              </div>
            );
          }
        })()}
      </div>
    );
  }
}

export default FindRider;
