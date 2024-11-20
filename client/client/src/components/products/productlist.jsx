// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ProductCard from './ProductCard';

// const ProductList = () => {
//   const [products, setProducts] = useState([]); // Initialize as an empty array
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('/api/products');
//         console.log(response.data); // Log the response to inspect the structure
//         // Assuming the response contains products in response.data
//         setProducts(response.data.products || response.data); // Access products correctly
//         setLoading(false);
//       } catch (err) {
//         setError('Error fetching products');
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="product-list">
//       {products.length > 0 ? (
//         products.map((product) => (
//           <ProductCard key={product._id} product={product} />
//         ))
//       ) : (
//         <p>No products available.</p>
//       )}
//     </div>
//   );
// };

// export default ProductList;



import React, { useState } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';

// Example product images (you can replace these with your actual images)
import productImage1 from '../../images/img1.jfif';
import productImage2 from '../../images/img1.jfif';
import productImage3 from '../../images/img1.jfif';
import productImage4 from '../../images/img1.jfif';
import productImage5 from '../../images/img1.jfif';

function ProductList() {
  const [title, setTitle] = useState('');

  // Example product data
  const products = [
    { id: 1, name: 'Product 1', description: 'This is product 1', imageUrl: productImage1 },
    { id: 2, name: 'Product 2', description: 'This is product 2', imageUrl: productImage2 },
    { id: 3, name: 'Product 3', description: 'This is product 3', imageUrl: productImage3 },
    { id: 4, name: 'Product 4', description: 'This is product 4', imageUrl: productImage4 },
    { id: 5, name: 'Product 5', description: 'This is product 5', imageUrl: productImage5 },
  ];

  return (
    <>
      <Container style={{ marginLeft: '100px' }}>
        <Row className='mb-3'>
          <Col>
            <input
              type='text'
              name='search'
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className='form-control'
              placeholder='Type product name here'
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant='success' onClick={() => setTitle('')}>
              All
            </Button>
          </Col>
          {/* Buttons for each product category (you can replace with dynamic categories) */}
          <Col>
            <Button variant='info' onClick={() => setTitle('Product 1')}>
              Product 1
            </Button>
          </Col>
          <Col>
            <Button variant='info' onClick={() => setTitle('Product 2')}>
              Product 2
            </Button>
          </Col>
          {/* Add more product buttons here */}
        </Row>

        <br />

        <Row>
          {/* Filter and display products based on search title */}
          {products.length > 0 &&
            products
              .filter((product) => product.name.toLowerCase().includes(title.toLowerCase()))
              .map((product) => {
                return (
                  <Col lg={4} className='mb-2' key={product.id}>
                    <Card style={{ width: '100%' }}>
                      <Card.Img variant="top" src={product.imageUrl} style={{ height: '120px' }} />
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
        </Row>
      </Container>
    </>
  );
}

export default ProductList;
