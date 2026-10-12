import './MenuCard.css';

const MenuCard = ({ name, description, price, image, fitContain, imagePosition }) => {
  return (
    <div className="menu-card">
      <div className={`menu-image-container ${fitContain ? 'contain-mode' : ''}`}>
        <img 
          src={image} 
          alt={name} 
          className="menu-image" 
          style={imagePosition ? { objectPosition: imagePosition } : {}}
          loading="lazy" 
        />
      </div>
      <div className="menu-content">
        <div className="menu-header">
          <h3 className="menu-name">{name}</h3>
          <span className="menu-price">{price}</span>
        </div>
        <p className="menu-description">{description}</p>
      </div>
    </div>
  );
};

export default MenuCard;
