import React, { useState, useEffect, useMemo } from 'react';
import {
  ArrowRight,
  Eye
} from 'lucide-react';
import { SARAJ_PRODUCTS, CATEGORIES } from '../data/sarajData';
import PromotionalBanner from '../components/PromotionalBanner';
import PromotionalDuoBanners from '../components/PromotionalDuoBanners';
import ProductCard from '../components/ProductCard';

export default function HomePage({
  onNavigate,
  onSelectCategory,
  onSelectProduct,
  showToast
}) {
  const heroProducts = useMemo(() => {
    const preferredIds = ['neem', 'rose', 'chilli', 'moringa', 'wheatgrass', 'shatavari'];
    const picked = preferredIds
      .map(id => SARAJ_PRODUCTS.find(p => p.id === id))
      .filter(Boolean);
    return picked.length >= 4 ? picked : SARAJ_PRODUCTS.slice(0, 6);
  }, []);

  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  // Auto-advance orbital hero showcase infinitely every 5 seconds
  useEffect(() => {
    if (heroProducts.length <= 1) return undefined;
    const timer = setInterval(() => {
      setActiveHeroSlide(prev => (prev + 1) % heroProducts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroProducts.length]);

  const activeProduct = heroProducts[activeHeroSlide] || SARAJ_PRODUCTS[0];

  // Take the 4 popular/featured products for the home page showcase
  const popularProducts = SARAJ_PRODUCTS.filter(p => p.featured).slice(0, 4);

  // Orbital slot coordinates (percentage offsets from stage center) along the left dashed arc
  const getOrbitalSlotClass = (idx) => {
    const total = heroProducts.length;
    const rel = (idx - activeHeroSlide + total) % total;
    return `orbital-slot-${rel}`;
  };

  return (
    <div className="saraj-page home-page">
      {/* HERO SECTION (ORBITAL CIRCLE SHOWCASE MATCHING REFERENCE DESIGN) */}
      <section className="saraj-hero-orbital-section" id="home">
        {/* Right-side Large Soft Backdrop Curve */}
        <div className="hero-right-outer-circle" aria-hidden="true" />

        <div className="container hero-orbital-container">
          <div className="hero-orbital-grid">
            {/* LEFT COLUMN: Dynamic Content Matching Active Big Circle Product */}
            <div className="hero-orbital-left" key={activeProduct.id}>
              <span className="hero-orbital-eyebrow">
                {activeProduct.categoryName || 'Pure Botanicals'} • {activeProduct.subtitle}
              </span>

              <h1 className="hero-orbital-title serif-heading">
                {activeProduct.name}
              </h1>

              <p className="hero-orbital-desc">
                {activeProduct.description}
              </p>

              <div className="hero-orbital-meta-row">
                <span className="hero-orbital-price">₹{activeProduct.price}</span>
                <span className="hero-orbital-purity-tag">100% Pure &amp; Natural</span>
              </div>

              <div className="hero-actions-row">
                <button
                  type="button"
                  className="hero-orbital-outline-btn"
                  onClick={() => onSelectProduct && onSelectProduct(activeProduct)}
                >
                  <Eye size={16} />
                  <span>View More</span>
                </button>

                <a
                  href={`https://wa.me/917971190288?text=${encodeURIComponent(`Hello Saraj Exim, I would like to get the latest price for ${activeProduct.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-btn"
                >
                  <span>Get Price</span>
                  <ArrowRight size={17} />
                </a>
              </div>

              {/* Slide Progress Dots */}
              <div className="hero-orbital-dots">
                {heroProducts.map((prod, idx) => (
                  <button
                    key={prod.id}
                    type="button"
                    aria-label={`Show ${prod.name}`}
                    className={`hero-orbital-dot ${idx === activeHeroSlide ? 'active' : ''}`}
                    onClick={() => setActiveHeroSlide(idx)}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: Large Main Circle (1 Product) + Moving Small Orbital Circles */}
            <div className="hero-orbital-right">
              <div className="hero-orbital-stage">
                {/* Dashed Orbital Arc Ring */}
                <div className="hero-orbital-dashed-ring" aria-hidden="true" />

                {/* Large Main Circle showing ONE active product at a time */}
                <div
                  className="hero-main-big-circle"
                  onClick={() => onSelectProduct && onSelectProduct(activeProduct)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      if (onSelectProduct) onSelectProduct(activeProduct);
                    }
                  }}
                  title={`Click to view ${activeProduct.name}`}
                >
                  <div className="hero-main-circle-img-wrap" key={activeProduct.id}>
                    <img
                      src={activeProduct.image}
                      alt={activeProduct.name}
                      className="hero-main-circle-img"
                    />
                  </div>
                </div>

                {/* Small Orbital Product Circles rotating along the dashed arc every 4s */}
                {heroProducts.map((prod, idx) => (
                  <button
                    key={prod.id}
                    type="button"
                    className={`hero-small-orbital-circle ${getOrbitalSlotClass(idx)}`}
                    onClick={() => setActiveHeroSlide(idx)}
                    title={prod.name}
                    aria-label={`Select ${prod.name}`}
                  >
                    <img src={prod.image} alt={prod.name} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE BY CATEGORY (AT BOTTOM OF HERO SECTION, SINGLE ROW, FREE OF BOXES & BACKGROUNDS) */}
      <section className="categories-section categories-hero-bottom" id="categories">
        <div className="container">
          <div className="section-title-center cat-hero-header">
            <span className="section-eyebrow">OUR BOTANICAL COLLECTIONS</span>
            <h2 className="section-main-title serif-heading">Explore by Category</h2>
          </div>

          <div className="categories-single-row">
            {CATEGORIES.map(cat => (
              <div
                key={cat.id}
                className="category-free-item"
                onClick={() => {
                  onSelectCategory(cat.id);
                  onNavigate('products');
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectCategory(cat.id);
                    onNavigate('products');
                  }
                }}
              >
                <div className="category-free-img-box">
                  <img src={cat.image} alt={cat.name} loading="lazy" />
                </div>
                <h4 className="category-free-name">{cat.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMOTIONAL BANNER SECTION (White line removed from yellow section) */}
      <PromotionalBanner
        onSelectProduct={onSelectProduct}
        onNavigate={onNavigate}
      />

      {/* POPULAR HERBAL POWDERS SECTION (FEATURED 4 IN ROW) */}
      <section className="products-section" id="featured-products">
        <div className="container">
          <div className="section-title-center">
            <span className="section-eyebrow">FEATURED SELECTION</span>
            <h2 className="section-main-title serif-heading">
              Popular Herbal Powders
            </h2>
            <p className="section-sub-text">
              100% pure, natural, and certified organic products crafted for daily wellness.
            </p>
          </div>

          <div className="products-grid-4">
            {popularProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
              />
            ))}
          </div>

          {/* View All Products Button & Catalogue Promo Bar */}
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <button
              type="button"
              className="view-details-btn sharp-btn"
              style={{ width: 'auto', display: 'inline-flex', padding: '12px 28px', fontSize: '0.95rem' }}
              onClick={() => {
                onSelectCategory(null);
                onNavigate('products');
              }}
            >
              <span>Explore All Products ({SARAJ_PRODUCTS.length})</span>
              <ArrowRight size={16} />
            </button>
          </div>


        </div>
      </section>

      {/* PROMOTIONAL DUO BANNERS (MATCHING USER REFERENCE IMAGE 1) */}
      <PromotionalDuoBanners
        onNavigate={onNavigate}
        showToast={showToast}
      />
    </div>
  );
}

