import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SARAJ_PRODUCTS } from '../data/sarajData';

/**
 * OrganicSignatureSection
 * Replaces "Goodness of Nature for a Better Tomorrow"
 * Recreates the exact organic aesthetic from the user's reference image:
 * - Huge stylized "ORGANIC" title across the backdrop
 * - "Signature Blends" with "Thoughtfully crafted. Naturally better."
 * - 3 signature product images presented side-by-side with botanicals
 */
export default function OrganicSignatureSection({ onNavigate, onSelectProduct }) {
  // Find 3 products corresponding to the Citrus/Green, Mint/Herb, and Golden Chai/Turmeric profiles
  const greenBlend = SARAJ_PRODUCTS.find(p => p.id === 'moringa') || SARAJ_PRODUCTS[0];
  const herbalBlend = SARAJ_PRODUCTS.find(p => p.id === 'neem') || SARAJ_PRODUCTS[1];
  const goldenBlend = SARAJ_PRODUCTS.find(p => p.id === 'turmeric') || SARAJ_PRODUCTS.find(p => p.id === 'chilli') || SARAJ_PRODUCTS[2];

  const signatureItems = [
    {
      blendId: greenBlend?.id || 'moringa',
      product: greenBlend,
      badge: 'CITRUS GREEN',
      name: 'Organic Moringa Vitality',
      flavorNote: 'Whole leaf moringa, citrus zest & green tea infusion',
      accentColor: '#4f7d54',
      bgPill: '#eaf3ea',
      image: greenBlend?.image || '/images/saraj/moringa_powder.png',
      tag: 'Revitalize & Focus'
    },
    {
      blendId: herbalBlend?.id || 'neem',
      product: herbalBlend,
      badge: 'MINT GARDEN',
      name: 'Pure Neem Herbal Detox',
      flavorNote: 'Wild-harvested neem, garden mint & holy basil',
      accentColor: '#2d5c3b',
      bgPill: '#e3efe6',
      image: herbalBlend?.image || '/images/saraj/neem_powder.png',
      tag: 'Purify & Glow'
    },
    {
      blendId: goldenBlend?.id || 'turmeric',
      product: goldenBlend,
      badge: 'GOLDEN CHAI',
      name: 'Lakadong Golden Elixir',
      flavorNote: 'High-curcumin turmeric, Ceylon cinnamon & dry ginger',
      accentColor: '#b46733',
      bgPill: '#faeee2',
      image: goldenBlend?.image || '/images/saraj/chilli_powder.png',
      tag: 'Immunity & Warmth'
    }
  ];

  return (
    <section className="organic-signature-section" id="organic-section">
      {/* Decorative Warm Wave SVG matching reference design */}


      <div className="container organic-section-container">
        {/* BIG "ORGANIC" WATERMARK / TITLE ACROSS THE SECTION */}


        {/* TOP ACCENT ROW: Pure Ingredients Callout */}


        {/* MAIN SIGNATURE BLENDS ROW (LEFT: Narrative, RIGHT: 3 Products Side-by-Side) */}
        <div className="organic-blends-main-row">
          {/* LEFT COLUMN: Signature Blends Info */}
          <div className="organic-narrative-col animate-left">
            <div className="organic-col-badge">
              <Sparkles size={14} />
              <span>COLLECTION HIGHLIGHT</span>
            </div>

            <h2 className="organic-blends-title serif-heading single-row-heading">
              Organic Powders
            </h2>

            <p className="organic-blends-tagline">
              Thoughtfully crafted. Naturally better.
            </p>

            <p className="organic-blends-desc">
              Discover our most-loved blends, each one made with real organic ingredients
              and a dedicated purpose. Hand-graded, micro-milled, and packed with bioactive
              botanical goodness for your daily health ritual.
            </p>

            <button
              type="button"
              className="organic-explore-btn"
              onClick={() => onNavigate && onNavigate('products')}
            >
              <span>Explore All Blends</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* RIGHT COLUMN: 3 Products Images Showcase Side-by-Side */}
          <div className="organic-three-products-col animate-right">
            <div className="organic-three-products-grid">
              {signatureItems.map((item, idx) => (
                <div
                  key={idx}
                  className="organic-product-pouch-card"
                  onClick={() => {
                    if (item.product && onSelectProduct) {
                      onSelectProduct(item.product);
                    } else if (onNavigate) {
                      onNavigate('products');
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      if (item.product && onSelectProduct) onSelectProduct(item.product);
                    }
                  }}
                >
                  {/* Pouch / Vessel Image Container with botanical background badge */}
                  <div className="organic-pouch-img-wrap">
                    <div
                      className="organic-pouch-backdrop"
                      style={{ backgroundColor: item.bgPill }}
                    />
                    <img
                      src={item.image}
                      alt={item.name}
                      className="organic-pouch-img"
                      loading="lazy"
                    />
                  </div>

                  {/* Clean Content Below Image */}
                  <div className="organic-pouch-info">
                    <span
                      className="organic-pouch-badge"
                      style={{ color: item.accentColor }}
                    >
                      {item.badge}
                    </span>

                    <h4 className="organic-pouch-title serif-heading">
                      {item.name}
                    </h4>

                    <p className="organic-pouch-note">
                      {item.flavorNote}
                    </p>

                    <div className="organic-pouch-price-row">
                      <span className="organic-pouch-price">
                        ₹{item.product?.price || 199}
                      </span>
                      <span className="organic-view-pill-link">
                        View Details →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

