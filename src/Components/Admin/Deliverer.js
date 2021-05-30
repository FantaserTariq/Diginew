import React from 'react';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Footer from './Footer';
import axios from "axios";

class Deliverer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      posts: [],
      post: { name: '', deadline: '', budget: '', client: '' },
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/rider/getAllUsers', {})
      .then((response) => {
        const data = response.data;
        console.log(data);
        this.setState({ posts: data });
      })
      .catch((err) => {
        alert(err);
      });
  }
  displayBlogPost = (posts) => {
    if (!posts.length) return null;
    var count = 1;
    let t = posts.map((post, index) => {
      return (
          <tr className='unread'>
            <td style={{ textAlign: 'center' }}>{post.firstName}</td>
            <td style={{ textAlign: 'center' }}>{post.lastName}</td>
            <td style={{ textAlign: 'center' }}>{post.email}</td>
            <td style={{ textAlign: 'center' }}>{post.phone}</td>
            <td style={{ textAlign: 'center' }}>{post.drivingLicenseNumber}</td>
            <td style={{ textAlign: 'center' }}>{post.vehicleName}</td>
            <td style={{ textAlign: 'center' }}>{post.vehicleNumber}</td>
            <td style={{ textAlign: 'center' }}>{post.vehicleWeight}</td>
            <td style={{ textAlign: 'center' }}>{post.vehicleType}</td>
          </tr>
      );
    });
    return t;
  };

  render() {
    return (
      <div>
        <div id='wrapper'>
          <Header />
          <Sidebar />

          <div className='content-page'>
            <div className='content'>
              <div className='container-fluid'>
                <div className='page-title-box'>
                  <div className='row align-items-center'>
                    <div className='col-sm-6'>
                      <h4 className='page-title'>Deliverer</h4>
                    </div>
                    <div className='col-sm-6'>
                      <ol className='breadcrumb float-right'>
                        <li className='breadcrumb-item'>
                          <a href='javascript:void(0);'>DigiMart</a>
                        </li>
                        <li className='breadcrumb-item active'>Deliverer</li>
                      </ol>
                    </div>
                  </div>{' '}
                  {/* end row */}
                </div>
                {/* end page-title */}
              </div>
              {/* container-fluid */}
            </div>
            {/* content */}

            {/* View Deliverer Start */}
            <div>
              <div className='row'>
                <div className='col-12'>
                  <div className='card m-b-30'>
                    <div className='card-body'>
                      <h4 className='mt-0 header-title'>View Deliverers</h4>
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
                            <th>Driving License No.</th>
                            <th>Vehicle Name</th>
                            <th>Vehicle Number</th>
                            <th>Vehicle Weight</th>
                            <th>Vehicle Type</th>
                          </tr>
                        </thead>
                        <tbody>{this.displayBlogPost(this.state.posts)}</tbody>
                      </table>
                    </div>
                  </div>
                </div>{' '}
                {/* end col */}
              </div>{' '}
              {/* end row */}
            </div>
            {/* View Deliverer Ends */}

            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
export default Deliverer;
