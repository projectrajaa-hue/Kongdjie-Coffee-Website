import SectionTitle from '../components/SectionTitle/SectionTitle';
import './About.css';
import heroKopitiamWarm from '../assets/images/hero-kopitiam-warm.jpg';

const About = () => {
  return (
    <div className="about page-transition">
      <div className="page-hero">
        <div className="page-hero-bg">
          <img src={heroKopitiamWarm} alt="Cerita Kongdjie Coffee" />
          <div className="page-hero-overlay"></div>
        </div>
        <div className="container page-hero-content text-center">
          <span className="page-hero-badge">Warisan Tradisi Sejak 1943</span>
          <h1>Cerita Kami</h1>
          <p>Lebih dari sekadar secangkir kopi, ini tentang kehangatan keluarga.</p>
        </div>
      </div>

      <section className="about-section bg-off-white">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <SectionTitle title="The Beginning" />
              <p>
                Perjalanan Kongdjie Coffee dimulai dari sebuah ide sederhana: menciptakan ruang di mana kopi yang enak bertemu dengan suasana yang hangat. Kami percaya bahwa kopi bukan hanya sekadar minuman, melainkan media yang menyatukan orang-orang.
              </p>
              <p>
                Bermula dari kecintaan kami terhadap biji kopi lokal dan keinginan untuk menyajikannya dengan cara yang modern namun tetap otentik, Kongdjie Coffee hadir sebagai ruang bagi Anda untuk berhenti sejenak dari hiruk pikuk kota.
              </p>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800" alt="The Beginning" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-section bg-white">
        <div className="container">
          <div className="about-grid reverse">
            <div className="about-text">
              <SectionTitle title="Our Concept" />
              <p>
                Kongdjie Coffee mengusung konsep modern minimalism yang dipadukan dengan sentuhan earthy dan natural. Kami menggunakan palet warna hangat dan material alami untuk memberikan kesan 'homey' dan premium secara bersamaan.
              </p>
              <p>
                Setiap detail, mulai dari pencahayaan hingga pemilihan furnitur, dirancang agar Anda merasa nyaman, baik saat datang sendiri untuk bekerja maupun berkumpul bersama teman-teman.
              </p>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=800" alt="Our Concept" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-section bg-cream">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <SectionTitle title="Our Coffee" />
              <p>
                Kualitas adalah fondasi dari setiap cangkir yang kami sajikan. Kami bekerja sama dengan petani kopi lokal untuk memastikan setiap biji kopi diproses dengan standar tertinggi sebelum sampai ke tangan barista kami.
              </p>
              <p>
                Proses roasting yang presisi dan metode ekstraksi yang teliti menghasilkan profil rasa yang seimbang, kaya, dan tak terlupakan di setiap sesapan Anda.
              </p>
            </div>
            <div className="about-image double-img">
              <img src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=600" alt="Barista brewing" className="img-1" />
              <img src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=600" alt="Coffee beans" className="img-2" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-section bg-white text-center">
        <div className="container max-w-800">
          <SectionTitle title="Our Space" centered />
          <p className="large-text">
            Sebuah tempat yang dirancang untuk memperlambat waktu. Jendela besar yang membiarkan cahaya alami masuk, aroma kopi yang memenuhi ruangan, dan alunan musik lembut—semuanya diciptakan agar Anda merasa berada di tempat yang tepat.
          </p>
        </div>
      </section>

      <section className="philosophy-section-about">
        <div className="container">
          <SectionTitle title="Our Philosophy" centered />
          <div className="philosophy-grid">
            <div className="philosophy-card">
              <span className="philosophy-num">01</span>
              <h3>GOOD COFFEE</h3>
              <p>Menyajikan kopi dengan kualitas terbaik yang diseduh dengan sepenuh hati.</p>
            </div>
            <div className="philosophy-card">
              <span className="philosophy-num">02</span>
              <h3>GOOD SPACE</h3>
              <p>Menghadirkan lingkungan yang estetik, nyaman, dan mendukung setiap aktivitas Anda.</p>
            </div>
            <div className="philosophy-card">
              <span className="philosophy-num">03</span>
              <h3>GOOD MOMENTS</h3>
              <p>Menjadi bagian dari cerita dan momen berharga dalam keseharian Anda.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
