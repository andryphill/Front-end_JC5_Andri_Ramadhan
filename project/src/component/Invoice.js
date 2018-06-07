import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Invoice extends Component {
  render() {
    return (
      <div>
          <br/><br/><br/><br/>
             <div>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="pull-right">
                        <Link to="/Cart">  <i className="fa fa-shopping-cart fa-1x"> Cart </i> </Link> | | 
                        <Link to="/UserProfile"><i className="fa fa-address-card fa-1x">  Profile</i></Link>
                        </div>
                        <div className="pull-left">
                        <ol className="breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            {/* <li><Link to="index.html">Category</Link></li> */}
                            <li><Link to="/UserProfile">User Profile </Link></li>
                            <li className="active">Invoice History</li>
                        </ol>
                        </div>
                    </div>
                    </div>
                </div>
                {/*====================== NAVBAR MENU START===================*/}
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-8 col-lg-offset-2">
                    <div className="panel panel-default main">
                        <div className="panel-body">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-sm-9">
                            <h3>Status : Sucsess </h3>
                            <h3>From</h3>
                            <p>John Doe</p>
                            <p className="offset-margin">713 Crescent Dr</p>
                            <p className="offset-margin">Suite 9-2136</p>
                            <p className="offset-margin">Los Angeles CA 90210</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                            <h1>Invoice</h1>
                            </div>
                        </div>
                        {/*row*/}
                        <hr />
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-sm-9">
                            <h3>To</h3>
                            <p>Jane Doe</p>
                            <p className="offset-margin">239 Crescent Dr</p>
                            <p className="offset-margin">Los Angeles CA 90210</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                            <p><label>Invoice#:</label> 00013</p>
                            <p><label>Invoice Date:</label> 10/12/17</p>
                            <p><label>Due Date:</label> 10/12/17</p>
                            </div>
                        </div>
                        {/*row*/}
                        <div className="row">
                            <div className="col-lg-10 col-md-10 col-sm-10 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 content">
                            <div className="panel panel-default">
                                {/*<div class="panel-heading">*/}
                                {/*    <h1 class="panel-title">Invoice Details</h1>*/}
                                {/*</div>*/}
                                <div className="panel-body">
                                <div className="row">
                                    <div className=" col-lg-12 col-md-12 col-sm-12 description">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th>Itme</th>
                                            <th>Description</th>
                                            <th>Qty</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><img src="http://via.placeholder.com/90x90" /></td>
                                            <td> This is Link description for an item.</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td><img src="http://via.placeholder.com/90x90" /></td>
                                            <td>This is Link description for an item.</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td><img src="http://via.placeholder.com/90x90" /></td>
                                            <td>This is Link description for an item.</td>
                                            <td>1</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                    <div className="col-lg-8 pull-left" style={{borderTop: 'solid #ddd 1px'}} />
                                    <div className="col-lg-4 col-md-4 col-sm-4 pull-right blank">
                                    <table className="table table bordered">
                                        <tbody>
                                        <tr>
                                            <td><label>Subtotal:</label><span className="pull-right">$0.00</span></td>
                                        </tr>
                                        <tr>
                                            <td><label>Total:</label><span className="pull-right">$0.00</span></td>
                                        </tr>
                                        <tr>
                                            <td><label>Amount Paid:</label><span className="pull-right">$0.00</span></td>
                                        </tr>
                                        <tr style={{backgroundColor: '#eee'}}>
                                            <td><label>Amount Due:</label><span className="pull-right">$0.00</span></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                                {/*row*/}
                                </div>
                            </div>
                            </div>
                        </div>
                        <div>
                            <button type="button" className="btn btn-info">
                            <li className="fa fa-print fa-1x"> Print </li>
                            </button>
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

export default Invoice;
