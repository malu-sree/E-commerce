// import React from "react";
// import Layout from "./../components/layout/layout";
// import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
// import img2 from "./../images/contactus.jpeg"
// const Contact = () => {
    

//   return (
//     <Layout>
//       <div className="row contactus ">
//         <div className="col-md-6 ">
//           <img
//             src={img2}
//             alt="contactus"
//             style={{ width: "100%" }}
//           />
//         </div>
//         <div className="col-md-4">
//           <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
//           <p className="text-justify mt-2">
//             any query and info about prodduct feel free to call anytime we 24X7
//             vaialible
//           </p>
//           <p className="mt-3">
//             <BiMailSend /> : www.help@ecommerceapp.com
//           </p>
//           <p className="mt-3">
//             <BiPhoneCall /> : 012-3456789
//           </p>
//           <p className="mt-3">
//             <BiSupport /> : 1800-0000-0000 (toll free)
//           </p>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Contact;


import React from "react";
import Layout from "./../components/layout/layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import img2 from "./../images/contactus.jpeg";

const Contact = () => {
  const contactContainerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "50px 0",
    padding: "0 20px",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "10px", // Adding rounded corners to the image
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Adding a subtle shadow to the image
  };

  const textContainerStyle = {
    flex: 1,
    marginLeft: "20px",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f4f4f4", // Light background for the contact text section
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Adding a subtle shadow for the container
  };

  const headerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 20px",
    textAlign: "center",
    borderRadius: "10px",
    marginBottom: "20px",
  };

  const paragraphStyle = {
    textAlign: "justify",
    marginTop: "10px",
    fontSize: "1.1rem", // Slightly larger font for better readability
    color: "#555",
  };

  const contactDetailStyle = {
    marginTop: "15px",
    fontSize: "1.2rem",
    color: "#333",
    display: "flex",
    alignItems: "center",
  };

  const iconStyle = {
    marginRight: "10px",
    fontSize: "1.5rem",
    color: "#3498db", // Blue color for the icons to make them stand out
  };

  return (
    <Layout title={"Contact us"}>
      <div className="contactus" style={contactContainerStyle}>
        <div className="col-md-6">
          <img
            src={img2}
            alt="contactus"
            style={imageStyle}
          />
        </div>
        <div className="col-md-6" style={textContainerStyle}>
          <h1 style={headerStyle}>CONTACT US</h1>
          <p style={paragraphStyle}>
            For any queries or product-related information, feel free to call anytime. We are available 24/7 to assist you.
          </p>
          <p style={contactDetailStyle}>
            <BiMailSend style={iconStyle} /> : www.help@ecommerceapp.com
          </p>
          <p style={contactDetailStyle}>
            <BiPhoneCall style={iconStyle} /> : 012-3456789
          </p>
          <p style={contactDetailStyle}>
            <BiSupport style={iconStyle} /> : 1800-0000-0000 (toll-free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
