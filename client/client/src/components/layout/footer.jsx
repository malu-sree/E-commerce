// import React from "react";
// import { Link } from "react-router-dom";
// const Footer = () => {
//   return (
//     <div className="footer">
//       <h1 className="text-center">All Right Reserved &copy; Techinfoyt</h1>
//       <p className="text-center mt-3">
//         <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
//         <Link to="/policy">Privacy Policy</Link>
//       </p>
//     </div>
//   );
// };


// export default Footer;


import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  };

  const footerContentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '10px'
  };

  const footerHeadingStyle = {
    fontSize: '1.8em',
    fontWeight: 'bold',
    marginBottom: '15px'
  };

  const footerLinksStyle = {
    fontSize: '1.1em',
    marginTop: '10px'
  };

  const footerLinkStyle = {
    color: '#ddd',
    textDecoration: 'none',
    padding: '0 8px'
  };

  const footerLinkHoverStyle = {
    color: '#f0a500',
    textDecoration: 'underline'
  };

  return (
    <div style={footerStyle}>
      <div style={footerContentStyle}>
        <h1 style={footerHeadingStyle}>All Rights Reserved &copy; Crimsons</h1>
        <p style={footerLinksStyle}>
          <Link to="/about" style={footerLinkStyle} onMouseOver={(e) => e.target.style = footerLinkHoverStyle} onMouseOut={(e) => e.target.style = footerLinkStyle}>About</Link> |
          <Link to="/contact" style={footerLinkStyle} onMouseOver={(e) => e.target.style = footerLinkHoverStyle} onMouseOut={(e) => e.target.style = footerLinkStyle}>Contact</Link> |
          <Link to="/policy" style={footerLinkStyle} onMouseOver={(e) => e.target.style = footerLinkHoverStyle} onMouseOut={(e) => e.target.style = footerLinkStyle}>Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
