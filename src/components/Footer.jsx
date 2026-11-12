import React from 'react';
import { Phone, Mail, MapPin, FileText, User } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/sarajData';

export default function Footer({ onNavigate, onSelectCategory, showToast }) {
  return (
    <footer className="saraj-footer" id="footer">
      <div className="container footer-main-container">
        <div className="footer-grid-4">
          {/* Brand Info & Identity */}
          <div className="footer-brand-col">
            <div
              className="saraj-footer-logo-wrap"
              onClick={() => onNavigate('home')}
              style={{ cursor: 'pointer' }}
              title="Saraj Exim"
            >
              <img
                src="/images/saraj/saraj_logo.png"
                alt="Saraj Exim Logo"
                className="saraj-footer-logo-img"
              />
            </div>
            <h3 className="footer-company-name">Saraj Exim</h3>
            <p className="footer-company-desc">
              Trusted manufacturer, trader and supplier of premium organic herbal powders, spices, botanical powders, and natural oils.
            </p>

            <div className="footer-business-badges">
              <div className="footer-biz-badge">
                <User size={13} color="#ffffff" />
                <span><strong>Ms. Monika</strong> (Proprietor)</span>
              </div>
              <div className="footer-biz-badge">
                <FileText size={13} color="#ffffff" />
                <span>GST: <strong>08AZOPS8823N2Z9</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-head">QUICK LINKS</h4>
            <ul className="footer-links-list">
              <li>
                <button type="button" onClick={() => onNavigate('home')}>Home</button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('about')}>About SARAJ EXIM</button>
              </li>
              <li>
                <button type="button" onClick={() => { onSelectCategory(null); onNavigate('products'); }}>All Products</button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('about')}>Why Choose Us</button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('contact')}>Contact Us</button>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="footer-col-head">OUR PRODUCTS</h4>
            <ul className="footer-links-list">
              {PRODUCT_CATEGORIES.slice(0, 6).map(cat => (
                <li key={cat.id}>
                  <button
                    type="button"
                    onClick={() => {
                      onSelectCategory(cat.id);
                      onNavigate('products');
                    }}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Registered Office & Contact Details */}
          <div className="footer-contact-col">
            <h4 className="footer-col-head">REGISTERED OFFICE</h4>

            <div className="footer-contact-items">
              <div className="footer-contact-row-item">
                <MapPin size={16} color="#ffffff" className="footer-icon-pin" />
                <span className="footer-addr-text">
                  TC 524B, 5TH FLOOR, CAPITAL HIGH STREET, BHIWADI, Bhiwadi - 301019, Rajasthan, India
                </span>
              </div>

              <div className="footer-contact-row-item">
                <Phone size={15} color="#ffffff" />
                <div className="footer-phone-nums">
                  <a href="tel:07971190288" className="footer-tel-link">
                    Phone: 07971190288
                  </a>
                  <a href="tel:07971190288" className="footer-tel-link">
                    Mobile: 07971190288
                  </a>
                </div>
              </div>

              <div className="footer-contact-row-item">
                <Mail size={15} color="#ffffff" />
                <a href="mailto:care@sarajherbal.com" className="footer-tel-link">
                  care@sarajherbal.com
                </a>
              </div>
            </div>

            {/* Quick newsletter subscription */}
            <div style={{ marginTop: '16px' }}>
              <p style={{ fontSize: '0.8rem', color: '#ffffff', marginBottom: '8px' }}>
                Subscribe for product updates &amp; wholesale catalog:
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (showToast) showToast('Thank you for subscribing to Saraj Exim updates!');
                  e.target.reset();
                }}
                style={{ display: 'flex', gap: '6px' }}
              >
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  style={{
                    flexGrow: 1,
                    padding: '8px 12px',
                    borderRadius: '4px',
                    border: 'none',
                    fontSize: '0.82rem',
                    outline: 'none',
                    background: '#ffffff',
                    color: '#1a1a1a'
                  }}
                />
                <button
                  type="submit"
                  className="order-now-nav-btn"
                  style={{ padding: '8px 14px', fontSize: '0.78rem', borderRadius: '4px' }}
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-copyright-bar">
          <p className="footer-copyright-left">
            &copy; 2025 <strong>Saraj Exim</strong>. All rights reserved.
          </p>

          <p className="footer-copyright-right">
            Website Managed by{' '}
            <a
              href="https://ssproductionhouse.in"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-managed-link"
            >
              <strong>SS Production House</strong>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
