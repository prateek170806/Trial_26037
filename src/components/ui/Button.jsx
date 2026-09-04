import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '', icon: Icon, ariaLabel }) => {
  const btnClass = `btn btn-${variant} ${className}`;

  return (
    <button
      className={btnClass}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
      {Icon && <Icon size={18} aria-hidden="true" />}
    </button>
  );
};

export default Button;
