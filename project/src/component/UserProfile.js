import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends Component {
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
                            <li><Link to="/">Home</Link></li>
                            <li className="active">User Profile</li>
                        </ol>
                        </div>
                    </div>
                    </div>
                </div>
                {/*====================== NAVBAR MENU START===================*/}
                <div className="container">
                    <div className="row">
                    <div className="col-md-10 ">
                        <form className="form-horizontal">
                        <fieldset>
                            {/* Form Name */}
                            <legend>User profile</legend>
                            {/* Text input*/}
                            <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="Name (Full name)">Name (Full name)</label>  
                            <div className="col-md-4">
                                <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-user">
                                    </i>
                                </div>
                                <input id="Name (Full name)" name="Name (Full name)" type="text" placeholder="Name (Full name)" className="form-control input-md" />
                                </div>
                            </div>
                            </div>
                            {/* File Button */} 
                            <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="Upload photo">Upload photo</label>
                            <div className="col-md-4">
                                <input id="Upload photo" name="Upload photo" className="input-file" type="file" />
                            </div>
                            </div>
                            {/* Text input*/}
                            <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="Date Of Birth">Date Of Birth</label>  
                            <div className="col-md-4">
                                <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-birthday-cake" />
                                </div>
                                <input id="Date Of Birth" name="Date Of Birth" type="text" placeholder="Date Of Birth" className="form-control input-md" />
                                </div>
                            </div>
                            </div>
                            {/* Multiple Radios (inline) */}
                            <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="Gender">Gender</label>
                            <div className="col-md-4"> 
                                <label className="radio-inline" htmlFor="Gender-0">
                                <input type="radio" name="Gender" id="Gender-0" defaultValue={1} defaultChecked="checked" />
                                Male
                                </label> 
                                <label className="radio-inline" htmlFor="Gender-1">
                                <input type="radio" name="Gender" id="Gender-1" defaultValue={2} />
                                Female
                                </label> 
                                <label className="radio-inline" htmlFor="Gender-2">
                                <input type="radio" name="Gender" id="Gender-2" defaultValue={3} />
                                Other
                                </label>
                            </div>
                            </div>
                            <div className="form-group">
                            <label className="col-md-4 control-label col-xs-12" htmlFor="Permanent Address">Permanent Address</label>  
                            <div className="col-md-2  col-xs-4">
                                <input id="Permanent Address" name="Permanent Address" type="text" placeholder="District" className="form-control input-md " />
                            </div>
                            <div className="col-md-2 col-xs-4">
                                <input id="Permanent Address" name="Permanent Address" type="text" placeholder="Area" className="form-control input-md " />
                            </div>
                            </div>
                            <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="Permanent Address" />  
                            <div className="col-md-2  col-xs-4">
                                <input id="Permanent Address" name="Permanent Address" type="text" placeholder="Street" className="form-control input-md " />
                            </div>
                            </div>
                            <div className="form-group">
                            <label className="col-md-4 control-label col-xs-12" htmlFor="Temporary Address">Temporary Address</label>  
                            <div className="col-md-2  col-xs-4">
                                <input id="Temporary Address" name="Temporary Address" type="text" placeholder="District" className="form-control input-md " />
                            </div>
                            <div className="col-md-2 col-xs-4">
                                <input id="Temporary Address" name="Temporary Address" type="text" placeholder="Area" className="form-control input-md " />
                            </div>
                            </div>
                            <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="Temporary Address" />  
                            <div className="col-md-2  col-xs-4">
                                <input id="Temporary Address" name="Temporary Address" type="text" placeholder="Street" className="form-control input-md " />
                            </div>
                            </div>
                            {/* Text input*/}
                            <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="Phone number ">Phone number </label>  
                            <div className="col-md-4">
                                <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-phone" />
                                </div>
                                <input id="Phone number " name="Phone number " type="text" placeholder="Primary Phone number " className="form-control input-md" />
                                </div> <br />
                                <div className="input-group othertop">
                                <div className="input-group-addon">
                                    <i className="fa fa-mobile fa-1x" style={{fontSize: 20}} />
                                </div>
                                <input id="Phone number " name="Secondary Phone number " type="text" placeholder=" Secondary Phone number " className="form-control input-md" />
                                </div>
                            </div>
                            </div>
                            {/* Text input*/}
                            <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="Email Address">Email Address</label>  
                            <div className="col-md-4">
                                <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-envelope-o" />
                                </div>
                                <input id="Email Address" name="Email Address" type="text" placeholder="Email Address" className="form-control input-md" />
                                </div>
                            </div>
                            </div>
                            {/* Textarea */}
                            <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="Overview (max 200 words)">Overview (max 200 words)</label>
                            <div className="col-md-4">                     
                                <textarea className="form-control" rows={10} id="Overview (max 200 words)" name="Overview (max 200 words)" defaultValue={"Overview"} />
                            </div>
                            </div>
                            <div className="form-group">
                            <label className="col-md-4 control-label" />  
                            <div className="col-md-4">
                                <Link   to="#" className="btn btn-success"><span className="glyphicon glyphicon-thumbs-up" /> Submit</Link>
                                <Link style={{marginLeft: 5}}   to="#" className="btn btn-danger" ><span className="glyphicon glyphicon-remove-sign" /> Clear</Link>
                            </div>
                            </div>
                        </fieldset>
                        </form>
                    </div>
                    <div className="col-md-2 hidden-xs">
                        <img src="image/avatar-1577909__340.png" className="img-responsive img-thumbnail " />
                    </div>
                    </div>
                </div>
                {/* jQuery Version 1.11.1 */}
                {/* Bootstrap Core JavaScript */}
                <div className="col-xs-9"> 
                    <h3>--Invoice History--</h3> 
                </div>
                <br /><br /><br /><br />
                <div style={{width: '100%', borderTop: '1px solid silver'}}>
                    <p style={{paddingLeft: 30}}>
                    </p><ul>
                    <div style={{paddingLeft: 30}} className='invoice'>
                    <Link to="/Invoice"><li>INV1</li><br /></Link> 
                    <Link to="/Invoice"><li>INV2</li><br /></Link>
                    <Link to="/Invoice"><li>INV3</li><br /></Link>
                    <Link to="/Invoice"><li>INV4</li><br /></Link>
                    </div>
                    </ul>
                    <p />
                </div>
            

        </div>
    );
  }
}

export default UserProfile;
