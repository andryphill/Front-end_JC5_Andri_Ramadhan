import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home  extends Component {
  render() {
    return (
    <div>
        <div>
            <div className="jumbotron">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to={0} className="active" />
                    <li data-target="#myCarousel" data-slide-to={1} />
                    <li data-target="#myCarousel" data-slide-to={2} />
                </ol>
                {/* Wrapper for slides */}
                <center>
                    <div className="carousel-inner">
                    <div className="item active">
                        <img src="image/jacket series.jpg " style={{width: '100%',}} alt="Los Angeles" />
                    </div>
                    <div className="item">
                        <img src="image/Pack Light 920x400.jpg" alt="Chicago" width="100%" />
                    </div>
                    <div className="item">
                        <img src="image/family-tent.jpg" alt="New york" width="100%" />
                    </div>
                    </div>
                    {/* Left and right controls */}
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" />
                    <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" />
                    <span className="sr-only">Next</span>
                    </a>
                </center></div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-2">
                <div className="responsive">
                    <ul> <h3> -- Categories --</h3></ul>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-3">
                <div className="thumbnail">
                    <img src="image/tent.jpeg" width="225px" alt="..." />  
                    <center> <Link to="/tenda" className="btn btn-primary" role="button">Tenda</Link></center> 
                </div>
                </div>
                <div className="col-sm-12 col-md-3">
                <div className="thumbnail">
                    <img src="image/download.jpg" alt="..." />  
                    <center> <Link to="" className="btn btn-primary" role="button">Tracking Shoes</Link></center> 
                </div>
                </div>
                <div className="col-sm-12 col-md-3">
                <div className="thumbnail">
                    <img src="image/jackets.jpg" width="225px" alt="..." />  
                    <center> <Link to="" className="btn btn-primary" role="button">Jakets</Link></center> 
                </div>
                </div>
                <div className="col-sm-12 col-md-3">
                <div className="thumbnail">
                    <img src="image/sb.jpg" width="225px" alt="..." />  
                    <center> <Link to="" className="btn btn-primary" role="button">Sleeping Bag</Link></center> 
                </div>
                </div>
                <div className="col-sm-12 col-md-3">
                <div className="thumbnail">
                    <img src="image/tnf.jpg" alt="..." />  
                    <center> <Link to="" className="btn btn-primary" role="button">Shirt</Link></center> 
                </div>
                </div>
                <div className="col-sm-12 col-md-3">
                <div className="thumbnail">
                    <img src="image/osprey.jpg" alt="..." />  
                    <center> <Link to="" className="btn btn-primary" role="button">Back Pack</Link></center> 
                </div>
                </div>
                <div className="col-sm-12 col-md-3">
                <div className="thumbnail">
                    <img src="image/pants.jpg" alt="..." />  
                    <center> <Link to="" className="btn btn-primary" role="button">Pants</Link></center> 
                </div>
                </div>
                <div className="col-sm-12 col-md-3">
                <div className="thumbnail">
                    <img src="image/sandals.jpg" width="225px" alt="..." />  
                    <center> <Link to="" className="btn btn-primary" role="button">Sandals</Link></center> 
                </div>
                </div>
            </div>
            <hr />
</div>

             
        </div>
    );
  }
}
export default Home;