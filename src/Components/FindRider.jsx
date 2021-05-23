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

   componentDidMount(){
    
    var apiBaseUrl = "http://localhost:5000/findrider/getActiveRiders";
    
    
        console.log(apiBaseUrl);
        axios.get(apiBaseUrl)
        .then(function (response) {

        console.log(response.data);
        if(response.data){
        
          // let sellerdet;
          // await this.getSellerdata().then((data)=>{
          //   sellerdet=data;
          // })

          // if(sellerdet){
          //   let riderM=sellerdet.data.find(a=>a._id==response.data[response.data.length-1].riderId)
          // }
          // if(riderM){
          //   console.log("this is our rider",riderM)

          // }
        }
        if(response.data.code == 200){
        
        
        console.log("done",response)
        }
        
        })}
    

     async getSellerdata() {
    var apiBaseUrl = "http://localhost:5000/rider/";
    var self = this;
    let temper;
    console.log("this.prop", this.props.SET_KEY);
    return await axios.get(apiBaseUrl + "getAllUsers");
  }
   
    

  render() {
    




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
              <Col>
              <video width={1000} height={520}autoPlay ={true}>
  <source src="assets/vlc-record-2021-03-08-22h54m30s-Rec_20210308 22.52.13.mp4-.mp4" type="video/mp4" />
  
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
  }
}

export default OrderPage;
