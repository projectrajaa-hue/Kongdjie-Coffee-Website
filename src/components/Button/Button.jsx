import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ children, to, variant = 'primary', className = '', onClick, type = 'button' }) => {
  const baseClassName = `btn btn-${variant} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClassName} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={baseClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
