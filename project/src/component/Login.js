import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login  extends Component {
  render() {
    return (
    <div>
      <div className="container">
        <div className="col-xs-12 col-sm-12 col-md-12 well well-sm"> 
          <div className="omb_login">
            <h3 className="omb_authTitle">Login or <Link to="/SignUp">Sign up</Link></h3>
            <div className="row omb_row-sm-offset-3 omb_socialButtons">
              <div className="col-xs-4 col-sm-2">
                <Link to="" className="btn btn-lg btn-block omb_btn-facebook">
                  <i className="fa fa-facebook visible-xs" />
                  <span className="hidden-xs">Facebook</span>
                </Link>
              </div>
              <div className="col-xs-4 col-sm-2">
                <Link to="" className="btn btn-lg btn-block omb_btn-twitter">
                  <i className="fa fa-twitter visible-xs" />
                  <span className="hidden-xs">Twitter</span>
                </Link>
              </div>	
              <div className="col-xs-4 col-sm-2">
                <Link to="" className="btn btn-lg btn-block omb_btn-google">
                  <i className="fa fa-google-plus visible-xs" />
                  <span className="hidden-xs">Google+</span>
                </Link>
              </div>	
            </div>
            <div className="row omb_row-sm-offset-3 omb_loginOr">
              <div className="col-xs-12 col-sm-6">
                <hr className="omb_hrOr" />
                <span className="omb_spanOr">or</span>
              </div>
            </div>
            <div className="row omb_row-sm-offset-3">
              <div className="col-xs-12 col-sm-6">	
                <form className="omb_loginForm" action autoComplete="off" method="POST">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-user" /></span>
                    <input type="text" className="form-control" name="username" placeholder="email address" />
                  </div>
                  <span className="help-block" />
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-lock" /></span>
                    <input type="password" className="form-control" name="password" placeholder="Password" />
                  </div>
                  <span className="help-block">Password error</span>
                  <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                </form>
              </div>
            </div>
            <div className="row omb_row-sm-offset-3">
              <div className="col-xs-12 col-sm-3">
                <label className="checkbox">
                  <input type="checkbox" defaultValue="remember-me" />Remember Me
                </label>
              </div>
              <div className="col-xs-12 col-sm-3">
                <p className="omb_forgotPwd">
                  <Link to="">Forgot password?</Link>
                </p>
              </div>
              
              <div className="col-xs-12 col-sm-4">
                <p className="omb_forgotPwd">
                <Link to='/Adminlogin'><button type="button" className="btn btn-danger" >Login as admin</button></Link>
                  
                </p>
              </div>
              
            </div>	    	
          </div>
        </div>
      </div>
</div>
    );
  }
}
export default Login;