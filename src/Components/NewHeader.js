import React, { Component } from 'react';

export default props => (

    <div>

        <div>
            <div className="header-dark">
                <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
                    <div className="container"><a className="navbar-brand" href="#">Digimart</a><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                        <div className="collapse navbar-collapse" id="navcol-1">
                            <ul className="nav navbar-nav">
                                <li className="nav-item" role="presentation"><a className="nav-link" href="#">Home</a></li>
                                <li className="nav-item" role="presentation"><a className="nav-link" href="#">About</a></li>
                                <li className="nav-item" role="presentation"><a className="nav-link" href="#">Ads</a></li>
                                <li className="nav-item" role="presentation">
                          

                                <select class="form-control form-control-sm">
                                    <option defaultValue="Rawalpindi,Pakistan"
                                        value="Rawalpindi,Pakistan">Rawalpindi</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Azad Jammu and Kashmir">
                                        Azad Jammu and Kashmir
                    </option>
                                    <option value="Balochistan">Balochistan</option>
                                    <option value="Gilgit–Baltistan">Gilgit–Baltistan</option>
                                    <option value="Islamabad Capital Territory">
                                        Islamabad Capital Territory
                    </option>
                                    <option value="Khyber Pakhtunkhwa">
                                        Khyber Pakhtunkhwa
                    </option>
                                    <option value="Sindh">Sindh</option>
                                    <option value="Muzaffarabad">Muzaffarabad</option>
                                    <option value="Quetta">Quetta</option>
                                    <option value="Gilgit">Gilgit</option>
                                    <option value="Islamabad">Islamabad</option>
                                    <option value="Peshawar">Peshawar</option>
                                    <option value="Karachi">Karachi</option>
                                </select>
                                </li>
                           
                                {/* <li className="dropdown"><a className="dropdown-toggle nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#">About </a>
                                    <div className="dropdown-menu" role="menu"><a className="dropdown-item" role="presentation" href="#">First Item</a>
                                        <a className="dropdown-item" role="presentation" href="#">Second Item</a>
                                        <a className="dropdown-item" role="presentation" href="#">Third Item</a></div>
                                </li> */}
                            </ul>
                            <form className="form-inline mr-auto" target="_self">
                                <div className="form-group"><label htmlFor="search-field"><i className="fa fa-search" /></label><input className="form-control search-field" type="search" name="search" id="search-field" /></div>
                            </form><span className="navbar-text"><a href="#" className="login">Log In</a></span><a className="btn btn-light action-button" role="button" href="#">Sign Up</a></div>
                    </div>
                </nav>

            </div>
        </div>

    </div>




)