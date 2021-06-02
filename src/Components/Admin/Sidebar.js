import React from 'react';
import {Link} from 'react-router-dom';
import Navlink from './navlink.js';


class Sidebar extends React.Component{
    render(){
        return(
          <div>

  {/* ========== Left Sidebar Start ========== */}
    <div className="left side-menu">
      <div className="slimscroll-menu" id="remove-scroll">
        {/*- Sidemenu */}
        <div id="sidebar-menu">
          {/* Left Menu Start */}
          <ul className="metismenu" id="side-menu">
            <li className="menu-title">Menu</li>
            <li>
            <Link to='/admin'>
              <i className="icon-accelerator" /><span> Dashboard <span className="badge badge-success badge-pill float-right"></span> </span>
              </Link>

            </li>
         
            <li>
            <Link to='/buyer'>
              <i className="icon-paper-sheet" /><span> Buyer <span className="float-right menu-arrow"></span> </span>
              </Link>
              {/* <a href="javascript:void(0);" className="waves-effect"><i className="icon-paper-sheet" /><span> Buyer <span className="float-right menu-arrow"></span> </span></a> */}
            </li>
            <li>
            <Link to='/seller'>
              <i className="icon-paper-sheet" /><span> Seller <span className="float-right menu-arrow"></span> </span>
              </Link>
              {/* <a href="javascript:void(0);" className="waves-effect"><i className="icon-paper-sheet" /><span> Seller <span className="float-right menu-arrow"></span> </span></a> */}
            </li>
            <li>
            <Link to='/deliverer'>
              <i className="icon-paper-sheet" /><span> Deliverer <span className="float-right menu-arrow"></span> </span>
              </Link>
              {/* <a href="javascript:void(0);" className="waves-effect"><i className="icon-paper-sheet" /><span> Deliverer <span className="float-right menu-arrow"></span> </span></a> */}
            </li>
        
            <li>
            <Link to='/ordertracking'>
              <i className="icon-paper-sheet" /><span> Order Tracking <span className="float-right menu-arrow"></span> </span>
              </Link>
            </li>


           
          </ul>
        </div>
        {/* Sidebar */}
        <div className="clearfix" />
      </div>
      {/* Sidebar -left */}
    </div>
    {/* Left Sidebar End */}
                
    </div>

);
}
}
export default Sidebar;