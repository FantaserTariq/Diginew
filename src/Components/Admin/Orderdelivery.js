import React from 'react';
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Footer from "./Footer";
import { Router, Link } from "react-router-dom";
import ViewList from "./ViewList";

class Orderdelivery extends React.Component{
    render(){
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
                <h4 className="page-title">Order Delivery</h4>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-right">
                  <li className="breadcrumb-item"><a href="javascript:void(0);">DigiMart</a></li>
                  <li className="breadcrumb-item active">Order Delivery</li>
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
                  <h4 className="mt-0 header-title">Order Delivery</h4>
                  <div className="px-4">
                  <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                    
                    <thead className="font-weight-bold">
                      <tr>
                        <td>Order Name</td>
                        <td>Order ID</td>
                        <td>Seller Name</td>
                        <td>Buyer Name</td>
                        <td></td>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Wooden Table</td>
                        <td>ty2345678</td>
                        <td>Ali Sardar</td>
                        <td>Muzafar Khan</td>
                      <td className="text-center">
                          <div className="pb-2">
                            <Link to='#'>
                              <a href="#" className="btn btn-danger btn-md">Finding Rider</a>
                            </Link>
                            </div>
                        
                          <div className="pb-2">
                            <Link to='#'>
                              <a href="#" className="btn btn-primary btn-md">Pickup</a>
                            </Link>
                            </div>
                        
                          <div className="pb-2">
                            <Link to='#'>
                              <a href="#" className="btn btn-primary btn-md">On the Way</a>
                            </Link>
                            </div>
                        
                          <div>
                            <Link to='#'>
                              <a href="#" className="btn btn-success btn-md">Delivered</a>
                            </Link>
                            </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Velvet Chair</td>
                        <td>tq109843134</td>
                        <td>Ali Sardar</td>
                        <td>Muzafar Khan</td>
                      <td className="text-center">
                          <div className="pb-2">
                            <Link to='#'>
                              <a href="#" className="btn btn-danger btn-md">Finding Rider</a>
                            </Link>
                            </div>
                        
                          <div className="pb-2">
                            <Link to='#'>
                              <a href="#" className="btn btn-primary btn-md">Pickup</a>
                            </Link>
                            </div>
                        
                          <div className="pb-2">
                            <Link to='#'>
                              <a href="#" className="btn btn-primary btn-md">On the Way</a>
                            </Link>
                            </div>
                        
                          <div>
                            <Link to='#'>
                              <a href="#" className="btn btn-success btn-md">Delivered</a>
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
  export default Orderdelivery;