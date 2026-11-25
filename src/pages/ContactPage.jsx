import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import PageTopCtaBanner from '../components/PageTopCtaBanner';

export default function ContactPage({ showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (showToast) {
      showToast('Thank you! Your message has been received. Our team will contact you shortly.');
    }
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
      });
      setIsSubmitted(false);
    }, 4000);
  };

  const scrollToForm = () => {
    const el = document.getElementById('contact-form-anchor');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="saraj-page contact-page">
      {/* TOP CHEVRON CTA BANNER */}
      <PageTopCtaBanner
        image="/images/category/spices_powder.png"
        imageAlt="Contact Saraj Herbal & Wholesale Team"
        verticalTag="SUPPORT"
        title="Contact SARAJ"
        subtitle="Wholesale & Retail Support"
        description="Have questions about our pure herbal powders, bulk orders, or Ayurvedic usage? Our herbalists and care team are here to assist you."
        ctaLabel="Send Message"
        onCtaClick={scrollToForm}
      />

      {/* CONTACT INFO 4 CARDS */}
      <section className="contact-cards-section">
        <div className="container">
          <div className="contact-cards-grid">
            {/* Phone Card with Real Phone Green Color */}
            <div className="contact-info-card">
              <div className="contact-card-icon real-call-icon-bg">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="#ffffff">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <h4 className="contact-card-title">Call Us Directly</h4>
              <p className="contact-card-sub">Phone &amp; Mobile Assistance</p>
              <a href="tel:07971190288" className="contact-card-link call-link">
                07971190288
              </a>
            </div>

            {/* WhatsApp Card with Real WhatsApp Color */}
            <div className="contact-info-card">
              <div className="contact-card-icon real-whatsapp-icon-bg">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="#ffffff">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <h4 className="contact-card-title">WhatsApp Support</h4>
              <p className="contact-card-sub">Instant answers &amp; order assistance</p>
              <a
                href="https://wa.me/917971190288?text=Hello%20Saraj%20Exim%2C%20I%20have%20an%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card-link wa-link"
              >
                Chat on WhatsApp →
              </a>
            </div>

            {/* Email Card */}
            <div className="contact-info-card">
              <div className="contact-card-icon" style={{ background: '#1d4ed8' }}>
                <Mail size={22} color="#ffffff" />
              </div>
              <h4 className="contact-card-title">Email Us</h4>
              <p className="contact-card-sub">Inquiries, bulk quotes &amp; exports</p>
              <a href="mailto:care@sarajherbal.com" className="contact-card-link">
                care@sarajherbal.com
              </a>
            </div>

            {/* Registered Office Card */}
            <div className="contact-info-card">
              <div className="contact-card-icon" style={{ background: '#d97706' }}>
                <MapPin size={22} color="#ffffff" />
              </div>
              <h4 className="contact-card-title">Registered Office</h4>
              <p className="contact-card-sub">Saraj Exim (GST: 08AZOPS8823N2Z9)</p>
              <span className="contact-card-address">
                TC 524B, 5TH FLOOR, CAPITAL HIGH STREET, BHIWADI, Bhiwadi - 301019, Rajasthan, India
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE FORM & BULK ENQUIRY ROW */}
      <section className="contact-form-section" id="contact-form-anchor">
        <div className="container">
          <div className="contact-form-grid">
            {/* Form Column */}
            <div className="contact-form-col animate-left">
              <span className="section-eyebrow">SEND A MESSAGE</span>
              <h2 className="section-main-title serif-heading">How Can We Help You?</h2>
              <p className="contact-form-lead">
                Fill out the form below and our dedicated customer support specialist will respond within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="form-success-box">
                  <CheckCircle2 size={32} color="#22c55e" />
                  <h4>Thank you for reaching out!</h4>
                  <p>Your message has been sent successfully. We will get back to you shortly.</p>
                </div>
              ) : (
                <form className="saraj-contact-form" onSubmit={handleSubmit}>
                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="name">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">Inquiry Subject</label>
                      <select
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      >
                        <option value="General Inquiry">General Product Inquiry</option>
                        <option value="B2B Wholesale">B2B Wholesale / Bulk Powders</option>
                        <option value="Export Inquiry">Worldwide Export Inquiry</option>
                        <option value="Order Status">Existing Order Status</option>
                        <option value="Custom Formulation">Custom Private Labeling</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message *</label>
                    <textarea
                      id="message"
                      rows="5"
                      required
                      placeholder="Tell us what you're looking for, quantity requirements, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="contact-submit-btn">
                    <Send size={16} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Quick WhatsApp & Wholesale Info Column */}
            <div className="contact-side-col animate-right">
              <div className="contact-side-card wa-direct-card">
                <div className="side-card-icon-bubble">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="#ffffff">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <h3>Need Fast Assistance?</h3>
                <p>Chat directly with our herbal consultants on WhatsApp for immediate support or custom orders.</p>
                <a
                  href="https://wa.me/919876543210?text=Hello%20SARAJ%20Herbal%2C%20I%20have%20an%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="side-card-wa-btn"
                >
                  <span>Chat on WhatsApp Now</span>
                </a>
              </div>

              <div className="contact-side-card b2b-card">
                <h3>B2B Wholesale &amp; Exports</h3>
                <p>We supply bulk certified botanical powders (25kg bags &amp; 1000kg drums) to Ayurvedic clinics, cosmetic manufacturers, and herbal brands worldwide.</p>
                <ul className="side-card-list">
                  <li>✓ Certificate of Analysis (COA) with each batch</li>
                  <li>✓ Microbial &amp; Heavy Metals test reports</li>
                  <li>✓ Worldwide export clearance &amp; documentation</li>
                </ul>
                <a
                  href="mailto:export@sarajherbal.com?subject=Bulk%20Export%20Inquiry"
                  className="side-card-email-btn"
                >
                  Contact Export Desk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SARAJ EXIMS MAP SECTION (EXCLUSIVE FULL MAP WITH HIGHLIGHTED AREA & SARAJ EXIMS PIN) */}
      <section className="contact-map-only-section" id="location-map">
        <div className="contact-map-inner">
          <iframe
            title="Saraj Exims Location Map"
            src="https://maps.google.com/maps?q=28.2123356,76.8598471+(Saraj%20Exims)&t=&z=18&ie=UTF8&iwloc=B&output=embed"
            width="100%"
            height="480"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Highlighted Area Card for SARAJ EXIMS */}
          <div className="map-highlight-overlay">
            <div className="map-highlight-card">
              <div className="map-highlight-header">
                <div className="map-pin-pulse-wrap">
                  <div className="map-pulse-ring" />
                  <MapPin size={22} className="map-pin-icon" />
                </div>
                <div className="map-highlight-head-text">
                  <span className="map-highlight-badge">HEADQUARTERS &amp; FACILITY</span>
                  <h3 className="map-highlight-title">Saraj Exims</h3>
                </div>
              </div>

              <p className="map-highlight-address">
                TC 524B, 5th Floor, Capital High Street, Bhiwadi - 301019, Rajasthan, India
              </p>

              <div className="map-highlight-meta">
                <span className="map-meta-tag">Capital High Street</span>
                <span className="map-meta-tag">Saraj Foundation</span>
              </div>

              <a
                href="https://www.google.com/maps/place/Saraj+Foundation+%7C+Best+NGO+in+Bhiwadi/@28.2123356,76.859059,118m/data=!3m1!1e3!4m10!1m2!2m1!1sTC+524B,+5TH+FLOOR,+CAPITAL+HIGH+STREET,+BHIWADI,+Bhiwadi+-+301019,+Rajasthan,+India!3m6!1s0x390d375c7bbec911:0x23a978e86c1efcbf!8m2!3d28.2123356!4d76.8598471!15sClRUQyA1MjRCLCA1VEggRkxPT1IsIENBUElUQUwgSElHSCBTVFJFRVQsIEJISVdBREksIEJoaXdhZGkgLSAzMDEwMTksIFJhamFzdGhhbiwgSW5kaWGSARVzb2NpYWxfd2VsZmFyZV9jZW50ZXLgAQA!16s%2Fg%2F11lyzysxdw?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="map-view-larger-btn"
              >
                <span>View on Google Maps</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
