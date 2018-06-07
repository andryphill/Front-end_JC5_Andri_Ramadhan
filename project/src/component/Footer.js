import React, { Component } from 'react';

class Footer  extends Component {
  render() {
    return (
    <div>
      <footer>
             <div className="footerHeader1" >

             </div>
            <div className="container">
            <div className="col-md-4" >
                <h3>About us</h3>
                <p>
                    Kami adalah perushaan yg menjual barang - barang untuk keperluan kegiatan alam bebas.    
                </p>
                <p>Selamat berbuka puasa.</p>
                <p>Mohon maaf lahir dan batin</p>
                <p>MARHABAN YA RAMADHAN</p>
            </div>
            
            <div className="col-md-4">
                <h3>Our Location </h3>
                <iframe title="apa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d433868.0837064906!2d35.66744174160663!3d31.836036762053016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fb85d7981af%3A0x631c30c0f8dc65e8!2sAmman!5e0!3m2!1sen!2sjo!4v1499168051085" width="300" height="150" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                
            </div>
            <div className="col-md-4" >
                <h3>Contact Us</h3>
                <ul>
                    <li>Phone : 123 - 456 - 789</li>
                    <li>E-mail : info@comapyn.com</li>
                    <li>Fax : 123 - 456 - 789</li>
                </ul>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
              
            </div>
            </div>
        
        </footer>
        </div>
    );
  }
}
export default Footer;