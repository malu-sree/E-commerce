// import React from "react";
// import Layout from "./../components/layout/layout";
// import img1 from "./../images/about.jpeg"
// const About = () => {

//     const aboutStyle = {
//         fontFamily: "'Arial', sans-serif", // A clean and modern sans-serif font
//         fontSize: "1.1rem", // Adjusted font size for better readability
//         lineHeight: "1.6", // Increased line height for improved text spacing
//         color: "#333", // Dark gray text for good contrast without being too harsh
//       };
    
//       const headingStyle = {
//         fontFamily: "'Roboto', sans-serif", // Modern sans-serif font for headings
//         fontSize: "2rem", // Larger font size for emphasis
//         fontWeight: "bold", // Bold for added importance
//         color: "#222", // Slightly darker color for headings
//         marginBottom: "20px", // Space between heading and paragraph
//       };
//   return (
//     <Layout>
//       <div className="row contactus ">
//         <div className="col-md-6 ">
//           <img
//             src={img1}
//             alt="contactus"
//             style={{ width: "100%" }}
//           />
//         </div>
//         <div className="col-md-6">
//           <h2 style={headingStyle}>About Us</h2>
//           <p style={aboutStyle}>
//           E-commerce (electronic commerce) refers to commercial activities including the electronic buying or selling products and services which are conducted on online platforms or over the Internet.[1] E-commerce draws on technologies such as mobile commerce, electronic funds transfer, supply chain management, Internet marketing, online transaction processing, electronic data interchange (EDI), inventory management systems, and automated data collection systems. E-commerce is the largest sector of the electronics industry and is in turn driven by the technological advances of the semiconductor industry.
//           </p>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default About;


import React from "react";
import Layout from "./../components/layout/layout";
import img1 from "./../images/about.jpeg";

const About = () => {
  // Styling for the content
  const aboutStyle = {
    fontFamily: "'Arial', sans-serif", // Clean, modern sans-serif font for readability
    fontSize: "1.1rem", // Slightly larger font for better readability
    lineHeight: "1.8", // Increased line height for a cleaner look
    color: "#333", // Dark gray color for good contrast
    textAlign: "justify", // Justified text for a neater layout
  };

  const headingStyle = {
    fontFamily: "'Roboto', sans-serif", // Stylish sans-serif font for headings
    fontSize: "2.5rem", // Larger size to make the heading stand out
    fontWeight: "700", // Bold for emphasis
    color: "#222", // Dark color for better readability
    marginBottom: "20px", // Space between heading and content
    textAlign: "center", // Center-align the heading
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "10px", // Rounded corners for the image
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow for a modern look
  };

  const contentStyle = {
    marginLeft: "20px",
    padding: "20px",
    backgroundColor: "#f8f8f8", // Light background for the text section
    borderRadius: "10px", // Rounded corners for a soft feel
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Light shadow for separation
  };

  return (
    <Layout title={"About us-Ecommerce App"} >
      <div className="row contactus" style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "50px" }}>
        <div className="col-md-6">
          <img src={img1} alt="About Us" style={imageStyle} />
        </div>
        <div className="col-md-6" style={contentStyle}>
          <h2 style={headingStyle}>About Us</h2>
          <p style={aboutStyle}>
            Welcome to our e-commerce platform! We are dedicated to providing a seamless online shopping experience. From the latest gadgets to trendy apparel, we bring you a diverse range of products that cater to all your needs. Our team works tirelessly to source high-quality items and ensure that your shopping experience is safe, secure, and enjoyable.
          </p>
          <p style={aboutStyle}>
            Our mission is to revolutionize the way people shop online by offering an intuitive platform with efficient search, easy navigation, and fast delivery. Whether you're shopping from the comfort of your home or on the go, our mobile-friendly platform ensures that you can access your favorite products with just a few taps. We offer a wide variety of products, from electronics, fashion, and home goods to health, beauty, and more. 
          </p>
          <p style={aboutStyle}>
            With our commitment to customer satisfaction, we are continually evolving and expanding our product offerings. We believe in providing not just great products, but also excellent customer service. Our dedicated support team is always ready to assist you, whether it's tracking an order or helping with any queries. Thank you for choosing us, and we look forward to serving you!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
