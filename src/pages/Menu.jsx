import { useState } from 'react';
import MenuCard from '../components/MenuCard/MenuCard';
import './Menu.css';

// Aset Foto Kopi Khas Kong Djie
import kopiOImg from '../assets/images/Kopi O .jpeg';
import kopiSusuImg from '../assets/images/Kopi Susu.png';
import esKopiOImg from '../assets/images/es-kopi-o.jpg';
import esKopiSusuImg from '../assets/images/es-kopi-susu.jpg';

// Aset Foto Minuman Non-Kopi
import tehManisImg from '../assets/images/es-teh-manis.jpg';
import tehTarikImg from '../assets/images/teh-tarik.jpg';
import coklatSusuImg from '../assets/images/coklat-susu.jpg';
import esSusuNutrisariImg from '../assets/images/es-susu-nutrisari.jpg';

// Aset Foto Camilan Pendamping (Makanan)
import pisangGorengImg from '../assets/images/pisang-goreng.jpg';
import singkongKejuImg from '../assets/images/singkong-keju.jpg';
import rotiBakarImg from '../assets/images/roti-bakar.jpg';
import telurSetengahMatangImg from '../assets/images/telur-setengah-matang.jpg';

// Aset Foto Oleh-Oleh Khas Belitung
import olehOleh1Img from '../assets/images/oleh-oleh 1.png';
import olehOleh2Img from '../assets/images/oleh-oleh 2.png';
import sirupJerukKunciImg from '../assets/images/sirup-jeruk-kunci.jpg';
import heroKopitiamWarm from '../assets/images/hero-kopitiam-warm.jpg';

const menuData = [
  // KOPI
  {
    id: 1,
    category: 'KOPI',
    name: 'Kopi O',
    description: 'Kopi hitam pekat dan murni khas Belitung yang diseduh dengan teko arang tradisional.',
    price: 'Rp 15.000',
    image: kopiOImg,
    imagePosition: 'center 85%'
  },
  {
    id: 2,
    category: 'KOPI',
    name: 'Kopi Susu',
    description: 'Rasa manis legit susu kental manis berpadu dengan pekatnya seduhan kopi hitam khas Kong Djie.',
    price: 'Rp 18.000',
    image: kopiSusuImg
  },
  {
    id: 3,
    category: 'KOPI',
    name: 'Kopi O Es',
    description: 'Kopi hitam pekat murni khas Belitung yang disajikan segar dengan es batu dingin.',
    price: 'Rp 16.000',
    image: esKopiOImg
  },
  {
    id: 4,
    category: 'KOPI',
    name: 'Es Kopi Susu',
    description: 'Kopi susu dingin khas racikan legendaris Kong Djie untuk menyegarkan hari Anda.',
    price: 'Rp 20.000',
    image: esKopiSusuImg
  },

  // NON KOPI
  {
    id: 5,
    category: 'NON KOPI',
    name: 'Teh Manis / Es Teh',
    description: 'Pilihan klasik yang menyegarkan untuk melepas dahaga.',
    price: 'Rp 10.000',
    image: tehManisImg
  },
  {
    id: 6,
    category: 'NON KOPI',
    name: 'Teh Tarik / Teh Susu',
    description: 'Perpaduan teh khas dengan susu kental manis yang gurih dan berbusa lembut.',
    price: 'Rp 18.000',
    image: tehTarikImg
  },
  {
    id: 7,
    category: 'NON KOPI',
    name: 'Coklat Susu (Es / Panas)',
    description: 'Salah satu menu non-kopi favorit yang memiliki rasa coklat pekat, legit, dan tekstur yang creamy.',
    price: 'Rp 22.000',
    image: coklatSusuImg
  },
  {
    id: 8,
    category: 'NON KOPI',
    name: 'Es Susu Nutrisari',
    description: 'Minuman jeruk susu yang segar untuk melepas dahaga.',
    price: 'Rp 15.000',
    image: esSusuNutrisariImg
  },

  // MAKANAN (Camilan Pendamping)
  {
    id: 9,
    category: 'MAKANAN',
    name: 'Pisang Goreng / Pisang Bakar',
    description: 'Pisang pilihan digoreng renyah atau dibakar gurih, camilan pendamping kopi yang sempurna.',
    price: 'Rp 18.000',
    image: pisangGorengImg
  },
  {
    id: 10,
    category: 'MAKANAN',
    name: 'Singkong Goreng Keju',
    description: 'Singkong empuk gurih merekah dengan taburan keju cheddar parut melimpah.',
    price: 'Rp 20.000',
    image: singkongKejuImg
  },
  {
    id: 11,
    category: 'MAKANAN',
    name: 'Roti Bakar / Roti Panggang (Srikaya, Keju, Coklat)',
    description: 'Roti panggang hangat dengan pilihan selai srikaya khas Belitung, keju gurih, atau coklat manis.',
    price: 'Rp 18.000',
    image: rotiBakarImg
  },
  {
    id: 12,
    category: 'MAKANAN',
    name: 'Telur Setengah Matang (Telur Ayam Kampung)',
    description: 'Dua butir telur ayam kampung setengah matang hangat disajikan dengan lada dan kecap asin.',
    price: 'Rp 15.000',
    image: telurSetengahMatangImg
  },

  // OLEH-OLEH
  {
    id: 13,
    category: 'OLEH-OLEH',
    name: 'Kopi Bubuk Kong Djie',
    description: 'Bawa pulang aroma legendaris dengan kopi bubuk kemasan asli kami (Kemasan 250gr).',
    price: 'Rp 35.000',
    image: olehOleh2Img,
    fitContain: true
  },
  {
    id: 14,
    category: 'OLEH-OLEH',
    name: 'Coklat Bubuk Kong Djie',
    description: 'Bubuk coklat khas racikan Kong Djie dengan cita rasa gurih manis yang lembut (Kemasan 250gr).',
    price: 'Rp 35.000',
    image: olehOleh1Img,
    fitContain: true
  },
  {
    id: 15,
    category: 'OLEH-OLEH',
    name: 'Sirup Jeruk Kunci',
    description: 'Oleh-oleh khas Belitung. Segar, manis alami, dan kaya vitamin C.',
    price: 'Rp 45.000',
    image: sirupJerukKunciImg
  }
];

const categories = ['KOPI', 'NON KOPI', 'MAKANAN', 'OLEH-OLEH'];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('KOPI');

  const filteredMenu = menuData.filter(item => item.category === activeCategory);

  return (
    <div className="menu-page page-transition">
      <div className="page-hero">
        <div className="page-hero-bg">
          <img src={heroKopitiamWarm} alt="Kedai Kopi Kong Djie" />
          <div className="page-hero-overlay"></div>
        </div>
        <div className="container page-hero-content text-center">
          <span className="page-hero-badge">Warung Kopi Sejak 1943</span>
          <h1>Menu Kong Djie</h1>
          <p>Cita rasa autentik kopi dan camilan tradisional khas Belitung.</p>
        </div>
      </div>

      <section className="menu-section">
        <div className="container">
          <div className="menu-filters">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="menu-grid">
            {filteredMenu.map(item => (
              <MenuCard 
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                fitContain={item.fitContain}
                imagePosition={item.imagePosition}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
