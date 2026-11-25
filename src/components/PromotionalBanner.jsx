import React from 'react';
import { Phone } from 'lucide-react';
import { SARAJ_PRODUCTS } from '../data/sarajData';

export default function PromotionalBanner({ onSelectProduct, onNavigate }) {
  return (
    <section className="promo-banner-section" id="promo-banner">
      <div className="promo-banner-card full-width">
        {/* Left Content Area (Crisp White Background) */}
        <div className="promo-banner-left animate-left">
          <span className="promo-eyebrow">SPECIAL PROMO</span>
          <div className="promo-heading-wrap">
            <h2 className="promo-main-title serif-heading">
              OUR BEST PRODUCT
            </h2>
          </div>

          <p className="promo-lead-desc">
            Discover our premium single-origin Ayurvedic herbal powders and traditional spices, milled 100% pure with zero preservatives for natural wellness and authentic aroma.
          </p>

          {/* Contact and Website Row with Real Phone & Brand Colors */}
          <div className="promo-contact-row">
            <a href="tel:07971190288" className="promo-contact-item promo-call-link" title="Call Us Directly">
              <div className="promo-icon-circle call-circle-real">
                <Phone size={16} color="#ffffff" />
              </div>
              <span className="promo-contact-text">07971190288</span>
            </a>

          </div>
          {/* Framed Sharp Rectangular 'SHOP NOW' Button */}
          <div className="promo-btn-wrap">
            <button
              type="button"
              className="promo-shop-now-btn"
              onClick={() => {
                if (onNavigate) onNavigate('products');
              }}
            >
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Right Slanted Visuals Area (Golden Background with 3 Slanted Product Panels) */}
        {/* NOTE: White wireframe line box has been REMOVED as requested */}
        <div className="promo-banner-right animate-right">
          <div className="promo-panels-container">
            {/* Panel 1: SARAJ Pure Neem Powder */}
            <div
              className="promo-slanted-panel panel-1"
              onClick={() => {
                const item = SARAJ_PRODUCTS.find(p => p.id === 'neem');
                if (item && onSelectProduct) onSelectProduct(item);
              }}
              title="Click to view Neem Powder details"
            >
              <div className="promo-panel-inner">
                <img
                  src="/images/saraj/neem_powder.png"
                  alt="SARAJ Pure Neem Powder"
                  className="promo-panel-img"
                />
              </div>
            </div>

            {/* Panel 2: SARAJ Rose Petal Powder */}
            <div
              className="promo-slanted-panel panel-2"
              onClick={() => {
                const item = SARAJ_PRODUCTS.find(p => p.id === 'rose');
                if (item && onSelectProduct) onSelectProduct(item);
              }}
              title="Click to view Rose Powder details"
            >
              <div className="promo-panel-inner">
                <img
                  src="/images/saraj/rose_powder.png"
                  alt="SARAJ Pure Rose Powder"
                  className="promo-panel-img"
                />
              </div>
            </div>

            {/* Panel 3: SARAJ Red Chilli Powder */}
            <div
              className="promo-slanted-panel panel-3"
              onClick={() => {
                const item = SARAJ_PRODUCTS.find(p => p.id === 'chilli');
                if (item && onSelectProduct) onSelectProduct(item);
              }}
              title="Click to view Chilli Powder details"
            >
              <div className="promo-panel-inner">
                <img
                  src="/images/saraj/chilli_powder.png"
                  alt="SARAJ Red Chilli Powder"
                  className="promo-panel-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

