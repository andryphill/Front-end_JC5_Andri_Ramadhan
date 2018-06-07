import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Detail extends Component {
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
                        <li><Link to="/">Category</Link></li>
                        <li><Link to="/tenda">Tenda</Link></li>
                        <li className="active">Details</li>
                    </ol>
                    </div>
                </div>
                </div>
            </div>
            {/*====================== NAVBAR MENU START===================*/}
            <div className="container">
                <div className="row">
                <div className="col-xs-4 item-photo">
                    <img style={{maxWidth: '100%'}} src="image/tent1.jpg" />
                </div>
                <div className="col-xs-5" style={{border: '0px solid gray'}}>
                    {/* Datos del vendedor y titulo del producto */}
                    <h3>2-METER DOME</h3>    
                    <h5 style={{color: '#337ab7'}}><Link to="">The North Face</Link> · <small style={{color: '#337ab7'}}>(54 pembeli)</small></h5>
                    {/* Precios */}
                    <h6 className="title-price"><small>Harga</small></h6>
                    <h3 style={{marginTop: 0}}>Rp 2.000.000</h3>
                    <div className="section" style={{paddingBottom: 20}}>
                    <h6 className="title-attr"><small>Jumlah</small></h6>                    
                    <div>
                        <div className="btn">
                        <i className="fa fa-plus fa-1x"> </i>
                        <input defaultValue={1} />
                        <i className="fa fa-minus fa-1x"> </i>
                        </div>
                    </div>
                    </div>                
                    {/* Botones de compra */}
                    <div className="section" style={{paddingBottom: 20}}>
                    <Link style={{paddingRight: 5}} to="/Cart"><button className="btn btn-success"><span style={{marginRight: 20}} className="glyphicon glyphicon-shopping-cart" aria-hidden="true" />Beli</button></Link>
                    <Link to><button className="btn btn-success"><span style={{marginRight: 20}} className="fa fa-heart" aria-hidden="true" />Favorit</button>
                    </Link></div><Link to>                                      </Link>
                </div>                              
                <div className="col-xs-9">
                    <ul className="menu-items">
                    <li className="active">DETAILS</li>
                    </ul>
                    <div style={{width: '100%', borderTop: '1px solid silver'}}>
                    <p style={{padding: 15}}>
                        <small>
                        "If you are planning on spending long periods of time in the mountains, this is the dream base camp tent.  This 2-Meter Dome was my living room, bed room, kitchen, and art studio for two months in the Himalayas.  It was so cozy I almost didn't want to leave." - Cedar Wright, The North Face® Athlete, Rock Climber. The ultimate eight-person expedition base camp tent, the 2-Meter Dome is extremely durable and efficient in merciless environs such as the Himalayas and Antarctica. Setting the standard for unrivaled performance in major expeditions, this is the tent top mountaineers trust in critical conditions. Part of the Summit Series™ collection- the world’s finest alpine equipment.
                        </small>
                    </p>
                    <li>FEATURES</li> <br />
                    <small>
                        <ul>
                        <li> Summit Series™ represents the world’s finest alpine equipment and apparel. </li>
                        <li>2-meter dome tent is the ultimate eight-person expedition base camp tent</li>
                        <li>Hemisphere shape demonstrates the original geodesic dome principle developed by Buckminster Fuller. </li>
                        <li>Easton 7075-E9 aluminum poles. </li>
                        <li>Pole configuration creates steep walls and maximum user space.</li>
                        <li>Two exterior windows and Link chimney vent.</li>
                        <li>Interior canopy loops.</li>
                        <li>Dual doors</li>
                        <li>Fly Fabric: heavy-duty nylon oxford, 1500 mm PU coating</li>
                        <li>Canopy Fabric: heavy-duty nylon oxford, 1500 mm PU coating</li>    
                        </ul>  
                    </small>
                    </div>
                </div>		
                </div>
            </div>
        </div>

    </div>
    );
  }
}

export default Detail;
