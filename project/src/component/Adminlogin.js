import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Adminlogin  extends Component {
  render() {
    return (
        <div>
            <br/><br/><br/><br/>    
            <form className="form-horizontal">
                <fieldset>
                    {/* Form Name */}
                    <legend><center>Welcome Admin</center></legend>
                    {/* Text input*/}
                    <div className="form-group">
                    <label className="col-md-4 control-label" htmlFor="textinput">Admin</label>  
                    <div className="col-md-4">
                        <input id="textinput" name="textinput" type="text" placeholder="Enter Here" className="form-control input-md" />
                    </div>
                    </div>
                    {/* Password input*/}
                    <div className="form-group">
                    <label className="col-md-4 control-label" htmlFor="passwordinput">Password </label>
                    <div className="col-md-4">
                        <input id="passwordinput" name="passwordinput" type="password" placeholder="password" className="form-control input-md" />
                    </div>
                    </div>
                    {/* Button (Double) */}
                    <div className="form-group">
                    <label className="col-md-4 control-label" htmlFor="button1id" />
                    <div className="col-md-8">
                    <Link style={{paddingRight:10}} to='/Admin'><button id="button1id" name="button1id" className="btn btn-success">Save </button></Link>
                    <Link to='/Login'><button id="button2id" name="button2id" className="btn btn-danger">Cancel</button></Link>
                       
                        
                    </div>
                    </div>
                </fieldset>
            </form>


        </div>
    );
  }
}
export default Adminlogin;