import React from 'react';
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Footer from "./Footer";
import { Router, Link } from "react-router-dom";
import ViewList from "./ViewList";

class Confirmation extends React.Component{
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
                <h4 className="page-title">Confirmation</h4>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-right">
                  <li className="breadcrumb-item"><a href="javascript:void(0);">DigiMart</a></li>
                  <li className="breadcrumb-item active">Confirmation</li>
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
                  <h4 className="mt-0 header-title">Confirmation list</h4>
                  <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                    <thead>
                      <tr>
                        <th>Seller Name</th>
                        <th>Id</th>
                        <th>Actions</th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Tiger Nixon</td>
                        <td>fg3456789</td>
                        <td>
                            <div className="pb-2">
                            <Link to='/viewlist'>
                              <a href="#" className="btn btn-primary btn-sm">View</a>
                            </Link>
                            </div>

                            <div className="pb-2">
                              <a href="#" className="btn btn-success btn-sm">Approve</a>
                            </div>

                            <div >
                              <a href="#" className="btn btn-danger btn-sm">DisApprove</a>
                            </div>
                          </td>
                      </tr>
                      <tr>
                        <td>Muhammad Salah</td>
                        <td>ff23457543</td>
                        <td>
                            <div className="pb-2">
                              <a href="#" className="btn btn-primary btn-sm">View</a>
                            </div>

                            <div className="pb-2">
                              <a href="#" className="btn btn-success btn-sm">Approve</a>
                            </div>

                            <div >
                              <a href="#" className="btn btn-danger btn-sm">DisApprove</a>
                            </div>
                          </td>
                      </tr>

                      </tbody>
                  </table>
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
  export default Confirmation;