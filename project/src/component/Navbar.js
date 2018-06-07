import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>

             <nav className="navbar navbar-fixed-top navbar-inverse">
                <div className="container">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to='/'>Indik-Indik.</Link> 
                  </div>
                  <div id="navbar" className="collapse navbar-collapse">
                    
                        <form className="navbar-form navbar-right" role="search">

                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search"/>
                            </div>
                                <button type="submit" className="btn btn-default">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </form>
                    <ul className="nav navbar-nav navbar-left">
                      <li className="active"><Link to="/" className="fa fa-home fa-2x"></Link></li>
                      <li><Link to="" className="fa fa-map-pin fa-1x">Alamat Toko</Link></li>
                      <li><Link to="" className="fa fa-phone fa-1x"> Hubungi Kami</Link></li>
                    </ul>
                    <div>
                        <ul className="nav navbar-nav navbar-right">
                            <li> <Link to="/Login"><i className="fa fa-sign-in fa-1x"></i> Masuk </Link></li>
                            <li> <Link to="/SignUp"><i className="fa fa-child fa-1x" ></i> Daftar </Link></li>
                        </ul>
                    </div>
                  </div>
                </div>
        </nav>



      </div>
    );
  }
}

export default Navbar;
