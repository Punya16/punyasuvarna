import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} FOOOODY Food App. All rights reserved.</p>
        <p>
          Created by <a href="https://www.example.com">PUNYA 4SF21CS118</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;