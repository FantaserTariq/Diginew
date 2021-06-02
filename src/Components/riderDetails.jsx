import React from 'react';
import '../Styling/PaymentSelection.css';
import { Link } from 'react-router-dom';
import JazzCash from './JazzCash';
import { Redirect, useParams } from 'react-router-dom';
import axios from 'axios';
var FormData = require('form-data');

class riderDetails extends React.Component {
  state = {
    redirect: false,
    location: 'mainpage',
    resourceMaterial: '',
    imageURL: '',
    noti:"",
  };
  handleChange = () => {
    console.log('inp');
    this.setState({
      // redirect: true,
      location: 'Bank',
    });
  };
  JazzsetRedirect = () => {
    // console.log(inp)
    this.setState({
      redirect: true,
      location: 'JazzCash',
    });
  };
  easysetRedirect = () => {
    // console.log(inp)
    this.setState({
      redirect: true,
      location: 'EasyPaisa',
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={this.state.location} />;
    }
  };

  setResourceMaterial = async (e) => {
    try {
      console.log(e.target.files[0]);
    } catch (error) {
      console.log(error);
    }
  };
  uploadImage = async () => {
    try {
      var data = new FormData();

      data.append('file', this.state.resourceMaterial);

      data.append('upload_preset', 'imageupload');
      data.append('cloud_name', 'dmvvzljrj');
      console.log(data);
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dmvvzljrj/image/upload',
        data
      );
      console.log(response.data);
      data = { imageUrl: response.data.url };
      let abc=localStorage.getItem('orderId')

      const resp = await axios.post(
        'http://localhost:5000/order/addpayment/'+abc,
        data
      );
      this.setState({
        location:"thankyou"
      })
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount(){
      var temp=(localStorage.getItem("noti"))
      
      this.setState({
          noti:JSON.parse(temp)
      })
  }

  render() {
    return (
      <div>
        {(() => {
          if (this.state.location == 'mainpage') {
            return (
              <div>
                <div className='container'>
                  <div className='row'></div>
                  <div className='row' style={{ marginTop: '200px' }}>
                    <div className='col'></div>
                    <div className='col'>
                      <div className='paymentCont'>
                        <div className='headingWrap'>
                          <h3 className='headingTop text-center'>
                            Your Order
                          </h3>
                        </div>
                        <div className='row'>
                          <div className='col'>
                            <h3>{this.state.noti.msg}</h3>
                          </div>
                        </div>

                        {/* <div className="footerNavWrap clearfix">
    <div className="btn btn-success pull-left btn-fyi"><span className="glyphicon glyphicon-chevron-left" /> CONTINUE SHOPPING</div>
    <div className="btn btn-success pull-right btn-fyi">CHECKOUT<span className="glyphicon glyphicon-chevron-right" /></div>
  </div> */}
                      </div>
                    </div>
                    <div className='col'></div>
                  </div>
                </div>
                <div className='row'></div>
              </div>
            );
          } else if (this.state.location == 'Bank') {
            return (
              <div>
                <div className='container'>
                  <div className='row'></div>

                  <div className='row'>
                    <div className='col-3'></div>

                    <div className='col'>
                      <h3></h3>
                      <div className='card mb-3'>
                        <div className='card-body'>
                          <h5 className='card-title'>
                            Please send the payment to the seller through
                            following payment method to proceed
                          </h5>
                          <h3>BankTransfer</h3>
                          <h4>Account Title : Ali Mustafa</h4>
                          <h4>Bank Account Number: 003245547987 </h4>
                          <h4>Bank Name: Habib Bank</h4>

                          <div
                            style={
                              ({ marginTop: '20px' }, { marginBottom: '20px' })
                            }
                          >
                            <label htmlFor='formFile' className='form-label'>
                              Please upload the screenshot of transaction
                            </label>
                            <input
                              className='form-control'
                              type='file'
                              id='formFile'
                              onChange={(e) => {
                                this.setState({
                                  resourceMaterial: e.target.files[0],
                                });
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        type='button'
                        class='btn btn-primary'
                        style={{ marginTop: '20px' }}
                        onClick={this.uploadImage}
                      >
                        Transferred, Next
                      </button>
                    </div>
                    <div className='col-3'></div>
                  </div>
                </div>
              </div>
            );
          } else if (this.state.location === 'Jazz') {
            return (
              <div>
                <div className='container'>
                  <div className='row'></div>

                  <div className='row'>
                    <div className='col-3'></div>

                    <div className='col'>
                      <h3></h3>
                      <div className='card mb-3'>
                        <div className='card-body'>
                          <h5 className='card-title'>
                            Please send the payment to the seller through
                            following payment method to proceed
                          </h5>
                          <h3>Jazz Cash</h3>
                          <h4>Account Title</h4>
                          <h4>Jazz Cash Number</h4>

                          <div
                            style={
                              ({ marginTop: '20px' }, { marginBottom: '20px' })
                            }
                          >
                            <label htmlFor='formFile' className='form-label'>
                              Please upload the screenshot of transaction
                            </label>
                            <input
                              className='form-control'
                              type='file'
                              id='formFile'
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        type='button'
                        class='btn btn-primary'
                        style={{ marginTop: '20px' }}
                        onClick={this.uploadImage}
                      >
                        Transferred, Next
                      </button>
                    </div>
                    <div className='col-3'></div>
                  </div>
                </div>
              </div>
            );
          } else if (this.state.location === 'Easy') {
            return (
              <div>
                <div className='container'>
                  <div className='row'></div>

                  <div className='row'>
                    <div className='col-3'></div>

                    <div className='col'>
                      <h3></h3>
                      <div className='card mb-3'>
                        <div className='card-body'>
                          <h5 className='card-title'>
                            Please send the payment to the seller through
                            following payment method to proceed
                          </h5>
                          <h3>EasyPaisa</h3>
                          <h4>Account Title</h4>
                          <h4>EasyPaisa Account Number</h4>

                          <div
                            style={
                              ({ marginTop: '20px' }, { marginBottom: '20px' })
                            }
                          >
                            <label htmlFor='formFile' className='form-label'>
                              Please upload the screenshot of transaction
                            </label>
                            <input
                              className='form-control'
                              type='file'
                              id='formFile'
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        type='button'
                        class='btn btn-primary'
                        style={{ marginTop: '20px' }}
                        onClick={this.uploadImage}
                      >
                        Transferred, Next
                      </button>
                    </div>
                    <div className='col-3'></div>
                  </div>
                </div>
              </div>
            );
          }
          else if (this.state.location === 'thankyou') {
            return (
              <div>
                <div className='container'>
                  <div className='row'></div>

                  <div className='row'>
                    <div className='col-3'></div>

                    <div className='col'>
                      <h3></h3>
                      <div className='card mb-3'>
                        <div className='card-body'>

                          <h4>Thankyou for choosing yor service..</h4>
                          <h5>Your payement will be verified in 24-48 hours and your product will be dispached immediately after that.</h5>
                          
                        </div>
                      </div>
                      <Link
                        style={{ marginLeft: "0%", marginBottom: "5px" }}
                        to="/"
                        className="btn btn-warning btn-outline-info btn-block text-left"
                        type="button"
                      >
                       
                        <span style={{ fontSize: "18px" }}>Home</span>
                      </Link>
                    </div>
                    <div className='col-3'></div>
                  </div>
                </div>
              </div>
            );
          }
        })()}
      </div>
    );
  }
}

export default riderDetails;
