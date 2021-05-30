import React from 'react';
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Footer from "./Footer";
import axios from "axios";

class Buyer extends React.Component{


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
      .get('http://localhost:5000/users/getAllUsers', {})
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
            <td style={{ textAlign: 'center' }}>{post.Email}</td>
            <td style={{ textAlign: 'center' }}>{post.PhoneNumber}</td>
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
                        <tbody>{this.displayBlogPost(this.state.posts)}</tbody>
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