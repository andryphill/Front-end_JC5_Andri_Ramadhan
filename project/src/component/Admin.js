import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Admin extends Component {
  render() {
    return (
      <div>
            <br/><br/><br/><br/><br/>
            <div className="wrapper">
                    <div className="sidebar" data-background-color="white" data-active-color="danger">
                        {/*
                            Tip 1: you can change the color of the sidebar's background using: data-background-color="white | black"
                            Tip 2: you can change the color of the active button using the data-active-color="primary | info | success | warning | danger"
                        */}
                        <div className="sidebar-wrapper">
                        <div className="logo">
                            <Link to="#" className="simple-text">
                            <img src="image/IMG-20180519-WA0034.jpg " style={{width:130}} alt />
                            </Link>
                        </div>
                        <ul className="nav">
                            <li className="active">
                            <Link to="dashboard.html">
                                <i className="ti-panel" />
                                <p>Dashboard</p>
                            </Link>
                            </li>
                            <li>
                            <Link to="user.html">
                                <i className="ti-user" />
                                <p>Admin Profile</p>
                            </Link>
                            </li>
                            <li>
                            <Link to="table.html">
                                <i className="ti-view-list-alt" />
                                <p>Product</p>
                            </Link>
                            </li>
                            <li>
                            <Link to="typography.html">
                                <i className="ti-text" />
                                <p>Typography</p>
                            </Link>
                            </li>
                            <li>
                            <Link to="icons.html">
                                <i className="ti-pencil-alt2" />
                                <p>Icons</p>
                            </Link>
                            </li>
                            <li>
                            <Link to="maps.html">
                                <i className="ti-map" />
                                <p>Maps</p>
                            </Link>
                            </li>
                            <li>
                            <Link to="notifications.html">
                                <i className="ti-bell" />
                                <p>Notifications</p>
                            </Link>
                            </li>
                            <li className="active-pro">
                            <Link to="upgrade.html">
                                <i className="ti-export" />
                                <p>Upgrade to PRO</p>
                            </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="main-panel">
                        <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                            <button type="button" className="navbar-toggle">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar bar1" />
                                <span className="icon-bar bar2" />
                                <span className="icon-bar bar3" />
                            </button>
                            <Link className="navbar-brand" to="#">Dashboard</Link>
                            </div>
                            <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="ti-panel" />
                                    <p>Stats</p>
                                </Link>
                                </li>
                                <li className="dropdown">
                                <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="ti-bell" />
                                    <p className="notification">5</p>
                                    <p>Notifications</p>
                                    <b className="caret" />
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link to="#">Notification 1</Link></li>
                                    <li><Link to="#">Notification 2</Link></li>
                                    <li><Link to="#">Notification 3</Link></li>
                                    <li><Link to="#">Notification 4</Link></li>
                                    <li><Link to="#">Another notification</Link></li>
                                </ul>
                                </li>
                                <li>
                                <Link to="#">
                                    <i className="ti-settings" />
                                    <p>Settings</p>
                                </Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </nav>
                        <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="card">
                                <div className="content">
                                    <div className="row">
                                    <div className="col-xs-5">
                                        <div className="icon-big icon-warning text-center">
                                        <i className="ti-server" />
                                        </div>
                                    </div>
                                    <div className="col-xs-7">
                                        <div className="numbers">
                                        <p>Capacity</p>
                                        105GB
                                        </div>
                                    </div>
                                    </div>
                                    <div className="footer">
                                    <hr />
                                    <div className="stats">
                                        <i className="ti-reload" /> Updated now
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="card">
                                <div className="content">
                                    <div className="row">
                                    <div className="col-xs-5">
                                        <div className="icon-big icon-success text-center">
                                        <i className="ti-wallet" />
                                        </div>
                                    </div>
                                    <div className="col-xs-7">
                                        <div className="numbers">
                                        <p>Revenue</p>
                                        $1,345
                                        </div>
                                    </div>
                                    </div>
                                    <div className="footer">
                                    <hr />
                                    <div className="stats">
                                        <i className="ti-calendar" /> Last day
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="card">
                                <div className="content">
                                    <div className="row">
                                    <div className="col-xs-5">
                                        <div className="icon-big icon-danger text-center">
                                        <i className="ti-pulse" />
                                        </div>
                                    </div>
                                    <div className="col-xs-7">
                                        <div className="numbers">
                                        <p>Errors</p>
                                        23
                                        </div>
                                    </div>
                                    </div>
                                    <div className="footer">
                                    <hr />
                                    <div className="stats">
                                        <i className="ti-timer" /> In the last hour
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="card">
                                <div className="content">
                                    <div className="row">
                                    <div className="col-xs-5">
                                        <div className="icon-big icon-info text-center">
                                        <i className="ti-twitter-alt" />
                                        </div>
                                    </div>
                                    <div className="col-xs-7">
                                        <div className="numbers">
                                        <p>Followers</p>
                                        +45
                                        </div>
                                    </div>
                                    </div>
                                    <div className="footer">
                                    <hr />
                                    <div className="stats">
                                        <i className="ti-reload" /> Updated now
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                <div className="header">
                                    <h4 className="title">Users Behavior</h4>
                                    <p className="category">24 Hours performance</p>
                                </div>
                                <div className="content">
                                    <div id="chartHours" className="ct-chart" />
                                    <div className="footer">
                                    <div className="chart-legend">
                                        <i className="fa fa-circle text-info" /> Open
                                        <i className="fa fa-circle text-danger" /> Click
                                        <i className="fa fa-circle text-warning" /> Click Second Time
                                    </div>
                                    <hr />
                                    <div className="stats">
                                        <i className="ti-reload" /> Updated 3 minutes ago
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                <div className="header">
                                    <h4 className="title">Email Statistics</h4>
                                    <p className="category">Last Campaign Performance</p>
                                </div>
                                <div className="content">
                                    <div id="chartPreferences" className="ct-chart ct-perfect-fourth" />
                                    <div className="footer">
                                    <div className="chart-legend">
                                        <i className="fa fa-circle text-info" /> Open
                                        <i className="fa fa-circle text-danger" /> Bounce
                                        <i className="fa fa-circle text-warning" /> Unsubscribe
                                    </div>
                                    <hr />
                                    <div className="stats">
                                        <i className="ti-timer" /> Campaign sent 2 days ago
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card ">
                                <div className="header">
                                    <h4 className="title">2015 Sales</h4>
                                    <p className="category">All products including Taxes</p>
                                </div>
                                <div className="content">
                                    <div id="chartActivity" className="ct-chart" />
                                    <div className="footer">
                                    <div className="chart-legend">
                                        <i className="fa fa-circle text-info" /> Tesla Model S
                                        <i className="fa fa-circle text-warning" /> BMW 5 Series
                                    </div>
                                    <hr />
                                    <div className="stats">
                                        <i className="ti-check" /> Data information certified
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

          
      </div>
    );
  }
}

export default Admin;
