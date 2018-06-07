import React, { Component } from 'react';


class SignUp  extends Component {
  render() {
    return (
    <div>
      <br/><br/><br/><br/>
        <div className="container">
        <div className="row ">
          <div className="col-md-2" />
          <div className="col-md-8">
            <center>
              <div className="col-xs-12 col-sm-12 col-md-12 well well-sm">
                <legend><i className="glyphicon glyphicon-globe" /> Sign up!</legend>
                <form action="#" method="post" className="form" role="form">
                  <div className="row">
                    <div className="col-xs-6 col-md-6">
                      <p className="pull-left"><b>Enter your first name </b></p>
                      <input className="form-control" name="firstname" placeholder="First Name" type="text" required autofocus /> <br />
                    </div>
                    <div className="col-xs-6 col-md-6">
                      <p className="pull-left"><b>Enter your last name </b></p>
                      <input className="form-control" name="lastname" placeholder="Last Name" type="text" required />     
                    </div>
                  </div>
                  <p className="pull-left"><b>Enter your Phone number </b></p>
                  <input className="form-control"  name="youphonenumber" placeholder="Your Phone Number" type="number" />
                  <p className="pull-left"><b>Enter your Email </b></p>
                  <input className="form-control" name="youremail" placeholder="Your Email" type="email" />
                  <p className="pull-left"><b>Re-Enter your Email </b></p>
                  <input className="form-control" name="reenteremail" placeholder="Re-enter Email" type="email" />
                  <p className="pull-left"><b>Enter your Password </b></p>
                  <input className="form-control" name="password" placeholder="New Password" type="password" />
                  <p className="pull-left"><b>Enter your shipping address </b></p>
                  <input className="form-control" name="address" placeholder="shipping address" type="text" />
                  <label htmlFor>
                    Birth Date</label>
                  <div className="row">
                    <div className="col-xs-4 col-md-4">
                      <select className="form-control">
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="Mars">Mars</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                      </select>
                    </div>
                    <div className="col-xs-4 col-md-4">
                      <select className="form-control">
                        <option value={'01'}>01</option>
                        <option value={'02'}>02</option>
                        <option value={'03'}>03</option>
                        <option value={'04'}>04</option>
                        <option value={'05'}>05</option>
                        <option value={'06'}>06</option>
                        <option value={'07'}>07</option>
                        <option value={'08'}>08</option>
                        <option value={'09'}>09</option>
                        <option value={'10'}>10</option>
                        <option value={'11'}>11</option>
                        <option value={'12'}>12</option>
                        <option value={'13'}>13</option>
                        <option value={'14'}>14</option>
                        <option value={'15'}>15</option>
                        <option value={'16'}>16</option>
                        <option value={'17'}>17</option>
                        <option value={'18'}>18</option>
                        <option value={'19'}>19</option>
                        <option value={'20'}>21</option>
                        <option value={'21'}>22</option>
                        <option value={'22'}>23</option>
                        <option value={'23'}>24</option>
                        <option value={'24'}>25</option>
                        <option value={'25'}>26</option>
                        <option value={'26'}>27</option>
                        <option value={'27'}>28</option>
                        <option value={'28'}>29</option>
                        <option value={'29'}>30</option>
                        <option value={'30'}>31</option>
                        

                      </select>
                    </div>
                    <div className="col-xs-4 col-md-4">
                      <select className="form-control">
                        <option value={'2012'}>2012</option>
                        <option value={'2011'}>2011</option>
                        <option value={'2010'}>2010</option>
                        <option value={'2009'}>2009</option>
                        <option value={'2008'}>2008</option>
                        <option value={'2007'}>2007</option>
                        <option value={'2006'}>2006</option>
                        <option value={'2005'}>2005</option>
                        <option value={'2004'}>2004</option>
                        <option value={'2003'}>2003</option>
                        <option value={'2002'}>2002</option>
                        <option value={'2001'}>2001</option>
                        <option value={'2000'}>2000</option>
                        <option value={'1999'}>1999</option>
                        <option value={'1998'}>1998</option>
                        <option value={'1997'}>1997</option>
                        <option value={'1996'}>1996</option>
                        <option value={'1995'}>1995</option>
                        <option value={'1994'}>1994</option>
                        <option value={'1993'}>1993</option>
                        <option value={'1992'}>1992</option>
                        <option value={'1991'}>1991</option>
                        <option value={'1990'}>1990</option>
                        <option value={'1989'}>1989</option>
                        <option value={'1988'}>1988</option>
                        <option value={'1987'}>1987</option>
                        <option value={'1986'}>1986</option>
                        <option value={'1985'}>1985</option>
                        <option value={'1984'}>1984</option>
                        <option value={'1983'}>1983</option>
                        <option value={'1982'}>1982</option>
                        <option value={'1981'}>1981</option>
                        <option value={'1980'}>1980</option>
                        <option value={'1979'}>1979</option>
                        <option value={'1978'}>1978</option>
                        <option value={'1977'}>1977</option>
                        <option value={'1976'}>1976</option>
                        <option value={'1975'}>1975</option>
                        <option value={'1974'}>1974</option>
                        <option value={'1973'}>1973</option>
                        <option value={'1972'}>1972</option>
                        <option value={'1971'}>1971</option>
                        <option value={'1970'}>1970</option>
                      </select>
                    </div>
                  </div>
                  <br />
                  <p><b> Gender </b></p>
                  <label className="radio-inline">
                    <input type="radio" name="sex" id="inlineCheckbox1" defaultValue="male" />
                    Male
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="sex" id="inlineCheckbox2" defaultValue="female" />
                    Female
                  </label>
                  <br />
                  <br />
                  <button className="btn btn-lg btn-primary btn-block " type="submit">
                    Sign up</button>
                </form>
              </div>
            </center></div>
          <div className="col-md-2" />
        </div>
      </div>
</div>
    );
  }
}
export default SignUp;