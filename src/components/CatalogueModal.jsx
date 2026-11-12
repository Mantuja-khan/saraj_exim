import React from 'react';
import { Download, X, MessageCircle } from 'lucide-react';
import { SARAJ_PRODUCTS } from '../data/sarajData';

export default function CatalogueModal({ isOpen, onClose, onAddToCart, showToast }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    const textContent = `=====================================================
SARAJ EXIM - OFFICIAL CATALOGUE 2025/2026
=====================================================
Trusted Manufacturer, Trader & Supplier of Quality Products
Contact / Phone: 07971190288 | WhatsApp: +91 7971190288
GSTIN: 08AZOPS8823N2Z9 | Bhiwadi, Rajasthan, India
Website: www.sarajherbal.com
Email: care@sarajherbal.com
-----------------------------------------------------
PRODUCTS LIST (${SARAJ_PRODUCTS.length} Varieties):
${SARAJ_PRODUCTS.map((p, idx) => `
${idx + 1}. ${p.name.toUpperCase()} (${p.subtitle})
   Category: ${p.categoryName || p.category.toUpperCase()}
   Price: ₹${p.price} / $${p.usdPrice}
   Description: ${p.description}
   Key Benefits: ${p.benefits.join(' | ')}
   How to Use: ${p.usage}
`).join('\n-----------------------------------------------------')}
=====================================================
Thank you for choosing SARAJ for authentic natural vitality!`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'saraj_herbal_catalogue_2025.txt';
    link.click();
    URL.revokeObjectURL(url);
    if (showToast) {
      showToast('Catalogue downloaded successfully!');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="catalogue-modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="catalogue-modal-header">
          <div className="catalogue-title-area">
            <div className="catalogue-badge">OFFICIAL CATALOGUE 2025/2026</div>
            <h2 className="catalogue-title serif-heading">SARAJ Herbal Powders Catalogue</h2>
            <p className="catalogue-subtitle">
              100% Pure &amp; Natural Single-Origin Ayurvedic Herbal Powders
            </p>
          </div>

          <div className="catalogue-top-actions">
            <button
              className="download-cat-btn"
              onClick={handleDownload}
            >
              <Download size={15} />
              <span>Download Catalogue</span>
            </button>
            <button
              className="icon-btn"
              onClick={onClose}
              title="Close"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="catalogue-body-scroll">
          <div className="catalogue-items-grid">
            {SARAJ_PRODUCTS.map((product) => (
              <div key={product.id} className="catalogue-item-card">
                <div className="cat-card-thumb">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="cat-card-body">
                  <div className="cat-card-head">
                    <div>
                      <h4 className="cat-card-name">{product.name}</h4>
                      <span className="cat-card-subtitle">{product.subtitle}</span>
                    </div>
                    <div className="cat-card-price">
                      ₹{product.price}
                      <span className="cat-usd-small">(${product.usdPrice})</span>
                    </div>
                  </div>
                  <p className="cat-card-desc">{product.description}</p>
                  <div className="cat-card-benefits">
                    {product.benefits.map((b, i) => (
                      <span key={i} className="cat-benefit-pill">✓ {b}</span>
                    ))}
                  </div>
                  <div className="cat-card-actions">
                    <button
                      className="cat-cart-btn"
                      onClick={() => {
                        onAddToCart(product);
                        if (showToast) showToast(`Added ${product.name} to basket!`);
                      }}
                    >
                      Add to Basket
                    </button>
                    <a
                      href={`https://wa.me/919876543210?text=Hello%20SARAJ%20Herbal%2C%20I%20would%20like%20to%20order%20${encodeURIComponent(product.name)}%20(Price%3A%20₹${product.price}).`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cat-whatsapp-link"
                    >
                      <MessageCircle size={14} />
                      <span>WhatsApp Order</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

