import React from 'react';
import '../Styling/PaymentSelection.css';
import { Link } from 'react-router-dom';
import JazzCash from './JazzCash';
import { Redirect, useParams } from 'react-router-dom';
import axios from 'axios';
var FormData = require('form-data');

class PaymentMethod extends React.Component {
  state = {
    redirect: false,
    location: 'mainpage',
    resourceMaterial: '',
    imageURL: '',
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

      const resp = await axios.post(
        'http://localhost:3000/order/addpayment/',
        data
      );
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  };

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
                            Select Your Payment Method
                          </h3>
                        </div>
                        <div className='row'>
                          <div className='col'>
                            <img
                              width='150px'
                              height='100px'
                              onClick={() =>
                                this.setState({ location: 'Bank' })
                              }
                              src='data:image/png;base64,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'
                            ></img>
                            <img
                              width='150px'
                              height='100px'
                              onClick={() =>
                                this.setState({ location: 'Jazz' })
                              }
                              src='https://propakistani.pk/how-to/wp-content/uploads/2020/09/JazzCash-app.jpg'
                            ></img>
                            <img
                              width='150px'
                              height='100px'
                              onClick={() =>
                                this.setState({ location: 'Easy' })
                              }
                              src='https://propakistani.pk/how-to/wp-content/uploads/2020/10/IMG_2796.jpg'
                            ></img>
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
                          <h4>Account Title</h4>
                          <h4>Bank Account Number</h4>
                          <h4>Bank Name</h4>

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
        })()}
      </div>
    );
  }
}

export default PaymentMethod;
