import React from 'react';
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Footer from "./Footer";
import { Router, Link } from "react-router-dom";
import ViewList from "./ViewList";

class Sellertracking extends React.Component{
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
                  <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                  <thead>
                      <tr>
                        <th>Order Name</th>
                        <th>Order ID</th>
                        <th>Prize</th>
                        <th>Order Tracking</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Wooden Table</td>
                        <td>brt45678</td>
                        <td>5000 R.s</td>
                        <td>
                          <p className="btn-danger">Finding Rider</p>
                          <p className="btn-primary">Pickup</p>
                          <p className="btn-primary">On thw Way</p>
                          <p className="btn-success">Delivered</p>
                          </td>
                      </tr>

                      <tr>
                      <td>Velvet Bedsheet</td>
                        <td>jh23456789</td>
                        <td>10000 R.s</td>
                        <td>
                          <p className="btn-danger">Finding Rider</p>
                          <p className="btn-primary">Pickup</p>
                          <p className="btn-primary">On thw Way</p>
                          <p className="btn-success">Delivered</p>
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
  export default Sellertracking;