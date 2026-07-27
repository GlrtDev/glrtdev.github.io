// src/components/TechStackButton.tsx
import React from 'react';

type TechStackButtonProps = {
  label: string;
  onClick: () => void;
  isCollapsed: boolean;
  controlsId: string;
};

const TechStackButton: React.FC<TechStackButtonProps> = ({
  label,
  onClick,
  isCollapsed,
  controlsId,
}) => {
  return (
    <button
      type="button"
      className="btn btn-outline-secondary btn-lg px-4"
      onClick={onClick}
      aria-expanded={!isCollapsed}
      aria-controls={controlsId}
    >
      {label}
    </button>
  );
};

export default TechStackButton;