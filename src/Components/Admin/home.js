import React from 'react';
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Footer from "./Footer";
import axios from "axios";
import {Bar} from 'react-chartjs-2';
import {Line} from 'react-chartjs-2';
import {Doughnut} from 'react-chartjs-2';

const state3 = {
  labels: ['Users', 'Deliverers', 'Products',
  'Orders', 'Admins'],
  datasets: [
    {

      backgroundColor: [
        '#30419b',
        '#5961C1',
        '#1A348B',
        '#3646A0',
        '#0061B3'
      ],
      hoverBackgroundColor: [
        '#30419b',
        '#5961C1',
        '#1A348B',
        '#3646A0',
        '#0061B3'
      ],
      data: [18, 12, 8, 1, 2]
    }
  ]
}

const state1 = {
  labels: ['Users', 'Deliverers', 'Products',
           'Orders', 'Admins'],
  datasets: [
    {
      backgroundColor: '#30419b',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 1,
      data: [18, 12, 8, 1, 2]
    }
  ]
}



const state2 = {
  labels: ['Users', 'Deliverers', 'Products', 'Orders', 'Admins'],
  datasets: [
    {
      fill: false,
      lineTension: 1,
      backgroundColor: '#000000',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 1,
      data: [18, 12, 8, 1, 2]
    }
  ]
}


class home extends React.Component{

    constructor(props) {
      super(props);
      this.state = {
        count: '',
        _id: '',
        posts: [],
		    posts1: [],
        posts2: [],
        posts3: [],
        post: { name: '', deadline: '', budget: '', client: '' },
      };
    }
  
    componentDidMount() {
      axios
        .get('http://localhost:5000/users/getAllUsers', {})
        .then((response) => {
          const data = response.data;
          console.log(data);
          this.setState({ posts: data });
        })
        .catch((err) => {
          alert(err);
        });
		axios
        .get('http://localhost:5000/order/getAllOrders', {})
        .then((response) => {
          const data = response.data;
          console.log(data);
          this.setState({ posts1: data });
        })
        .catch((err) => {
          alert(err);
        });

        axios
        .get('http://localhost:5000/rider/getAllUsers', {})
        .then((response) => {
          const data = response.data;
          console.log(data);
          this.setState({ posts2: data });
        })
        .catch((err) => {
          alert(err);
        });
        axios
        .get('http://localhost:5000/products/getAllProducts', {})
        .then((response) => {
          const data = response.data;
          console.log(data);
          this.setState({ posts3: data });
        })
        .catch((err) => {
          alert(err);
        });

    }
    displayBlogPost = (posts3) => {
      if (!posts3.length) return null;
      var count = 1;
      let t = posts3.map((post, index) => {
        return (
            <tr className='unread'>
              <td style={{ textAlign: 'center' }}>{post.title}</td>
              <td style={{ textAlign: 'center' }}>{post.price}</td>
              <td style={{ textAlign: 'center' }}>{post.category}</td>
            </tr>
        );
      });
      return t;
    };


  

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
                    <h5 className="font-16">Total Orders</h5>
                  </div>

                    <h3 className="mt-4">{this.state.posts1.length}</h3>


                  <div className="progress mt-4" style={{height: '4px'}}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '100%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
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
                    <h5 className="font-16">Products</h5>
                  </div>
                  <h3 className="mt-4">{this.state.posts3.length}</h3>
                  <div className="progress mt-4" style={{height: '4px'}}>
                    <div className="progress-bar bg-success" role="progressbar" style={{width: '100%'}} aria-valuenow={88} aria-valuemin={0} aria-valuemax={100} />
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
                    <h5 className="font-16">Users</h5>
                  </div>
                  <h3 className="mt-4">{this.state.posts.length}</h3>
                  
                  <div className="progress mt-4" style={{height: '4px'}}>
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '100%'}} aria-valuenow={68} aria-valuemin={0} aria-valuemax={100} />
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
                    <h5 className="font-16">Deliverer</h5>
                  </div>
                  <h3 className="mt-4">{this.state.posts2.length}</h3>

                  <div className="progress mt-4" style={{height: '4px'}}>
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={82} aria-valuemin={0} aria-valuemax={100} />
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
                  {/* <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
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
                  </ul> */}

<Bar
          data={state1}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        
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
                  <Doughnut
          data={state3}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

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
                  <Line
          data={state2}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
                  <div id="morris-line-example-info" className="morris-charts" style={{height: '300px'}} />
                </div>
              </div>
            </div> {/* end col */}
          </div> {/* end row */}
            </div>

            </div>
          </div>
          {/* end page-title */}
          
{/* Active Orders Starts */}
<div className="row">
             <div className="col-xl-12">
              <div className="card m-b-30">
                <div className="card-body">
                  <h4 className="mt-0 header-title mb-4">Products</h4>
                  <div className="table-responsive">
                  
              <table
                id='datatable'
                className='table table-bordered'
                style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}
                >
                <thead className="text-center">
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Category</th>
                </tr>
                </thead>
                <tbody>{this.displayBlogPost(this.state.posts3)}</tbody>
                </table>
                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* container-fluid */}
      
      {/* content */}


        </div>
{/* Active Orders Ends */}
  <Footer/>

    </div>

        );
      }
  }
  export default home;