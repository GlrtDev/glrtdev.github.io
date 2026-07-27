import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline-secondary' | 'outline-primary';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  className?: string;
  isCollapsed?: boolean;
  controlsId?: string;
  target?: string;
  rel?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'outline-secondary',
  size = 'md',
  href,
  onClick,
  className = '',
  isCollapsed,
  controlsId,
  target,
  rel,
}) => {
  // Padding & Size mapping
  const sizeClasses = {
    sm: 'btn-sm px-3 py-1',
    md: 'px-3 py-1.5', // Crisp medium padding
    lg: 'btn-lg px-4 py-2',
  }[size];

  const combinedClasses = `btn btn-${variant} ${sizeClasses} rounded-pill d-inline-flex align-items-center justify-content-center gap-2 ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={combinedClasses}
      onClick={onClick}
      aria-expanded={isCollapsed !== undefined ? !isCollapsed : undefined}
      aria-controls={controlsId}
    >
      {children}
    </button>
  );
};

export default Button;