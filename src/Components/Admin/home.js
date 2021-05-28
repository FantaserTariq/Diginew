import React from 'react';
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Footer from "./Footer";


class home extends React.Component{
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
                <h4 className="page-title">Dashboard</h4>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-right">
                  <li className="breadcrumb-item"><a href="javascript:void(0);">DigiMart</a></li>
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>
              </div>
            </div> {/* end row */}
            <div>

{/* Active Sessions Starts */}
{/* end page-title */}
<div className="row">
            <div className="col-sm-6 col-xl-3">
              <div className="card">
                <div className="card-heading p-4">
                  <div className="mini-stat-icon float-right">
                    <i className="mdi mdi-cube-outline bg-primary  text-white" />
                  </div>
                  <div>
                    <h5 className="font-16">Active Sessions</h5>
                  </div>
                  <h3 className="mt-4">43,225</h3>
                  <div className="progress mt-4" style={{height: '4px'}}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="card">
                <div className="card-heading p-4">
                  <div className="mini-stat-icon float-right">
                    <i className="mdi mdi-briefcase-check bg-success text-white" />
                  </div>
                  <div>
                    <h5 className="font-16">Total Revenue</h5>
                  </div>
                  <h3 className="mt-4">$73,265</h3>
                  <div className="progress mt-4" style={{height: '4px'}}>
                    <div className="progress-bar bg-success" role="progressbar" style={{width: '88%'}} aria-valuenow={88} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="card">
                <div className="card-heading p-4">
                  <div className="mini-stat-icon float-right">
                    <i className="mdi mdi-tag-text-outline bg-warning text-white" />
                  </div>
                  <div>
                    <h5 className="font-16">Average Price</h5>
                  </div>
                  <h3 className="mt-4">447</h3>
                  <div className="progress mt-4" style={{height: '4px'}}>
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '68%'}} aria-valuenow={68} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="card">
                <div className="card-heading p-4">
                  <div className="mini-stat-icon float-right">
                    <i className="mdi mdi-buffer bg-danger text-white" />
                  </div>
                  <div>
                    <h5 className="font-16">Add to Card</h5>
                  </div>
                  <h3 className="mt-4">86%</h3>
                  <div className="progress mt-4" style={{height: '4px'}}>
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '82%'}} aria-valuenow={82} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  </div>
              </div>
            </div>
          </div>

{/* Active Sessions Ends */}

          {/* barchart */}
            <div className="col-xl-6">
              <div className="card m-b-30">
                <div className="card-body">
                  <h4 className="mt-0 header-title">Bar Chart</h4>
                  <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                    <li className="list-inline-item">
                      <h5>3654</h5>
                      <p className="text-muted">Marketplace</p>
                    </li>
                    <li className="list-inline-item">
                      <h5>954</h5>
                      <p className="text-muted">Last week</p>
                    </li>
                    <li className="list-inline-item">
                      <h5>8462</h5>
                      <p className="text-muted">Last Month</p>
                    </li>
                  </ul>
                  <div id="morris-bar-example" className="morris-charts" style={{height: '300px'}} />
                </div>
              </div>
            </div> {/* end col */}

            {/* Donutchat */}
            <div>
            <div> {/* end col */}
            <div className="col-xl-6">
              <div className="card m-b-30">
                <div className="card-body">
                  <h4 className="mt-0 header-title">Donut Chart</h4>
                  <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                    <li className="list-inline-item">
                      <h5>3654</h5>
                      <p className="text-muted">Marketplace</p>
                    </li>
                    <li className="list-inline-item">
                      <h5>954</h5>
                      <p className="text-muted">Last week</p>
                    </li>
                    <li className="list-inline-item">
                      <h5>8462</h5>
                      <p className="text-muted">Last Month</p>
                    </li>
                  </ul>
                  <div id="morris-donut-example" className="morris-charts" style={{height: '300px'}} />
                </div>
              </div>
            </div> {/* end col */}
          </div> {/* end row */}
            </div>


            {/* Line chart */}
            {/* end col */}
            <div className="col-xl-4">
              <div className="card bg-info m-b-30">
                <div className="card-body">
                  <h4 className="mt-0 text-white header-title">Line Chart</h4>
                  <div id="morris-line-example-info" className="morris-charts" style={{height: '300px'}} />
                </div>
              </div>
            </div> {/* end col */}
          </div> {/* end row */}
            </div>

            </div>
          </div>
          {/* end page-title */}
        </div>
        {/* container-fluid */}
      </div>
      {/* content */}


{/* Active Orders Starts */}
<div className="row">
            <div className="col-xl-12">
              <div className="card m-b-30">
                <div className="card-body">
                  <h4 className="mt-0 header-title mb-4">Active Deals</h4>
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Status</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Contact</th>
                          <th scope="col">Location</th>
                          <th scope="col" colSpan={2}>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Philip Smead</td>
                          <td><span className="badge badge-success">Delivered</span></td>
                          <td>$9,420,000</td>
                          <td>
                            <div>
                              <img src="assets/images/users/user-2.jpg" alt="" className="thumb-md rounded-circle mr-2" /> Philip Smead
                            </div>
                          </td>
                          <td>Houston, TX 77074</td>
                          <td>15/1/2018</td>
                          <td>
                            <div>
                              <a href="#" className="btn btn-primary btn-sm">Edit</a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Brent Shipley</td>
                          <td><span className="badge badge-warning">Pending</span></td>
                          <td>$3,120,000</td>
                          <td>
                            <div>
                              <img src="assets/images/users/user-3.jpg" alt="" className="thumb-md rounded-circle mr-2" /> Brent Shipley
                            </div>
                          </td>
                          <td>Oakland, CA 94612</td>
                          <td>16/1/2019</td>
                          <td>
                            <div>
                              <a href="#" className="btn btn-primary btn-sm">Edit</a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Robert Sitton</td>
                          <td><span className="badge badge-success">Delivered</span></td>
                          <td>$6,360,000</td>
                          <td>
                            <div>
                              <img src="assets/images/users/user-4.jpg" alt="" className="thumb-md rounded-circle mr-2" /> Robert Sitton
                            </div>
                          </td>
                          <td>Hebron, ME 04238</td>
                          <td>17/1/2019</td>
                          <td>
                            <div>
                              <a href="#" className="btn btn-primary btn-sm">Edit</a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Alberto Jackson</td>
                          <td><span className="badge badge-danger">Cancel</span></td>
                          <td>$5,200,000</td>
                          <td>
                            <div>
                              <img src="assets/images/users/user-5.jpg" alt="" className="thumb-md rounded-circle mr-2" /> Alberto Jackson
                            </div>
                          </td>
                          <td>Salinas, CA 93901</td>
                          <td>18/1/2019</td>
                          <td>
                            <div>
                              <a href="#" className="btn btn-primary btn-sm">Edit</a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>David Sanchez</td>
                          <td><span className="badge badge-success">Delivered</span></td>
                          <td>$7,250,000</td>
                          <td>
                            <div>
                              <img src="assets/images/users/user-6.jpg" alt="" className="thumb-md rounded-circle mr-2" /> David Sanchez
                            </div>
                          </td>
                          <td>Cincinnati, OH 45202</td>
                          <td>19/1/2019</td>
                          <td>
                            <div>
                              <a href="#" className="btn btn-primary btn-sm">Edit</a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
{/* Active Orders Ends */}
  <Footer/>

    </div>

        );
      }
  }
  export default home;