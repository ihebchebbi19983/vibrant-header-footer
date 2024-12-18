import React from 'react';
import { CSSProperties } from 'react';
import Categories from './Categories';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Suit',
      material: 'WOOL',
      color: 'Midnight Blue',
      price: 1295,
      image: "Articles/1.png",
    },
    {
      id: 2,
      name: 'Basic shirt',
      material: 'oxford',
      color: 'White & Blue',
      price: 120,
      image: "Articles/2.png",
    },
    {
      id: 3,
      name: 'Limited pink shirt',
      material: 'Pink October',
      color: 'White & pink',
      price: 180,
      image: "Articles/3.png",
    },
    {
      id: 4,
      name: 'Classic White Shirt',
      material: 'Cotton',
      color: 'Pure White',
      price: 150,
      image: "Articles/1.png",
    }
  ];

  const containerStyle: CSSProperties = {
    maxWidth: '100%',
    margin: '0 auto',
    padding: '21px',
    backgroundColor: '#f5f5f5',
    fontFamily: 'WomanFontBold',
  };

  const titleStyle: CSSProperties = {
    textAlign: 'center',
    color: '#700100',
    marginBottom: '32px',
    fontSize: '45px',
    fontFamily: 'WomanFontBold',
  };

  const gridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '32px',
    padding: '21px',
  };

  const productCardStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '600px',
    textAlign: 'left',
    transition: 'transform 0.3s ease',
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    fontFamily: 'WomanFontBold',
  };

  const imageContainerStyle: CSSProperties = {
    width: '100%',
    height: '450px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    overflow: 'hidden',
    marginBottom: '15px',
  };

  const imageStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  };

  const contentStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    fontFamily: 'WomanFontBold',
  };

  const productNameStyle: CSSProperties = {
    fontSize: '17px',
    fontFamily: 'WomanFontBold',
    marginBottom: '5px',
    color: '#333',
  };

  const productDetailsStyle: CSSProperties = {
    color: '#888',
    fontSize: '13px',
    marginBottom: '5px',
    textTransform: 'uppercase',
    lineHeight: 1.4,
    fontFamily: 'WomanFontBold',
  };

  const priceStyle: CSSProperties = {
    fontSize: '17px',
    color: '#333',
    fontFamily: 'WomanFontBold',
    marginTop: 'auto',
  };

  return (
    <div style={containerStyle} className="container">
      <h1 style={titleStyle} className="title">Nouveautés</h1>

      <Categories />
     
      <div style={gridStyle} className="grid">
        {products.map((product) => (
          <div key={product.id} style={productCardStyle} className="product-card">
            <div style={imageContainerStyle} className="image-container">
              <img
                src={product.image}
                alt={product.name}
                style={imageStyle}
                className="product-image"
              />
            </div>
            <div style={contentStyle}>
              <div>
                <div style={productNameStyle} className="product-name">
                  {product.name}
                </div>
                <div style={productDetailsStyle} className="product-details">
                  {product.material}<br />
                  {product.color}
                </div>
              </div>
              <div style={priceStyle} className="price">
                $ {product.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
