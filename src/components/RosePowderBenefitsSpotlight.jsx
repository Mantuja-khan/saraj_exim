import React from 'react';

/**
 * RosePowderBenefitsSpotlight
 * Displays Rose Petal Powder in the center with 6 surrounding benefits:
 * - Free of boxes (unboxed, clean typography)
 * - Number badges (01, 02, 03, 04, 05, 06) instead of icons
 * - 3 benefits on the left surrounding the center product image
 * - 3 benefits on the right surrounding the center product image
 */
export default function RosePowderBenefitsSpotlight({ onSelectProduct, onNavigate }) {
  const leftBenefits = [
    {
      id: 'b1',
      num: '01',
      title: 'Biotin & Keratin',
      desc: 'Vital botanical co-factors that fortify roots, promote lustrous hair shine, and strengthen nail beds.'
    },
    {
      id: 'b2',
      num: '02',
      title: 'Zinc & Minerals',
      desc: 'A powerhouse mineral that unclogs pores, balances oil secretion, and supports cellular regeneration.'
    },
    {
      id: 'b3',
      num: '03',
      title: 'Vitamin E Hydration',
      desc: 'Locks in deep cellular moisture, soothes irritation, and reduces skin dryness and brittleness.'
    }
  ];

  const rightBenefits = [
    {
      id: 'b4',
      num: '04',
      title: 'Vitamin C Radiance',
      desc: 'Promotes collagen synthesis, protects skin follicles from oxidative stress, and evens out tone.'
    },
    {
      id: 'b5',
      num: '05',
      title: 'B-Complex Vitamins',
      desc: 'Encourages micro-circulation, energizes skin cells, and maintains a healthy, refreshed scalp.'
    },
    {
      id: 'b6',
      num: '06',
      title: 'Vitamin D & Flavonoids',
      desc: 'Calms redness, tightens delicate skin pores, and combats premature environmental aging.'
    }
  ];

  const handleRoseClick = () => {
    if (onSelectProduct) {
      onSelectProduct({ id: 'rose', name: 'Rose Petal Powder' });
    } else if (onNavigate) {
      onNavigate('products');
    }
  };

  return (
    <section className="rose-benefits-spotlight-section" id="rose-spotlight">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-center">
          <span className="section-eyebrow rose-eyebrow">
            PURE BOTANICAL SPOTLIGHT
          </span>
          <h2 className="section-main-title serif-heading">
            Pure Damask Rose Petal Powder
          </h2>
          <p className="section-sub-text">
            Sustainably wild-harvested Indian Rosa Damascena petals, sun-cured and micro-pulverized for holistic skincare, hair therapy, and Ayurvedic wellness.
          </p>
        </div>

        {/* 3-Column Radial Layout Surrounding Center Product */}
        <div className="rose-spotlight-layout">
          {/* LEFT 3 BENEFITS (01, 02, 03) */}
          <div className="rose-benefits-col left-col animate-left">
            {leftBenefits.map((b) => (
              <div key={b.id} className="rose-benefit-item left-item">
                <div className="rose-benefit-num-badge">
                  {b.num}
                </div>
                <div className="rose-benefit-text">
                  <h4 className="rose-benefit-title">{b.title}</h4>
                  <p className="rose-benefit-desc">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER PRODUCT IMAGE */}
          <div className="rose-center-product-col">
            <div className="rose-product-halo-ring"></div>
            <div
              className="rose-product-showcase-box"
              onClick={handleRoseClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleRoseClick();
                }
              }}
              title="Click to view Rose Petal Powder details"
            >
              <img
                src="/images/saraj/rose_powder.png"
                alt="Pure Damask Rose Petal Powder"
                className="rose-center-img"
                loading="lazy"
              />
              <div className="rose-product-label-tag">
                <span className="rose-tag-name">ROSA DAMASCENA</span>
                <span className="rose-tag-sub">100% PURE ORGANIC PETAL POWDER</span>
              </div>
            </div>
          </div>

          {/* RIGHT 3 BENEFITS (04, 05, 06) */}
          <div className="rose-benefits-col right-col animate-right">
            {rightBenefits.map((b) => (
              <div key={b.id} className="rose-benefit-item right-item">
                <div className="rose-benefit-num-badge">
                  {b.num}
                </div>
                <div className="rose-benefit-text">
                  <h4 className="rose-benefit-title">{b.title}</h4>
                  <p className="rose-benefit-desc">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
