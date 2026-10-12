import SectionTitle from '../components/SectionTitle/SectionTitle';
import Button from '../components/Button/Button';
import { MapPin, Clock, Phone } from 'lucide-react';
import './Location.css';
import heroKopitiamWarm from '../assets/images/hero-kopitiam-warm.jpg';

const Location = () => {
  return (
    <div className="location-page page-transition">
      <div className="page-hero">
        <div className="page-hero-bg">
          <img src={heroKopitiamWarm} alt="Lokasi Kedai Kongdjie Coffee" />
          <div className="page-hero-overlay"></div>
        </div>
        <div className="container page-hero-content text-center">
          <span className="page-hero-badge">Kedai Asli Belitung</span>
          <h1>Lokasi Kami</h1>
          <p>Kunjungi kami dan nikmati waktu santai Anda di suasana kedai yang hangat.</p>
        </div>
      </div>

      <section className="location-section bg-off-white">
        <div className="container">
          <div className="location-grid">
            <div className="location-details">
              <SectionTitle title="Location & Hours" />
              
              <div className="info-list">
                <div className="info-item">
                  <MapPin className="info-icon" />
                  <div>
                    <h4>Address</h4>
                    <p>Jl. Siburik Barat No. 24 (Simpang Siburik / Jl. Gegedek),<br/>Kel. Tanjung Pandan, Kec. Tanjung Pandan,<br/>Kab. Belitung, Kepulauan Bangka Belitung 33411</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <Phone className="info-icon" />
                  <div>
                    <h4>Phone</h4>
                    <p>+62 812 3456 7890</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-icon">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <div>
                    <h4>Instagram</h4>
                    <p>@kongdjiecoffee</p>
                  </div>
                </div>
              </div>

              <div className="hours-container">
                <h4>Opening Hours</h4>
                <table className="hours-table">
                  <tbody>
                    <tr>
                      <td>Monday</td>
                      <td>07:00 - 22:00</td>
                    </tr>
                    <tr>
                      <td>Tuesday</td>
                      <td>07:00 - 22:00</td>
                    </tr>
                    <tr>
                      <td>Wednesday</td>
                      <td>07:00 - 22:00</td>
                    </tr>
                    <tr>
                      <td>Thursday</td>
                      <td>07:00 - 22:00</td>
                    </tr>
                    <tr>
                      <td>Friday</td>
                      <td>07:00 - 23:00</td>
                    </tr>
                    <tr>
                      <td>Saturday</td>
                      <td>08:00 - 23:00</td>
                    </tr>
                    <tr>
                      <td>Sunday</td>
                      <td>08:00 - 22:00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4">
                <a 
                  href="https://maps.app.goo.gl/Hfyzmdcwch21uCB66" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  Get Directions
                </a>
              </div>
            </div>
            
            <div className="location-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.814321094372!2d107.6280989!3d-2.7411915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e171667a6c8fadd%3A0x85bd331ae6f387e9!2sKong%20Djie%20Siburik!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Kong Djie Siburik Google Maps"
              ></iframe>
              <a 
                href="https://maps.app.goo.gl/Hfyzmdcwch21uCB66" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="map-floating-badge"
                title="Buka rute langsung di Google Maps"
              >
                <MapPin size={16} /> Buka di Google Maps ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
