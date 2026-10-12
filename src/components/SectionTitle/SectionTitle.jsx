import './SectionTitle.css';

const SectionTitle = ({ title, subtitle, centered = false, light = false }) => {
  return (
    <div className={`section-title ${centered ? 'text-center' : ''} ${light ? 'text-light' : ''}`}>
      {subtitle && <span className="subtitle">{subtitle}</span>}
      <h2 className="title">{title}</h2>
    </div>
  );
};

export default SectionTitle;
