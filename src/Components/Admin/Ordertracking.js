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


    render(){
      const items = []
    {this.state.userads.map((value, index) => {
      items.push(<td key={index}><img src={value.imageUrl}></img></td>)
      items.push(<td key={index}>{value.user.firstName}</td>)
      
      items.push(<td key={index}>{value.product._id}</td>)
      
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
                        <thead>
                          <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                          </tr>
                        </thead>
                        <tbody>{this.displayBlogPost(this.state.userads)}</tbody>
                      </table>
                  <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                    
                    <thead className="font-weight-bold">
                      <tr>
                        <td>Order Name</td>
                        <td>Order ID</td>
                        <td>Seller Name</td>
                        <td></td>
                      </tr>
                    </thead>
                    <tr>
                  
      {items}

                    </tr>
                    <tbody>
                    <tr>
                        <td>Wooden Table</td>
                        <td>ty2345678</td>
                        <td>Ali Sardar</td>

                        {/* Inme se ek aye ga button */}
                      <td className="text-center">
                          <div className="pb-2">
                            <Link to='#'>
                              <a href="#" className="btn btn-danger btn-md">Finding Rider</a>
                            </Link>
                            </div>
                        
                          <div className="pb-2">
                            <Link to='#'>
                              <a href="#" className="btn btn-primary btn-md">or Pickup</a>
                            </Link>
                            </div>
                        
                          <div className="pb-2">
                            <Link to='#'>
                              <a href="#" className="btn btn-primary btn-md">or On the Way</a>
                            </Link>
                            </div>
                        
                          <div>
                            <Link to='#'>
                              <a href="#" className="btn btn-success btn-md">or Delivered</a>
                            </Link>
                            </div>
                        </td>
                      </tr>
                    
                    </tbody>
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