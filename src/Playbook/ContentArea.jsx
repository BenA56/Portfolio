import React, { forwardRef } from 'react';
import "./Playbook.css";
import ProductCard from './Product/ProductCard';

const ContentArea = forwardRef(({ products }, ref) => {
  
    return (
      <div ref={ref} className="content-area">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            index={index}
          />
        ))}
      </div>
    );
});

export default ContentArea