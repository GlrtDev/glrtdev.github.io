import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-body-secondary py-5">
      <div className="container">
        <p className="float-end mb-1">
          <a href="#">Back to top</a>
        </p>
        <p className="mb-1">Portfolio © Maciej Gielert</p>
      </div>
    </footer>
  );
};

export default Footer;
