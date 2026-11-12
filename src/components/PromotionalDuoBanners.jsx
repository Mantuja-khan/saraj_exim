import React from 'react';
import { ArrowRight, Leaf, Truck } from 'lucide-react';

/**
 * PromotionalDuoBanners
 * Full-width pair of promotional cards matching website identity:
 * - Left: "ORGANIC PURITY. DIRECT SOURCING." + "EXPLORE PRODUCTS"
 * - Right: "WHOLESALE & BULK ORDERS" + "CONTACT WHOLESALE" + Official Saraj 4-pack image
 */
export default function PromotionalDuoBanners({ onNavigate }) {
  return (
    <section className="promo-duo-banners-section full-width-banner-section">
      <div className="promo-duo-fullwidth-wrap">
        <div className="promo-duo-grid">
          {/* LEFT BANNER: ORGANIC PURITY • DIRECT SOURCING */}
          <div className="promo-banner-card brand-forest-card animate-left">
            <div className="promo-card-content">
              <span className="promo-card-eyebrow">
                <Leaf size={14} className="promo-icon-spark" /> 100% PURE &amp; NATURAL AYURVEDA
              </span>

              <h3 className="promo-card-title">
                ORGANIC PURITY.<br />
                <span className="highlight-gold">DIRECT SOURCING.</span>
              </h3>

              <p className="promo-card-desc">
                Single-origin herbal powders, stone-ground spices, and floral botanicals harvested ethically from certified Indian farms.
              </p>

              <button
                type="button"
                className="promo-btn-gold"
                onClick={() => onNavigate && onNavigate('products')}
              >
                <span>EXPLORE PRODUCTS</span>
                <ArrowRight size={15} />
              </button>
            </div>

            <div className="promo-card-media">
              <img
                src="/images/box_energy.jpg"
                alt="Organic Ayurvedic Herbal Bundles"
                className="promo-media-img box-media-img"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT BANNER: WHOLESALE & BULK ORDERS (Replaces Limited Time Offers) */}
          <div className="promo-banner-card brand-emerald-card animate-right">
            <div className="promo-card-content">
              <span className="promo-card-eyebrow-light">
                <Truck size={14} /> BULK SUPPLY &amp; MANUFACTURING
              </span>

              <h3 className="promo-card-title">
                WHOLESALE &amp;<br />
                <span className="highlight-gold">BULK ORDERS.</span>
              </h3>

              <p className="promo-card-desc">
                Custom packaging, tailored batch sizes, and reliable logistics across India from Bhiwadi, Rajasthan.
              </p>

              <button
                type="button"
                className="promo-btn-gold"
                onClick={() => onNavigate && onNavigate('contact')}
              >
                <span>CONTACT WHOLESALE</span>
                <ArrowRight size={15} />
              </button>
            </div>

            <div className="promo-card-media">
              <img
                src="/images/saraj/about_product_lineup.jpg"
                alt="Saraj Exim Official Product Lineup"
                className="promo-media-img pouches-media-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
