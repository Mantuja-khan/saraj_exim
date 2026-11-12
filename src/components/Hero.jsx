import React, { useState } from 'react';
import { ArrowRight, Leaf, FlaskConical, ShieldCheck, PackageCheck, PhoneCall } from 'lucide-react';

export default function Hero({ onExplore }) {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <section className="saraj-hero-section" id="home">
      <div className="container">
        <div className="hero-content-wrap animate-left">
          <span className="hero-eyebrow">Pure Herbs • Indian Spices • Natural Wellness</span>

          <h1 className="hero-main-title serif-heading">
            <span>Nature's</span>
            <span>Goodness</span>
            <span>in Every Pack</span>
          </h1>

          <p className="hero-desc">
            Saraj Exim is your trusted manufacturer, trader and supplier of 100% pure Ayurvedic herbal powders, stone-ground Indian spices, flower powders, and dehydrated fruit &amp; vegetable superfoods. Harvested from sustainable farms and processed with zero preservatives in Bhiwadi, Rajasthan for authentic purity, culinary perfection, and holistic vitality.
          </p>

          <div className="hero-actions-row">
            <a href="#products" className="hero-btn" onClick={onExplore}>
              <span>Explore Products</span>
              <ArrowRight size={17} />
            </a>

            <a href="#contact" className="hero-secondary-btn">
              <PhoneCall size={16} />
              <span>Contact &amp; Wholesale</span>
            </a>
          </div>

          {/* 4 Value Badges */}
          <div className="hero-badges-row">
            <div className="hero-badge-item">
              <div className="badge-icon-bubble">
                <Leaf size={18} />
              </div>
              <span className="badge-item-title">100% Natural</span>
            </div>

            <div className="hero-badge-item">
              <div className="badge-icon-bubble">
                <FlaskConical size={18} />
              </div>
              <span className="badge-item-title">No Additives</span>
            </div>

            <div className="hero-badge-item">
              <div className="badge-icon-bubble">
                <ShieldCheck size={18} />
              </div>
              <span className="badge-item-title">Pure &amp; Safe</span>
            </div>

            <div className="hero-badge-item">
              <div className="badge-icon-bubble">
                <PackageCheck size={18} />
              </div>
              <span className="badge-item-title">Bulk &amp; Retail</span>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel dots */}
      <div className="carousel-indicators">
        {[0, 1, 2].map((idx) => (
          <span
            key={idx}
            className={`carousel-dot ${activeDot === idx ? 'active' : ''}`}
            onClick={() => setActiveDot(idx)}
          />
        ))}
      </div>
    </section>
  );
}
