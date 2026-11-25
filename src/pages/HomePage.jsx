import React, { useState, useEffect, useMemo } from 'react';
import {
  ArrowRight,
  Eye,
  Leaf,
  FlaskConical,
  Award,
  ShieldPlus,
  Flower2
} from 'lucide-react';
import { SARAJ_PRODUCTS, CATEGORIES } from '../data/sarajData';
import PromotionalBanner from '../components/PromotionalBanner';
import PromotionalDuoBanners from '../components/PromotionalDuoBanners';
import ProductCard from '../components/ProductCard';

// Realistic Decorative Organic Leaf Component with Stems & Delicate Veins
function OrganicLeaf({ size = 48, rot = 0, style = {}, className = '' }) {
  return (
    <div
      className={`hero-organic-leaf-floating ${className}`}
      style={{
        width: size,
        height: size,
        '--rot': `${rot}deg`,
        ...style
      }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 64" width="100%" height="100%" fill="none" style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id={`leaf-grad-${rot}`} x1="10%" y1="90%" x2="90%" y2="10%">
            <stop offset="0%" stopColor="#2e7d32" />
            <stop offset="35%" stopColor="#4da01d" />
            <stop offset="70%" stopColor="#7cb342" />
            <stop offset="100%" stopColor="#aeea00" />
          </linearGradient>
          <linearGradient id={`leaf-specular-${rot}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <filter id={`leaf-glow-${rot}`} x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="2" dy="5" stdDeviation="3.5" floodColor="#0f3d14" floodOpacity="0.35" />
          </filter>
        </defs>
        {/* Main Leaf Body */}
        <path
          d="M6 58 C12 42, 18 24, 58 6 C50 36, 32 52, 6 58 Z"
          fill={`url(#leaf-grad-${rot})`}
          filter={`url(#leaf-glow-${rot})`}
        />
        {/* Specular Highlight along top curve */}
        <path
          d="M6 58 C14 40, 24 24, 58 6 C42 22, 24 38, 6 58 Z"
          fill={`url(#leaf-specular-${rot})`}
        />
        {/* Main Central Stem */}
        <path d="M6 58 Q26 36 58 6" stroke="#d9f99d" strokeWidth="2.2" strokeLinecap="round" opacity="0.9" />
        {/* Delicate Side Veins */}
        <path d="M20 45 Q30 41 35 36" stroke="#d9f99d" strokeWidth="1.3" strokeLinecap="round" opacity="0.8" />
        <path d="M26 39 Q34 31 44 31" stroke="#d9f99d" strokeWidth="1.3" strokeLinecap="round" opacity="0.8" />
        <path d="M34 31 Q42 24 51 22" stroke="#d9f99d" strokeWidth="1.3" strokeLinecap="round" opacity="0.8" />
        <path d="M15 50 Q22 47 25 43" stroke="#d9f99d" strokeWidth="1.1" strokeLinecap="round" opacity="0.75" />
      </svg>
    </div>
  );
}

// 4 Specific Health Benefit Icons & Labels matching User Reference Image 1
const BENEFIT_MAP = {
  neem: [
    { id: 'imm', labelTop: 'Boosts', labelBot: 'Immunity', type: 'shield' },
    { id: 'bld', labelTop: 'Purifies', labelBot: 'Blood', type: 'face' },
    { id: 'skn', labelTop: 'Supports', labelBot: 'Healthy Skin', type: 'leaf' },
    { id: 'dtx', labelTop: 'Natural', labelBot: 'Detox', type: 'lotus' }
  ],
  moringa: [
    { id: 'nut', labelTop: '90+', labelBot: 'Nutrients', type: 'shield' },
    { id: 'nrg', labelTop: 'Boosts', labelBot: 'Energy', type: 'face' },
    { id: 'skn', labelTop: 'Promotes', labelBot: 'Vitality', type: 'leaf' },
    { id: 'dtx', labelTop: 'Natural', labelBot: 'Detox', type: 'lotus' }
  ],
  rose: [
    { id: 'glo', labelTop: 'Glowing', labelBot: 'Complexion', type: 'shield' },
    { id: 'cln', labelTop: 'Natural', labelBot: 'Cooling', type: 'face' },
    { id: 'skn', labelTop: 'Skin', labelBot: 'Toner', type: 'leaf' },
    { id: 'dtx', labelTop: 'Gentle', labelBot: 'Detox', type: 'lotus' }
  ],
  chilli: [
    { id: 'met', labelTop: 'Boosts', labelBot: 'Metabolism', type: 'shield' },
    { id: 'vit', labelTop: 'Rich in', labelBot: 'Vitamin C', type: 'face' },
    { id: 'dig', labelTop: 'Supports', labelBot: 'Digestion', type: 'leaf' },
    { id: 'dtx', labelTop: 'Active', labelBot: 'Warmth', type: 'lotus' }
  ],
  wheatgrass: [
    { id: 'chl', labelTop: 'Pure', labelBot: 'Chlorophyll', type: 'shield' },
    { id: 'imm', labelTop: 'Boosts', labelBot: 'Immunity', type: 'face' },
    { id: 'gut', labelTop: 'Supports', labelBot: 'Gut Health', type: 'leaf' },
    { id: 'dtx', labelTop: 'Deep Body', labelBot: 'Detox', type: 'lotus' }
  ],
  shatavari: [
    { id: 'fem', labelTop: 'Hormone', labelBot: 'Balance', type: 'shield' },
    { id: 'nrg', labelTop: 'Sustained', labelBot: 'Vitality', type: 'face' },
    { id: 'str', labelTop: 'Relieves', labelBot: 'Stress', type: 'leaf' },
    { id: 'dtx', labelTop: 'Holistic', labelBot: 'Rejuvenation', type: 'lotus' }
  ]
};

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

  const currentBenefits = BENEFIT_MAP[activeProduct.id] || [
    { id: 'imm', labelTop: 'Boosts', labelBot: 'Immunity', type: 'shield' },
    { id: 'bld', labelTop: 'Purifies', labelBot: 'Blood', type: 'face' },
    { id: 'skn', labelTop: 'Supports', labelBot: 'Healthy Skin', type: 'leaf' },
    { id: 'dtx', labelTop: 'Natural', labelBot: 'Detox', type: 'lotus' }
  ];

  // Helper to render the benefit icon
  const renderBenefitIcon = (type) => {
    if (type === 'shield') return <ShieldPlus size={22} strokeWidth={1.8} />;
    if (type === 'face') {
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M9 10h.01" />
          <path d="M15 10h.01" />
          <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
          <path d="M19 4l1 1.5 1.5 1-1.5 1L19 9l-1-1.5L16.5 6.5 18 5.5z" fill="currentColor" stroke="none" />
        </svg>
      );
    }
    if (type === 'leaf') return <Leaf size={22} strokeWidth={1.8} />;
    return <Flower2 size={22} strokeWidth={1.8} />;
  };

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
      {/* HERO SECTION (ORBITAL CIRCLE SHOWCASE MATCHING USER REFERENCE DESIGN) */}
      <section className="saraj-hero-orbital-section" id="home">
        {/* Right-side Large Soft Backdrop Curve */}
        <div className="hero-right-outer-circle" aria-hidden="true" />

        {/* Random Floating Organic Leaves across the Hero Section (Enlarged Sizes) */}
        <OrganicLeaf size={76} rot={-22} style={{ top: '8%', left: '2%' }} />
        <OrganicLeaf size={56} rot={48} style={{ top: '46%', left: '0%' }} />
        <OrganicLeaf size={64} rot={16} style={{ bottom: '8%', left: '3%' }} />
        <OrganicLeaf size={52} rot={-15} style={{ top: '4%', left: '44%' }} />
        <OrganicLeaf size={82} rot={-36} style={{ top: '7%', right: '14%' }} />
        <OrganicLeaf size={60} rot={42} style={{ top: '56%', right: '1%' }} />
        <OrganicLeaf size={72} rot={76} style={{ bottom: '7%', right: '20%' }} />

        {/* Full-Width Hero Container */}
        <div className="hero-orbital-container hero-full-width-container">
          <div className="hero-orbital-grid">
            {/* LEFT COLUMN: Dynamic Content Matching User Reference Image 1 */}
            <div className="hero-orbital-left" key={activeProduct.id}>
              {/* 1. Top Pill Badge: 100% ORGANIC & NATURAL */}
              <div className="hero-organic-pill">
                <span className="hero-organic-pill-leaf-wrap">
                  <Leaf size={14} strokeWidth={2.4} />
                </span>
                <span className="hero-organic-pill-text">100% ORGANIC &amp; NATURAL</span>
              </div>

              {/* 2. Main Title with Enlarged Green Organic Leaf */}
              <h1 className="hero-orbital-title serif-heading">
                <span className="hero-title-text">{activeProduct.name}</span>
                <OrganicLeaf size={64} rot={34} className="hero-title-leaf-inline" />
              </h1>

              {/* 3. Sub-Divider: Category & Subtitle (Clean, responsive and wrap-safe) */}
              <div className="hero-sub-divider">
                <span className="hero-sub-divider-line" />
                <span className="hero-sub-divider-text">
                  {(activeProduct.categoryName || 'HERBAL POWDER').toUpperCase()} • {(activeProduct.subtitle || 'PURE & NATURAL 100G').toUpperCase()}
                </span>
                <span className="hero-sub-divider-line" />
              </div>

              {/* 4. Product Description */}
              <p className="hero-orbital-desc">
                {activeProduct.description}
              </p>

              {/* 5. 4 Circular Benefit Badges matching Image 1 */}
              <div className="hero-benefits-row">
                {currentBenefits.map((b) => (
                  <div key={b.id} className="hero-benefit-item">
                    <div className="hero-benefit-bubble">
                      {renderBenefitIcon(b.type)}
                    </div>
                    <span className="hero-benefit-label">
                      {b.labelTop}
                      <br />
                      {b.labelBot}
                    </span>
                  </div>
                ))}
              </div>

              {/* 6. Price & Purity Tag */}
              <div className="hero-orbital-meta-row">
                <span className="hero-orbital-price">₹{activeProduct.price}</span>
                <span className="hero-orbital-purity-tag">100% Pure &amp; Natural</span>
              </div>

              {/* 7. Action Buttons: View More + Glossy Green Get Price */}
              <div className="hero-actions-row">
                <button
                  type="button"
                  className="hero-orbital-outline-btn"
                  onClick={() => onSelectProduct && onSelectProduct(activeProduct)}
                >
                  <Eye size={17} />
                  <span>View More</span>
                </button>

                <a
                  href={`https://wa.me/917971190288?text=${encodeURIComponent(`Hello Saraj Exim, I would like to get the latest price for ${activeProduct.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-get-price-btn"
                >
                  <span>Get Price</span>
                  <ArrowRight size={17} />
                </a>
              </div>

              {/* 8. Bottom Trust Ribbon (Image 1 Bottom Row) */}
              <div className="hero-trust-bar">
                <div className="hero-trust-item">
                  <Leaf size={15} className="hero-trust-icon" />
                  <span>No Additives</span>
                </div>
                <span className="hero-trust-sep" />
                <div className="hero-trust-item">
                  <FlaskConical size={15} className="hero-trust-icon" />
                  <span>No Preservatives</span>
                </div>
                <span className="hero-trust-sep" />
                <div className="hero-trust-item">
                  <Leaf size={15} className="hero-trust-icon" />
                  <span>Chemical Free</span>
                </div>
                <span className="hero-trust-sep" />
                <div className="hero-trust-item">
                  <Award size={15} className="hero-trust-icon" />
                  <span>Premium Quality</span>
                </div>
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

            {/* RIGHT COLUMN: Large Main Circle + Floating Edge Badges matching Image 2 */}
            <div className="hero-orbital-right">
              <div className="hero-orbital-stage">
                {/* Dashed Orbital Arc Ring */}
                <div className="hero-orbital-dashed-ring" aria-hidden="true" />

                {/* Glowing Outer Arc along the Right Edge matching Image 2 */}
                <div className="hero-circle-glowing-rim" aria-hidden="true" />

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
                {/* Small Orbital Product Circles rotating along the dashed arc every 5s */}
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

                {/* FLOATING PILLS ALONG THE RIGHT EDGE OF CIRCLE MATCHING USER REFERENCE IMAGE 2 */}

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

