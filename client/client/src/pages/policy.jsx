// import React from "react";
// import Layout from "./../components/layout/layout";
// import img3 from "./../images/policy.jpg"
// const Policy = () => {
//   return (
//     <Layout>
//       <div className="row contactus ">
//         <div className="col-md-6 ">
//           <img
//             src={img3}
//             alt="contactus"
//             style={{ width: "100%" }}
//           />
//         </div>
//         <div className="col-md-4">
//           <p>add privacy policy</p>
//           <p>add privacy policy</p>
//           <p>add privacy policy</p>
//           <p>add privacy policy</p>
//           <p>add privacy policy</p>
//           <p>add privacy policy</p>
//           <p>add privacy policy</p>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Policy;


import React from "react";
import Layout from "./../components/layout/layout";
import img3 from "./../images/policy.jpg";

const Policy = () => {
  // Styling for the content
  const aboutStyle = {
    fontFamily: "'Arial', sans-serif", // Clean, modern sans-serif font
    fontSize: "1.1rem", // Slightly larger for better readability
    lineHeight: "1.8", // Increased line height for a cleaner look
    color: "#333", // Dark gray for contrast
    textAlign: "justify", // Justify text for neat look
  };

  const headingStyle = {
    fontFamily: "'Roboto', sans-serif", // Modern font for headings
    fontSize: "2.5rem", // Larger font size for emphasis
    fontWeight: "700", // Bold for added importance
    color: "#222", // Slightly darker color for headings
    marginBottom: "20px", // Space between heading and content
    textAlign: "center", // Center-aligning the heading
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "10px", // Rounded corners for the image
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
  };

  const contentStyle = {
    marginLeft: "20px",
    padding: "20px",
    backgroundColor: "#f8f8f8", // Light background for the text area
    borderRadius: "10px", // Rounded corners
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Light shadow for separation
  };

  return (
    <Layout>
      <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px" }}>
        <div className="col-md-6" style={{ padding: "20px" }}>
          <img src={img3} alt="Privacy Policy" style={imageStyle} />
        </div>
        <div className="col-md-6" style={contentStyle}>
          <h2 style={headingStyle}>Privacy Policy</h2>
          <p style={aboutStyle}>
            Your privacy is important to us. This privacy policy document outlines the types of personal information that is received and collected by our e-commerce platform and how it is used.
          </p>
          <h3 style={headingStyle}>1. Information Collection</h3>
          <p style={aboutStyle}>
            We collect personal information when you register on our website, place an order, subscribe to our newsletter, or contact our customer service. This may include your name, email address, phone number, shipping address, and payment details.
          </p>
          <h3 style={headingStyle}>2. Use of Information</h3>
          <p style={aboutStyle}>
            The information we collect is used to process orders, improve customer service, and enhance your shopping experience. We may use your contact details to send you promotions, updates, and notifications about your orders.
          </p>
          <h3 style={headingStyle}>3. Data Security</h3>
          <p style={aboutStyle}>
            We implement industry-standard security measures to protect your personal information. However, please be aware that no method of online transmission or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
          <h3 style={headingStyle}>4. Sharing of Information</h3>
          <p style={aboutStyle}>
            We do not sell, rent, or share your personal information with third parties for their marketing purposes. We may share your information with trusted service providers who assist us in operating our business, such as payment processors, delivery companies, and customer support services.
          </p>
          <h3 style={headingStyle}>5. Cookies</h3>
          <p style={aboutStyle}>
            Our website uses cookies to enhance your shopping experience. Cookies help us analyze website traffic, track items in your shopping cart, and personalize content and advertisements. You can disable cookies through your browser settings, but some features of the site may not work correctly.
          </p>
          <h3 style={headingStyle}>6. Your Rights</h3>
          <p style={aboutStyle}>
            You have the right to access, update, or delete your personal information. If you wish to exercise these rights or have any concerns about the use of your data, please contact our customer support team.
          </p>
          <h3 style={headingStyle}>7. Changes to This Policy</h3>
          <p style={aboutStyle}>
            We reserve the right to update this privacy policy at any time. Any changes will be posted on this page, and we will notify you if significant changes are made. Please review this policy periodically to stay informed.
          </p>
          <p style={aboutStyle}>
            By using our services, you consent to the collection and use of your personal information as outlined in this privacy policy.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
