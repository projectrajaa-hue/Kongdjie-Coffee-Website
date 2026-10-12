import { useEffect } from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import Button from '../components/Button/Button';
import './Home.css';
import heroImage from '../assets/images/Foto Kedai Kongdjie.jpeg';
import aboutImg1 from '../assets/images/foto 1 about us.jpeg';
import aboutImg2 from '../assets/images/foto 2 about us .jpeg';
import kopiOImg from '../assets/images/Kopi O .jpeg';
import kopiSusuImg from '../assets/images/Kopi Susu.png';
import olehOleh1Img from '../assets/images/oleh-oleh 1.png';
import olehOleh2Img from '../assets/images/oleh-oleh 2.png';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-natural">
      {/* Warm Hero */}
      <section className="hero-natural">
        <div className="container hero-natural-grid">
          <div className="hero-natural-content">
            <span className="hero-badge-natural">Sejak 1943</span>
            <h1 className="hero-title-natural">
              Seperti Pulang <span>ke Rumah.</span>
            </h1>
            <p className="hero-desc-natural">
              Nikmati seduhan kopi tradisional dengan kehangatan layaknya keluarga. Ruang yang sederhana untuk cerita yang istimewa.
            </p>
            <div className="hero-actions-natural">
              <Button to="/menu" variant="primary" className="btn-earth">Pesan Kopi</Button>
              <Button to="/location" variant="outline" className="btn-outline-earth">Mampir Sebentar</Button>
            </div>
          </div>
          <div className="hero-natural-image">
            <div className="image-frame">
              <img src={heroImage} alt="Suasana hangat Kong Djie" />
            </div>
          </div>
        </div>
        <div className="hero-organic-shape">
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="#FAF6F0"></path>
          </svg>
        </div>
      </section>

      {/* Story - Natural Feel */}
      <section className="story-natural">
        <div className="container story-natural-inner">
          <div className="story-natural-text">
            <h2>Kisah di Balik Setiap Cangkir</h2>
            <p>
              Di Kong Djie, kami tidak mengubah cara kami menyeduh kopi. Tungku arang, teko leher panjang, dan biji kopi pilihan masih setia menemani perjalanan kami sejak puluhan tahun lalu.
            </p>
            <p>
              Karena kami percaya, hal yang natural dan dipertahankan apa adanya selalu berhasil menghadirkan kehangatan yang tak lekang oleh waktu.
            </p>
          </div>
          <div className="story-natural-images">
            <img src={aboutImg1} alt="Kisah Kong Djie" className="img-main" />
            <img src={aboutImg2} alt="Suasana Kong Djie" className="img-accent" />
          </div>
        </div>
      </section>

      {/* Signature Menu - Warm Cards */}
      <section className="menu-natural">
        <div className="container text-center">
          <span className="section-subtitle-natural">Sajian Khas Kami</span>
          <h2 className="section-title-natural">Sederhana Namun Menggugah</h2>
          
          <div className="menu-natural-grid">
            {[
              { 
                tag: 'Warisan 1943',
                num: '01',
                name: 'Kopi O', 
                desc: 'Kopi hitam pekat dan murni khas Belitung.', 
                price: 'Rp 15.000', 
                img: kopiOImg,
                feature: 'Seduh Tradisional'
              },
              { 
                tag: 'Favorit Tamu',
                num: '02',
                name: 'Kopi Susu', 
                desc: 'Rasa manis susu yang berpadu dengan kuatnya kopi.', 
                price: 'Rp 18.000', 
                img: kopiSusuImg,
                feature: 'Manis & Gurih'
              },
              { 
                tag: 'Racikan Klasik',
                num: '03',
                name: 'Teh Tarik', 
                desc: 'Hangatnya teh susu untuk sore yang santai.', 
                price: 'Rp 18.000', 
                img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=600',
                feature: 'Buih Halus Khas'
              },
            ].map((item, idx) => (
              <div key={idx} className="menu-card-natural">
                <div className="menu-card-header-meta">
                  <span className="menu-card-tag">{item.tag}</span>
                  <span className="menu-card-num">{item.num}</span>
                </div>

                <div className="menu-card-img-wrap">
                  <img src={item.img} alt={item.name} />
                </div>

                <div className="menu-card-content">
                  <div className="menu-card-title-row">
                    <h3>{item.name}</h3>
                    <span className="menu-card-price-pill">{item.price}</span>
                  </div>
                  <p className="menu-card-desc">{item.desc}</p>
                  
                  <div className="menu-card-footer">
                    <span className="menu-card-feature">
                      <Sparkles size={14} className="feature-icon" />
                      {item.feature}
                    </span>
                    <span className="menu-card-action-btn">
                      Detail <ArrowUpRight size={15} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5 mb-4 pt-5">
            <span className="section-subtitle-natural">Bawa Pulang Kenangan</span>
            <h2 className="section-title-natural">Oleh-Oleh Khas Belitung</h2>
          </div>

          <div className="menu-natural-grid oleh-oleh-grid">
            {[
              { 
                tag: 'Khas Belitung',
                num: '01',
                name: 'Kopi Bubuk Kong Djie', 
                desc: 'Bawa pulang kehangatan dan aroma kopi legendaris Kong Djie dalam kemasan bubuk asli.', 
                price: 'Rp 35.000', 
                img: olehOleh2Img,
                feature: 'Kemasan 250gr'
              },
              { 
                tag: 'Cita Rasa Manis',
                num: '02',
                name: 'Coklat Bubuk Kong Djie', 
                desc: 'Coklat bubuk khas racikan Kong Djie dengan rasa gurih manis yang lembut.', 
                price: 'Rp 35.000', 
                img: olehOleh1Img,
                feature: 'Kemasan 250gr'
              },
            ].map((item, idx) => (
              <div key={idx} className="menu-card-natural">
                <div className="menu-card-header-meta">
                  <span className="menu-card-tag">{item.tag}</span>
                  <span className="menu-card-num">{item.num}</span>
                </div>

                <div className="menu-card-img-wrap">
                  <img src={item.img} alt={item.name} />
                </div>

                <div className="menu-card-content">
                  <div className="menu-card-title-row">
                    <h3>{item.name}</h3>
                    <span className="menu-card-price-pill">{item.price}</span>
                  </div>
                  <p className="menu-card-desc">{item.desc}</p>
                  
                  <div className="menu-card-footer">
                    <span className="menu-card-feature">
                      <Sparkles size={14} className="feature-icon" />
                      {item.feature}
                    </span>
                    <span className="menu-card-action-btn">
                      Detail <ArrowUpRight size={15} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="menu-natural-btn">
            <Button to="/menu" variant="secondary" className="btn-outline-earth">Lihat Semua Menu</Button>
          </div>
        </div>
      </section>

      {/* Cozy CTA */}
      <section className="cta-natural">
        <div className="container cta-natural-box">
          <div className="cta-natural-content">
            <h2>Mari Duduk dan Bercerita</h2>
            <p>Pintu kami selalu terbuka untuk menyambut Anda.</p>
            <Button to="/location" variant="primary" className="btn-earth">Lihat Rute ke Lokasi</Button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
