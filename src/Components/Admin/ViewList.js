import React from 'react';
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Footer from "./Footer";

class ViewList extends React.Component{
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
                <h4 className="page-title">ViewList</h4>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-right">
                  <li className="breadcrumb-item"><a href="javascript:void(0);">DigiMart</a></li>
                  <li className="breadcrumb-item active">ViewlIst</li>
                </ol>
              </div>
            </div> {/* end row */}
          </div>
          {/* end page-title */}
        </div>
        {/* container-fluid */}
      </div>
      {/* content */}

      {/* Invoices */}
      <div>
          <div className="row">
            <div className="col-12">
              <div className="card m-b-30">
                <div className="card-body">
                  <h4 className="mt-0 header-title">Confirmation list</h4>

                  <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                    <thead>
                      <tr>
                        <th> Bank Account Number</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>pk2345670987654</td>
                      </tr>
                      </tbody>
                  </table>


      <h4 className="mt-0 header-title pb-3">Screenshot For Order Approval</h4>
      <div className>
        <img src="assets/images/small/img-2.jpg" className="img-fluid" alt="Responsive image" />
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
  export default ViewList;