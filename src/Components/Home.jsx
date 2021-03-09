import React from 'react';
import axios from "axios";
import { get_seller_all_data } from '.././store/action/index'
import Categories from './Categories'
import { connect } from "react-redux"
import Header from "./Header"
import Footer from "./Footer"
import { Link } from 'react-router-dom'
import Ads from './Ads'
import frontPic from '../UI/front.png'
import '../Styling/Header.css'
import '../Styling/Home.css'
import firebase from 'firebase/app';
import firebaseAuth from 'firebase/auth/dist/index.esm'
import NewHeader from './NewHeader';
import NewSidebar from './NewSidebar';
import Carousal from './Carousal'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userads:[]
      
        }
    }
   async getdata(){
        var apiBaseUrl = "http://localhost:5000/products/";
        var self = this;
        let temper
      return await axios.get(apiBaseUrl+'getAllProducts')
        // .then(async function (response) {
        // console.log(response);
        
        // if(response.data){
        //     console.log("sadsadsd",response.data);
           
        //     var a=await this.seting(response.data);
            
        //     temper=response.data;
        //     return (temper);
        // }
       
        // if(response.data.code == 200){
        // console.log("Login successfull");
        // }
       
        // else{
        // console.log(response.data.error);
        // alert(response.data.error);
        // }
        // })
        // .catch(function (error) {
        // console.log(error);
        // });
        // console.log("temper",temper);
        // if(temper){
        //     this.setState({userads:"ghghhhj"},() => {
        //         console.log(this.state.userads, 'dealersOverallTotal1');
        //       });
        // }
        
    }
    seting(inp){
        console.log(inp,"in set")
        this.setState({userads:inp.data},()=>{
            console.log("yoyo",this.state.userads)
        })
    }
   async componentDidMount() {
      
        console.log("here")
        let tempor=await this.getdata();
        console.log("csac",tempor);
        var a=await this.seting(tempor);
        
        
   
   
        this.props.get_seller_all_data();
    }
    deleteAll = () => {
        let database = firebase.database();
        let userRef = database.ref('WithoutSignIn');
        userRef.remove();
    }
    render() {
        console.log("firebase sales data", this.state.userads)
        console.log("Search ads props data is===>",this.props.search_ads)
        return (

         
            <div className="home-page">
                <div className="fixed-top" style={{ marginTop: "0px", width: "100%" }}>
                    {/* <button onClick={this.deleteAll} className="btn btn-danger btn-block">DELETE ALL THE DATA</button> */}
                    <Header/>

                    {/* <div className="side-bar">   <NewSidebar/></div> */}

                 
                </div>
                <div style={{ position: "relative", display: "block" }} id="structure">
                    <Categories />
{/* 
                    <div className="carousal">
                        <Carousal/>
                    </div>
                  */}
                    
                    <hr />
                    

                   
                    <div className="Featured_Ads" style={{marginLeft: "270px", marginTop: "20px"}}>
                            <h4>Featured Ads</h4>
                        </div>
                     {(this.props.currentCondition==true)?(
                        <ul style={{ position: "relative", marginTop: "2%" }}>
{/* This is another thing will be called later */}
                        
                        {this.state.userads.map((v, i) => {
                            return <li id="mosti" key={i}>
                                
                                <div style={{ display: "inline-block" }}>
                                    
                                    {/* {console.log("key==>",i)} */}
                                     
                                    <Ads
                                        index={v._id}
                                        url={v.image}
                                        email={v.SellerEmail}
                                        phone={v.mobilePhone}
                                        title={v.title}
                                        price={v.price}
                                        name={v.SellerName}
                                        category={v.Categories}
                                        userphoto={v.SellerPhoto}
                                        time={v.dateTime}
                                        description={v.description}
                                        itemCondition={v.itemCondition}
                                        mobile={v.mobilePhone}
                                        location={v.selectLocation}
                                    />

                                </div>
                            </li>
                        })}

                        {/* This is another thing will be called later */}
                    </ul>

                     ):(
<ul style={{ position: "relative", marginTop: "5%" }}>
{/* This is another thing will be called later */}
                        
                        {this.props.search_ads.map((v, i) => {
                            return <li id="mosti" key={i}>
                                <div style={{ display: "inline-block" }}>
                                    {/* {console.log("key==>",i)} */}
                                     
                                    <Ads
                                        index={v._id}
                                        url={v.image}
                                        email={v.SellerEmail}
                                        phone={v.mobilePhone}
                                        title={v.title}
                                        price={v.price}
                                        name={v.SellerName}
                                        category={v.Categories}
                                        userphoto={v.SellerPhoto}
                                        time={v.dateTime}
                                        description={v.description}
                                        itemCondition={v.itemCondition}
                                        mobile={v.mobilePhone}
                                        location={v.selectLocation}
                                    />

                                </div>
                            </li>
                        })}

                        {/* This is another thing will be called later */}
                    </ul>

                     )} 
  

                    

                    {/* here the components will be rendered */}
                    <div>

                    </div>
                    {/* here the components will be rendered */}
                    
                     {
                         (this.props.USER_AUTH_DATA.isSignedIn)?(
                             <div>
                               <Link id="sellbtnspecial" className=" btn btn-warning text-light btn-outline-dark btn-lg" to="/login">SELL</Link>
                             </div>
                         ):(
                             <span>

                             </span>
                         )
                     }
  

              

                </div>
                <div style={{ position: "relative", bottom: "0px" }}>
                    <Footer />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users_ads: state.app.GET_SELL,
    USER_AUTH_DATA: state.auth.USER,
    search_ads: state.app.SETSEARCHEDDATA,
    currentCondition:state.app.SETCONDITION
})

//updating the data of the state
const mapDispatchToProp = (dispatch) => ({
    get_seller_all_data: () => dispatch(get_seller_all_data())
})
//updating the data of the state
export default connect(mapStateToProps, mapDispatchToProp)(HomePage);
