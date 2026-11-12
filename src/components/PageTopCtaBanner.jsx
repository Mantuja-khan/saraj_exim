import React from 'react';
import { Phone } from 'lucide-react';

export default function PageTopCtaBanner({
  image,
  imageAlt,
  verticalTag = 'PURE HERBAL',
  title,
  subtitle,
  description,
  ctaLabel = 'Explore Now',
  onCtaClick
}) {
  return (
    <section className="top-chevron-cta-section">
      <div className="top-chevron-cta-banner">
        {/* Far-left Slim Dark Vertical Label Strip */}
        <div className="cta-vertical-ribbon">
          <span>{verticalTag}</span>
        </div>

        {/* Left Side: Angled Chevron Wedge with Category Image */}
        <div className="cta-left-chevron-panel animate-left">
          <div className="cta-chevron-img-wrap">
            <img
              src={image}
              alt={imageAlt || title}
              className="cta-chevron-category-img"
            />
          </div>
        </div>

        {/* Right Side: Category Name, Subheading, Little Content & Action Row */}
        <div className="cta-right-content-panel animate-right">
          <h1 className="cta-right-big-title">{title}</h1>
          {subtitle && <p className="cta-right-subtitle">{subtitle}</p>}
          {description && <p className="cta-right-desc">{description}</p>}

          <div className="cta-right-actions-row">
            <a href="tel:07971190288" className="cta-right-phone-link" title="Call Saraj Exim">
              <Phone size={15} />
              <span>07971190288</span>
            </a>

            <button
              type="button"
              className="cta-right-action-btn"
              onClick={onCtaClick}
            >
              {ctaLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

