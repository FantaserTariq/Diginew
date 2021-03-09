import React from "react"
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

import Header from '../Components/Header.jsx'
import About from '../Components/About.jsx'
// import Login from '../Components/LoginModal'
import Chat from '../Components/Chat'
import Order from '../Components/Order'
import Home from '../Components/Home'
import Sell from '../Components/Sell'
import Attributes from '../Components/Attributes'
import PhoneLogin from '../Components/PhoneAuth'
import Success from '../Components/Success'
import AdDetails from '../Components/AdDetails'
import MyAds from '../Components/MyAds'
import Types from '../Components/Types'
import Footer from '../Components/Footer'
import Signup from '../Components/Signup'
import Login from '../Components/Login'
import RiderSignup from '../Components/RiderSignUp'
import NewHeader from '../Components/NewHeader'
import NewSidebar from '../Components/NewSidebar'
import Carousal from '../Components/Carousal'
import OrderPage from "../Components/OrderPage.jsx";
import FindRider from '../Components/FindRider'



class AppRouter extends React.Component {
    render() {
        return (


                  <Router>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/Login" component={Login} />
                      <Route exact path="/chat" component={Chat} />
                      <Route exact path="/order" component={Order} />
                      <Route exact path="/sell" component={Sell} />
                      <Route exact path="/sell/attribute" component={Attributes} />
                      <Route exact path="/phoneauth" component={PhoneLogin} />
                      <Route exact path="/success" component={Success} />
                      <Route exact path="/AdDetails" component={AdDetails} />
                      <Route exact path="/myads" component={MyAds} />
                      <Route exact path="/types" component={Types} />
                      <Route exact path="/footer" component={Footer} />
                      <Route exact path="/Signup" component={Signup} />
                      <Route exact path="/RiderSignup" component={RiderSignup} />
                      <Route exact path="/NewHeader" component={NewHeader} />
                      <Route exact path="/Carousal" component={Carousal} />
                      <Route exact path="/OrderPage" component={OrderPage}/>
                      <Route exact path="/FindRider" component={FindRider}/>
                      
                     
                  </Router>

        )
    }
}
export default AppRouter;