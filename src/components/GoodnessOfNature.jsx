import React from 'react';
import {
  Leaf,
  FlaskConical,
  HeartHandshake,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

export default function GoodnessOfNature({ onNavigate }) {
  return (
    <section className="goodness-nature-bg-section" id="goodness-nature">
      {/* Background Image Container with Overlay */}
      <div className="goodness-nature-overlay"></div>

      <div className="container goodness-nature-content-wrap">
        <div className="goodness-header-center">
          <h2 className="goodness-title serif-heading">
            Goodness of Nature for a Better Tomorrow
          </h2>
          <p className="goodness-subtitle">
            We craft 100% pure herbal powders sourced directly from organic botanical farms.
            Every herb is gently processed to preserve its essential vitamins, minerals, and bioactive
            phytonutrients—bringing authentic Ayurvedic vitality to your daily routine.
          </p>
        </div>

        {/* 4 Feature Cards Overlaid on Background */}
        <div className="goodness-cards-grid">
          <div className="goodness-glass-card">
            <div className="goodness-card-icon">
              <Leaf size={24} />
            </div>
            <div className="goodness-card-body">
              <h4 className="goodness-card-title">100% Pure Herbs</h4>
              <p className="goodness-card-desc">
                Single-origin botanical herbs with zero fillers, cornstarch, artificial colors, or binders.
              </p>
            </div>
          </div>

          <div className="goodness-glass-card">
            <div className="goodness-card-icon">
              <FlaskConical size={24} />
            </div>
            <div className="goodness-card-body">
              <h4 className="goodness-card-title">Zero Chemicals</h4>
              <p className="goodness-card-desc">
                Non-GMO, pesticide-free, and gently stone-ground without thermal degradation.
              </p>
            </div>
          </div>

          <div className="goodness-glass-card">
            <div className="goodness-card-icon">
              <HeartHandshake size={24} />
            </div>
            <div className="goodness-card-body">
              <h4 className="goodness-card-title">Ethically Sourced</h4>
              <p className="goodness-card-desc">
                Direct partnerships with certified tribal &amp; rural farmers paying fair living wages.
              </p>
            </div>
          </div>

          <div className="goodness-glass-card">
            <div className="goodness-card-icon">
              <ShieldCheck size={24} />
            </div>
            <div className="goodness-card-body">
              <h4 className="goodness-card-title">Hygienic Processing</h4>
              <p className="goodness-card-desc">
                GMP-compliant cleanroom packaging locking in peak aroma, phytonutrients, and potency.
              </p>
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className="goodness-action-row">
          {onNavigate && (
            <button
              type="button"
              className="goodness-action-btn primary"
              onClick={() => onNavigate('products')}
            >
              <span>View All Products</span>
              <ArrowRight size={15} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}









