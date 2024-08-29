// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        <a href="#top" className="back-to-top">Back to top</a>
      </p>
      <p>
        Info: This project is made solely for educational purposes as part of the <a href="https://careerfoundry.com" target="_blank" rel="noopener noreferrer">Career Foundry</a>
         Full Stack Web Development Course.
      </p>
      <p>
        Visit the <a href="https://github.com/your-github-repo" target="_blank" rel="noopener noreferrer">Github page</a> for more info about this project.
      </p>
    </footer>
  );
}

export default Footer;
