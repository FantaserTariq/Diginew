import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';

import Header from '../Components/Header.jsx';
import About from '../Components/About.jsx';
// import Login from '../Components/LoginModal'
import Chat from '../Components/Chat';
import Order from '../Components/Order';
import Home from '../Components/Home';
import Sell from '../Components/Sell';
import Attributes from '../Components/Attributes';
import PhoneLogin from '../Components/PhoneAuth';
import Success from '../Components/Success';
import AdDetails from '../Components/AdDetails';
import MyAds from '../Components/MyAds';
import Types from '../Components/Types';
import Footer from '../Components/Footer';
import Signup from '../Components/Signup';
import Login from '../Components/Login';
import RiderSignup from '../Components/RiderSignUp';
import NewHeader from '../Components/NewHeader';
import NewSidebar from '../Components/NewSidebar';
import Carousal from '../Components/Carousal';
import OrderPage from '../Components/OrderPage';
import FindRider from '../Components/FindRider';
import SendRiderLocation from '../Components/SendRiderLocation';
import OrderPlaced from '../Components/OrderPlaced';
import PaymentMethod from '../Components/PaymentMethod';
import JazzCash from '../Components/JazzCash';
import EasyPaisa from '../Components/EasyPaisa';
import BankTransfer from '../Components/BankTransfer';
import Buyer from '../Components/Admin/Buyer';
import Buyertracking from '../Components/Admin/Buyertracking';
import Confirmation from '../Components/Admin/Confirmation';
import Deliverer from '../Components/Admin/Deliverer';

import Admin from '../Components/Admin/home';

import Orderdelivery from '../Components/Admin/Orderdelivery';
import Ordertracking from '../Components/Admin/Ordertracking';
import Seller from '../Components/Admin/Seller';
import Sellertracking from '../Components/Admin/Sellertracking';
import ViewList from '../Components/Admin/ViewList';
import riderDetails from '../Components/riderDetails'

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/chat' component={Chat} />
        <Route exact path='/order' component={Order} />
        <Route exact path='/sell' component={Sell} />
        <Route exact path='/sell/attribute' component={Attributes} />
        <Route exact path='/phoneauth' component={PhoneLogin} />
        <Route exact path='/success' component={Success} />
        <Route exact path='/AdDetails' component={AdDetails} />
        <Route exact path='/myads' component={MyAds} />
        <Route exact path='/types' component={Types} />
        <Route exact path='/Footer' component={Footer} />
        <Route exact path='/Signup' component={Signup} />
        <Route exact path='/RiderSignup' component={RiderSignup} />
        <Route exact path='/NewHeader' component={NewHeader} />
        <Route exact path='/Carousal' component={Carousal} />
        <Route exact path='/OrderPage' component={OrderPage} />
        <Route exact path='/FindRider' component={FindRider} />
        <Route exact path='/SendRiderLocation' component={SendRiderLocation} />
        <Route exact path='/OrderPlaced' component={OrderPlaced} />
        <Route exact path='/PaymentMethod/:id' component={PaymentMethod} />
        <Route exact path='/JazzCash' component={JazzCash} />
        <Route exact path='/EasyPaisa' component={EasyPaisa} />
        <Route exact path='/BankTransfer' component={BankTransfer} />
        <Route exact path='/Buyer' component={Buyer}/>
        <Route exact path='/Buyertracking' component={Buyertracking}/>
        <Route exact path='/Confirmation' component={Confirmation}/>
        <Route exact path='/Deliverer' component={Deliverer}/>

        <Route exact path='/admin' component={Admin}/>

        <Route exact path='/Orderdelivery' component={Orderdelivery}/>
        <Route exact path='/Ordertracking' component={Ordertracking}/>
        <Route exact path='/Seller' component={Seller}/>
        <Route exact path='/Sellertracking' component={Sellertracking}/>
        <Route exact path='/ViewList' component={ViewList}/>
        <Route exact path='/riderDetails' component={riderDetails}/>
      </Router>
    );
  }
}
export default AppRouter;
