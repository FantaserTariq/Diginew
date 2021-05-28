import React from 'react';
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Footer from "./Footer";

class Buyer extends React.Component{
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
          <h4 className="page-title">Buyer</h4>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-right">
            <li className="breadcrumb-item"><a href="javascript:void(0);">DigiMart</a></li>
            <li className="breadcrumb-item active">Buyer</li>
          </ol>
        </div>
      </div> {/* end row */}
    </div>
    {/* end page-title */}
  </div>
  {/* container-fluid */}
</div>
{/* content */}

{/* View Sellers Start */}
<div>
    <div className="row">
      <div className="col-12">
        <div className="card m-b-30">
          <div className="card-body">
            <h4 className="mt-0 header-title">View Buyers</h4>
            <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Password</th>
                  <th>Address</th>
                  <th>E-Mail</th>
                  <th>Start date</th>
                  <th>Orders</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tiger Nixon</td>
                  <td>brt45678</td>
                  <td>Edinburgh</td>
                  <td>tiger@gmail.com</td>
                  <td>2011/04/25</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Garrett Winters</td>
                  <td>dfg567b</td>
                  <td>Tokyo</td>
                  <td>garrett@gmail.com</td>
                  <td>2011/07/25</td>
                  <td>10</td>
                </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div> {/* end col */}
    </div> {/* end row */}
  </div>
{/* View Sellers Ends */}

<Footer/>

</div>
</div>
<Footer/>
</div>
);
}
}
export default Buyer;