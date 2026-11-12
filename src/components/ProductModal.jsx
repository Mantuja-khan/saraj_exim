import React from 'react';
import { X, MessageCircle } from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>
        <div className="modal-inner-grid">
          <div className="modal-img-col">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="modal-info-col">
            <span className="section-eyebrow">100% PURE &amp; NATURAL</span>
            <h3 className="modal-product-title">{product.name}</h3>
            <span className="modal-subtitle">{product.subtitle}</span>
            <p className="modal-desc">{product.description}</p>

            <div className="modal-usage-box">
              <span className="usage-label">How to use:</span>
              <p className="usage-text">{product.usage}</p>
            </div>

            <div style={{ marginBottom: '18px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--text-dark)' }}>
                Key Benefits:
              </span>
              <ul style={{ paddingLeft: '18px', fontSize: '0.8rem', color: 'var(--text-body)', marginTop: '4px' }}>
                {product.benefits?.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>

            <div className="modal-action-row">
              <div className="modal-price">
                ₹{product.price}{' '}
                <span style={{ fontSize: '0.9rem', color: '#777', fontWeight: 'normal' }}>
                  (${product.usdPrice})
                </span>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <button
                  className="modal-add-btn"
                  onClick={() => {
                    onAddToCart(product);
                    onClose();
                  }}
                >
                  Add to Cart
                </button>
                <a
                  href={`https://wa.me/919876543210?text=Hello%20SARAJ%20Herbal%2C%20I%20would%20like%20to%20order%20${encodeURIComponent(product.name)}%20(Price%3A%20₹${product.price}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cat-whatsapp-link"
                  style={{ padding: '8px 14px' }}
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

