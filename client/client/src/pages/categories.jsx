


import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/layout/layout";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);

  // Inline styles for the component
  const styles = {
    card: {
      border: "1px solid #f0a500",
      borderRadius: "12px",
      transition: "transform 0.2s ease-in-out",
      height: "250px",
    },
    cardHover: {
      transform: "translateY(-5px)",
    },
    cardBody: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      backgroundColor: "#007bff",
      border: "none",
      color: "#fff",
      padding: "10px 15px",
      borderRadius: "8px",
      textDecoration: "none",
    },
  };

  // Fetch categories from backend
  const fetchCategories = async () => {
    try {
      const { data } = await axios.get("http://localhost:5001/api/category/get-categories"); // API endpoint
      if (data?.success) {
        setCategories(data.category); // Update categories state
      } else {
        console.error("Failed to fetch categories");
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Layout>
      <div className="container mt-4">
        <h1 className="text-center mb-4">Explore Your World Here</h1>
        <div className="row">
          {categories.length > 0 ? (
            categories.map((category) => (
              <div className="col-md-4" key={category._id}>
                <div
                  className="card m-3"
                  style={styles.card}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-5px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <div className="card-body" style={styles.cardBody}>
                    <h5 className="card-title text-center">{category.name}</h5>
                    <p className="card-text text-center">
                      Discover a wide range of products in this category.
                    </p>
                    <Link
                      to={`/category/${category.slug}`}
                      // style={styles.button}
                      className="btn btn-info"
                    >
                      View Products
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No categories available.</p>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Categories;
