import React from "react";
import axios from "axios";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../Styling/RiderSignup.css";

class RiderSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      driver_id: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      password: "",
      drivingLicenseNumber: "",
      vehicleNumber: "",
      vehicleWeight: "",
      vehicleName: "",
      vehicleType:"",

      error: "",
    };
  }

  submitHandler = (event) => {
    event.preventDefault();

    if (this.state.password !== this.state.confirmpassword) {
      this.setState({ error: "Password Do Not Match" });
    } else {
        console.log(this.state.driver_id);
      console.log(this.state.first_name);
      console.log(this.state.last_name);
      console.log(this.state.email);
      console.log(this.state.phone);
      console.log(this.state.password);
      console.log(this.state.confirmpassword);
      console.log(this.state.drivingLicenseNumber);
      console.log(this.state.vehicleNumber);
      console.log(this.state.vehicleWeight);
      console.log(this.state.vehicleName);
      console.log(this.state.vehicleType);

      var apiBaseUrl = "http://localhost:5000/rider/";
      var self = this;
      var payload = {
        
        "firstname": this.state.first_name,
        "lastname": this.state.last_name,
        "phone": this.state.phone,
        "email": this.state.email,
        "password": this.state.password,
        "drivingLicenseNumber": this.state.drivingLicenseNumber,
        "vehicleNumber": this.state.vehicleNumber,
        "vehicleWeight": this.state.vehicleWeight,
        "vehicleName": this.state.vehicleName,
        "vehicleType": this.state.vehicleType,
      };
      axios
        .post(apiBaseUrl + "signup", payload)
        .then(function (response) {
          console.log(response);
          if (response.data.code == 200) {
            console.log("Login successfull");
          } else{
            console.log(response.data.error);
            alert(response.data.error);
            }
            })
            .catch(function (error) {
            console.log(error);
            });
            
    }
  };
  render() {
    return (
      <Container>
        <Row>
          <div className="hello"></div>
        </Row>
        <Row>
          <Col lg="3"></Col>

          <Col lg="6">
            <h3 style={{ textAlign: "center" }}>Rider Sign Up</h3>
            <Card>
              <h6
                style={{ marginLeft: "60px", color: "red", marginTop: "20px" }}
              >
                {this.state.error}
              </h6>
              <form
                style={{ marginLeft: "60px" }}
                onSubmit={this.submitHandler}
              >
                  <div className="form-group" style={{ marginTop: "25px" }}>
                  <label>Driver ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Driver ID"
                    onChange={(e) =>
                      this.setState({ driver_id: e.target.value })
                    }
                  />
                </div>
                <div className="form-group" style={{ marginTop: "25px" }}>
                  <label>First name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    onChange={(e) =>
                      this.setState({ first_name: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    onChange={(e) =>
                      this.setState({ last_name: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Phone Number"
                    onChange={(e) => this.setState({ phone: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter confirm password"
                    onChange={(e) =>
                      this.setState({ confirmpassword: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Driving License Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Driving License Number"
                    onChange={(e) => this.setState({ drivingLicenseNumber: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Vehicle Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter Vehicle Number"
                    onChange={(e) => this.setState({ vehicleNumber: e.target.value })}
                  />
                </div>
              
                <div className="form-group">
                  <label>Vehicle Weight</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter Vehicle Weight"
                    onChange={(e) => this.setState({ vehicleWeight: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Vehicle Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Vehicle Name"
                    onChange={(e) => this.setState({ vehicleName: e.target.value })}
                  />
                </div>
                <div className="form-group">
                    <div> Vehicle Type</div><br></br>
                  <input
                    type="radio"
                    id="bike"
                    name="type"
                    value="bike"
                    onChange={(e) => this.setState({ vehicleType: e.target.value })}
                  />
                 
                  <label for="Bike">Bike</label>
                  <br></br>
                  <input
                    type="radio"
                    id="car"
                    name="type"
                    value="car"
                    onChange={(e) => this.setState({ vehicleType: e.target.value })}
                  />
                  <label for="Car">Car</label>
                  <br></br>
                  <input
                    type="radio"
                    id="cargo"
                    name="type"
                    value="cargo"
                    onChange={(e) => this.setState({ vehicleType: e.target.value })}
                  />
                  <label for="Cargo">Cargo</label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block text-center"
                  id="btnclass"
                >
                  Sign Up
                </button>
                <p
                  className="forgot-password text-center"
                  style={{ marginRight: "50px" }}
                >
                  Already registered <a href="#">sign in?</a>
                </p>
              </form>
            </Card>
          </Col>

          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default RiderSignup;
