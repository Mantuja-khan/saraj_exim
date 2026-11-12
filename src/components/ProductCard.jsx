import React from 'react';
import { ChevronRight } from 'lucide-react';

/**
 * Saraj Exim Custom Green Product Card
 * Styled strictly matching user reference image:
 * - Elevated product image floating at the top
 * - Rich dark-green rounded container
 * - ONLY Product Name, Image, Price, and View Button
 */
export default function ProductCard({ product, onSelectProduct }) {
  if (!product) return null;

  return (
    <div
      className="saraj-product-card"
      onClick={() => {
        if (onSelectProduct) onSelectProduct(product);
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (onSelectProduct) onSelectProduct(product);
        }
      }}
    >
      {/* Floating Product Image Container */}
      <div className="saraj-card-img-anchor">
        <div className="saraj-card-img-wrap">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
          />
        </div>
      </div>

      {/* Dark Green Card Body */}
      <div className="saraj-card-body">
        <h3 className="saraj-card-name" title={product.name}>
          {product.name}
        </h3>

        <div className="saraj-card-price">
          ₹{product.price}
        </div>

        <button
          type="button"
          className="saraj-card-view-btn"
          onClick={(e) => {
            e.stopPropagation();
            if (onSelectProduct) onSelectProduct(product);
          }}
          aria-label={`View ${product.name}`}
        >
          <span>View</span>
          <ChevronRight size={15} strokeWidth={2.4} />
        </button>
      </div>
    </div>
  );
}
