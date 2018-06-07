import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Tenda  extends Component {
  render() {
    return (
    <div>
        <br/><br/><br/><br/>
        
        <div className="container">
            <div className="row">
            <div className="col-lg-12">
                <div className="pull-right">
                <Link to="/Cart">  <i className="fa fa-shopping-cart fa-1x"> Cart </i> </Link> | |
                <Link to="/UserProfile"><i className="fa fa-address-card fa-1x">  Profile</i></Link>
                </div>
                <div className="pull-left">
                <ol className="breadcrumb">
                    <li><Link to="index.html">Home</Link></li>
                    <li><Link to="index.html">Category</Link></li>
                    <li className="active">Tenda</li>
                </ol>
                </div>
            </div>
            </div>
        </div>
        <br />

        <div className="container">
            <div className="row">
                <div className="row">
                <div className="col-md-9">
                    <h2> Tenda 2p - 4p </h2>
                </div>
                <div className="col-md-3">
                    {/* Controls */}
                    <div className="controls pull-right hidden-xs">
                    <Link className="left fa fa-chevron-left btn btn-success" to="#carousel-example" data-slide="prev" />
                    <Link className="right fa fa-chevron-right btn btn-success" to="#carousel-example" data-slide="next" />
                    </div>
                </div>
                </div>
                <div id="carousel-example" className="carousel slide hidden-xs" data-ride="carousel">
                {/* Wrapper for slides */}
                <div className="carousel-inner">
                    <div className="item active">
                    <div className="row">
                        <div className="col-sm-3">
                        <div className="col-item">
                            <div className="photo">
                            <img src="image/tent1.jpg" className="img-responsive" alt="Link" />
                            </div>
                            <div className="info">
                            <div className="row">
                                <div className="price col-md-6">
                                <h5> 2-METER DOME </h5>
                                <h5 className="price-text-color">Rp.2.000.000</h5>
                                </div>
                                <div className="rating hidden-sm col-md-6">
                                <i className="price-text-color fa fa-star" /><i className="price-text-color fa fa-star">
                                </i><i className="price-text-color fa fa-star" /><i className="price-text-color fa fa-star">
                                </i><i className="fa fa-star" />
                                </div>
                            </div>
                            <div className="separator clear-left">
                                <p className="btn-add">
                                <Link style={{paddingRight:5}} to="/Cart">  <button className="btn btn-success" ><span style={{marginRight: 20}} className="glyphicon glyphicon-shopping-cart" aria-hidden="true" />Beli</button></Link>
                                <Link to="/Detail"><button className="btn btn-success" ><span style={{marginRight: 20}} className="fa fa-align-left" aria-hidden="true" />Detail</button></Link>    
                                </p>
                            </div>
                            <div className="clearfix">
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="col-item">
                            <div className="photo">
                            <img src="image/tent2.jpg" className="img-responsive" alt="Link" />
                            </div>
                            <div className="info">
                            <div className="row">
                                <div className="price col-md-6">
                                <h5> NORTHSTAR 4 </h5>
                                <h5 className="price-text-color"> Rp.2.500.000</h5>
                                </div>
                                <div className="rating hidden-sm col-md-6">
                                <i className="price-text-color fa fa-star" /><i className="price-text-color fa fa-star">
                                </i><i className="price-text-color fa fa-star" />
                                </div>
                            </div>
                            <div className="separator clear-left">
                                <p className="btn-add">
                                <button className="btn btn-success"><span style={{marginRight: 20}} className="glyphicon glyphicon-shopping-cart" aria-hidden="true" />Beli</button>
                                <Link style={{paddingLeft:5}} to="detail.html"><button className="btn btn-success"><span style={{marginRight: 20}} className="fa fa-align-left" aria-hidden="true" />Detail</button></Link>    
                                </p></div>
                            <div className="clearfix">
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="col-item">
                            <div className="photo">
                            <img src="image/tent3.jpg" className="img-responsive" alt="Link" />
                            </div>
                            <div className="info">
                            <div className="row">
                                <div className="price col-md-6">
                                <h5>ALPINE GUIDE 3</h5>
                                <h5 className="price-text-color">
                                    Rp.1.750.000</h5>
                                </div>
                                <div className="rating hidden-sm col-md-6">
                                <i className="price-text-color fa fa-star" /><i className="price-text-color fa fa-star">
                                </i><i className="price-text-color fa fa-star" /><i className="price-text-color fa fa-star">
                                </i><i className="fa fa-star" />
                                </div>
                            </div>
                            <div className="separator clear-left">
                                <p className="btn-add">
                                <button className="btn btn-success"><span style={{marginRight: 20}} className="glyphicon glyphicon-shopping-cart" aria-hidden="true" />Beli</button>
                                <Link style={{paddingLeft:5}} to="detail.html"><button className="btn btn-success"><span style={{marginRight: 20}} className="fa fa-align-left" aria-hidden="true" />Detail</button></Link>    
                                </p></div>
                            <div className="clearfix">
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="col-item">
                            <div className="photo">
                            <img src="image/tent4.jpg" className="img-responsive" alt="Link" />
                            </div>
                            <div className="info">
                            <div className="row">
                                <div className="price col-md-6">
                                <h5>SSAULT 2</h5>
                                <h5 className="price-text-color">
                                    Rp.1.500.000 </h5>
                                </div>
                                <div className="rating hidden-sm col-md-6">
                                <i className="price-text-color fa fa-star" /><i className="price-text-color fa fa-star">
                                </i><i className="price-text-color fa fa-star" /><i className="price-text-color fa fa-star">
                                </i><i className="fa fa-star" />
                                </div>
                            </div>
                            <div className="separator clear-left">
                                <p className="btn-add">
                                <button className="btn btn-success"><span style={{marginRight: 20}} className="glyphicon glyphicon-shopping-cart" aria-hidden="true" />Beli</button>
                                <Link style={{paddingLeft:5}} to="detail.html"><button className="btn btn-success"><span style={{marginRight: 20}} className="fa fa-align-left" aria-hidden="true" />Detail</button></Link>    
                                </p></div>
                            <div className="clearfix">
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="item">
                    <div className="row">
                        <div className="col-sm-3">
                        <div className="col-item">
                            <div className="photo">
                            <img src="image/tent5.jpg" className="img-responsive" alt="Link" />
                            </div>
                            <div className="info">
                            <div className="row">
                                <div className="price col-md-6">
                                <h5>ALPINE GUIDE 3</h5>
                                <h5 className="price-text-color">
                                    Rp.2.250.000 </h5>
                                </div>
                                <div className="rating hidden-sm col-md-6">
                                <i className="price-text-color fa fa-star" /><i className="price-text-color fa fa-star">
                                </i><i className="price-text-color fa fa-star" /><i className="price-text-color fa fa-star">
                                </i><i className="fa fa-star" />
                                </div>
                            </div>
                            <div className="separator clear-left">
                                <p className="btn-add">
                                <button className="btn btn-success"><span style={{marginRight: 20}} className="glyphicon glyphicon-shopping-cart" aria-hidden="true" />Beli</button>
                                <Link style={{paddingLeft:5}} to="detail.html"><button className="btn btn-success"><span style={{marginRight: 20}} className="fa fa-align-left" aria-hidden="true" />Detail</button></Link>    
                                </p></div>
                            <div className="clearfix">
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="col-item">
                            <div className="photo">
                            <img src="image/tent4.jpg" className="img-responsive" alt="Link" />
                            </div>
                            <div className="info">
                            <div className="row">
                                <div className="price col-md-6">
                                <h5>
                                    Arial 2</h5>
                                <h5 className="price-text-color">
                                    Rp.1.250.000</h5>
                                </div>
                                <div className="rating hidden-sm col-md-6">
                                <i className="price-text-color fa fa-star" /><i className="price-text-color fa fa-star">
                                </i>
                                </div>
                            </div>
                            <div className="separator clear-left">
                                <p className="btn-add">
                                <button className="btn btn-success"><span style={{marginRight: 20}} className="glyphicon glyphicon-shopping-cart" aria-hidden="true" />Beli</button>
                                <Link style={{paddingLeft:5}} to="detail.html"><button className="btn btn-success"><span style={{marginRight: 20}} className="fa fa-align-left" aria-hidden="true" />Detail</button></Link>    
                                </p></div>
                            <div className="clearfix">
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
export default Tenda;