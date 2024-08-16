import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled = false }) => {
  return (
    <button onClick={onClick} disabled={disabled} className="p-2 m-1 bg-blue-500 text-white rounded">
      {children}
    </button>
  );
};

export default Button;
