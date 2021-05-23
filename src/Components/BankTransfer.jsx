import React from 'react'
import '../Styling/PaymentSelection.css'

class BankTransfer extends React.Component {

    render() {
        return (

            <div>
                <div className="container">
                    <div className="row"></div>

                    <div className="row">
                        <div className="col-3"></div>

                        <div className="col">
                            <h3></h3>
                            <div className="card mb-3">


                                <div className="card-body">
                                    <h5 className="card-title">Please send the payment to the seller through following payment method to proceed</h5>
                                    <h3>BankTransfer</h3>
                                    <h4>Account Title</h4>
                                    <h4>Bank Account Number</h4>
                                    <h4>Bank Name</h4>
                                
                                    <div style={({marginTop:"20px"},{ marginBottom:"20px"})}>
                                        <label htmlFor="formFile" className="form-label">Please upload the screenshot of transaction</label>
                                        <input className="form-control" type="file" id="formFile" />
                                    </div>



                                </div>
                            

                            </div>
                            <button type="button" class="btn btn-primary" style={({marginTop:"20px"})}>Transferred, Next</button>

                        </div>
                        <div className="col-3"></div>

                    </div>

                </div>


            </div>


        )
    }
}

export default BankTransfer;