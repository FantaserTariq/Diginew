import React from 'react';
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Footer from "./Footer";
import { Router, Link } from "react-router-dom";
import ViewList from "./ViewList";
import axios from 'axios';
class Ordertracking extends React.Component{
  state = {
  
    userads: [],
  };


  async getdata(){
    var apiBaseUrl = "http://localhost:5000/order/";
    var self = this;
    let temper
  return await axios.get(apiBaseUrl+'getAllOrders')
    
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
       
}

  displayBlogPost = (post) => {
    console.log(post)
    if (!post.length) return null;
    
    var count = 1;
    let t = post.map((post, index) => {
      console.log(post)
      return (
          <tr className='unread'>
            <td style={{ textAlign: 'center' }}>{"hello1"}</td>
            <td style={{ textAlign: 'center' }}>{"hello1"}</td>
            <td style={{ textAlign: 'center' }}>{"hello1"}</td>
          
            </tr>
      );
    })}

    ApproveRequest=  async (value)=>{
    
      console.log(value)
      try {
        var data = new FormData();
   
      
 
        data = { msg: "Your order : "+ value._id + " has been approved",
                orderId:value._id  };

        let abc=localStorage.getItem('orderId')
  
        const resp = await axios.post(
          'http://localhost:5000/users/setNotification/'+value.user._id,
          data
        );
        document.getElementById("approveButton").style.display="none"
        document.getElementById("findriderButton").style.display="block"
        
        localStorage.setItem("myOrder",value._id)
        
     
        return resp.data;
      } catch (error) {
        console.log(error);
      }
    }


    render(){
      const items = []
      const row=[]
    {this.state.userads.map((value, index) => {
      if(value._id && value.imageUrl && value.user._id)
      
      items.push(<tr><td key={index}><img height="100px" width="100px" src={value.imageUrl}></img></td><td key={index}>{value.user.firstName?value.user.firstName:"N/A"}</td><td key={index}>{value._id}</td><td> <button id="approveButton"  onClick={() => this.ApproveRequest(value)}>Approval</button></td><td>  <Link style={{display:"none"}} id="findriderButton"   to="/FindRider" >Find Rider</Link></td></tr>)
      
      
    })}
        return(
  <div>

  <div id="wrapper">
  
  <Header/>
  <Sidebar/>

    <div className="content-page">

      <div className="content">
        <div className="container-fluid">
          <div className="page-title-box">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <h4 className="page-title">Order Tracking</h4>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-right">
                  <li className="breadcrumb-item"><a href="javascript:void(0);">DigiMart</a></li>
                  <li className="breadcrumb-item active">Order Tracking</li>
                </ol>
              </div>
            </div> {/* end row */}
          </div>
          {/* end page-title */}
        </div>
        {/* container-fluid */}
      </div>
      {/* content */}

      

        <div>
          <div className="row">
            <div className="col-12">
              <div className="card m-b-30">
                <div className="card-body">
                  <h4 className="mt-0 header-title">Order Tracking</h4>
                  <div className="px-4">
                  <table
                        id='datatable'
                        className='table table-bordered dt-responsive nowrap'
                        style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}
                      >

                        <tbody>{this.displayBlogPost(this.state.userads)}</tbody>
                      </table>
                  <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                    
                    <thead className="font-weight-bold">
                      <tr>
                        <td>Order Name</td>
                        <td>Order ID</td>
                        <td>Seller Name</td>
                        <td>Approval Notification</td>
                       
                        
                      </tr>
                      
                    </thead>
                 {row}
                  
      {items}
     

                   

                  </table>

      
                  </div>

                </div>
              </div>
            </div> {/* end col */}
          </div> {/* end row */}
        </div>



  <Footer/>

    </div>
  </div>

</div>
        );
      }
  }
  export default Ordertracking;