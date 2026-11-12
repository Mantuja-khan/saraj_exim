import React from 'react';
import { Building2 } from 'lucide-react';
import RosePowderBenefitsSpotlight from '../components/RosePowderBenefitsSpotlight';
import PageTopCtaBanner from '../components/PageTopCtaBanner';

export default function AboutPage({ onNavigate, onSelectProduct }) {
  const keyFacts = [
    { label: 'Nature of Business', value: 'Manufacturer, Trader and Supplier' },
    { label: 'Location', value: 'Bhiwadi, Rajasthan, India' },
    { label: 'Year of Establishment', value: '2025' },
    { label: 'GST Number', value: '08AZOPS8823N2Z9' },
    { label: 'Number of Employees', value: '06' },
    { label: 'Manufacturing Brand Name', value: 'Saraj' },
    { label: 'Number of Production Units', value: '01' },
    { label: 'Number of Designers', value: '01' },
    { label: 'Number of Engineers', value: '01' },
    { label: 'Mode of Transport', value: 'By Road' },
    { label: 'Mode of Payment', value: 'Online Payments(NEFT/RTGS/IMPS), Cheque/DD, Cash' }
  ];

  return (
    <div className="saraj-page about-page">
      {/* TOP CHEVRON CTA BANNER */}
      <PageTopCtaBanner
        image="/images/category/flower_powder.png"
        imageAlt="About Saraj Exim Botanical Craftsmanship"
        verticalTag="HERITAGE"
        title="About SARAJ EXIM"
        subtitle="Trust, Transparency & Innovation"
        description="Your trusted partner in 100% pure botanical herbal powders, spices, and natural wellness manufacturing from Bhiwadi, Rajasthan."
        ctaLabel="View Products"
        onCtaClick={() => onNavigate('products')}
      />

      {/* COMPANY STORY & INTRODUCTION */}
      <section className="about-story-section">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-text animate-left">
              <span className="section-eyebrow">WHO WE ARE</span>
              <h2 className="section-main-title serif-heading">
                Building Trust. Delivering Quality. Creating Value.
              </h2>
              <p className="about-para">
                Saraj Exim is a trusted manufacturer, trader and supplier of a wide array of quality products. Established in 2025 and based in Bhiwadi, Rajasthan, India, we are committed to delivering excellence through innovative solutions, efficient service, and customer-focused operations.
                Our business model is built on trust, transparency, and long-term relationships with our clients across industries.

              </p>

              <p className="about-para">
                We specialize in offering a diversified range of products to meet the dynamic needs of the market. Whether it is raw materials, finished goods, or customized product requirements, our offerings are designed to meet exact specifications and industry standards.
              </p>


            </div>

            {/* COMPANY IMAGE - SARAJ OFFICIAL POUCHES LINEUP (FREE OF BOXES & NO BACKGROUND) */}
            <div className="about-story-image-wrap unboxed-wrap animate-right">
              <img
                src="/images/saraj/about_product_lineup.jpg"
                alt="SARAJ EXIM Official 100% Pure Natural Products"
                className="about-lineup-pure-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* KEY FACTS OF SARAJ EXIM SECTION (FROM USER IMAGE 2) */}
      <section className="about-key-facts-section" id="key-facts">
        <div className="container">
          <div className="section-title-center">
            <span className="section-eyebrow">CORPORATE PROFILE</span>
            <h2 className="section-main-title serif-heading">Key Facts of Saraj Exim</h2>
            <p className="section-sub-text">
              Official business registration, infrastructure, and commercial credentials of Saraj Exim.
            </p>
          </div>

          <div className="key-facts-card-wrap">
            <div className="key-facts-table-box">
              <div className="key-facts-table-head">
                <Building2 size={20} color="#164322" />
                <h3>Key Facts of Saraj Exim</h3>
              </div>
              <table className="key-facts-table">
                <tbody>
                  {keyFacts.map((fact, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                      <td className="key-fact-label">{fact.label}</td>
                      <td className="key-fact-value">{fact.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ROSE PETAL POWDER SPOTLIGHT WITH 6 SURROUNDING BENEFITS */}
      <RosePowderBenefitsSpotlight
        onNavigate={onNavigate}
        onSelectProduct={onSelectProduct}
      />

      {/* OUR PRODUCT RANGE */}
      <section className="about-process-section">
        <div className="container">
          <div className="section-title-center">
            <span className="section-eyebrow">WHAT WE OFFER</span>
            <h2 className="section-main-title serif-heading">Our Diverse Product Range</h2>
            <p className="section-sub-text">
              We offer a diversified selection of quality products designed to meet the evolving requirements of businesses and customers across industries.
            </p>
          </div>

          <div className="process-timeline-grid range-cards-grid">
            <div className="process-step-card range-step-card animate-left">
              {/* Blurred Background Image at Right Side */}
              <div className="range-card-bg-wrap">
                <img
                  src="/images/range/spices_range.png"
                  alt=""
                  aria-hidden="true"
                  className="range-card-bg-img"
                  loading="lazy"
                />
              </div>
              <div className="range-card-content">
                <div className="process-step-num">01</div>
                <h4 className="process-step-title">Indian Spices Powder</h4>
                <p className="process-step-desc">
                  A diverse range of authentic Indian spice powders suitable for various culinary, health, and commercial requirements.
                </p>
              </div>
            </div>

            <div className="process-step-card range-step-card animate-right">
              {/* Blurred Background Image at Right Side */}
              <div className="range-card-bg-wrap">
                <img
                  src="/images/range/flower_range.png"
                  alt=""
                  aria-hidden="true"
                  className="range-card-bg-img"
                  loading="lazy"
                />
              </div>
              <div className="range-card-content">
                <div className="process-step-num">02</div>
                <h4 className="process-step-title">Flower Powder</h4>
                <p className="process-step-desc">
                  Quality pure dried botanical flower powders for beauty, skincare therapy, herbal teas, and custom product formulations.
                </p>
              </div>
            </div>

            <div className="process-step-card range-step-card animate-left">
              {/* Blurred Background Image at Right Side */}
              <div className="range-card-bg-wrap">
                <img
                  src="/images/range/fruit_veg_range.png"
                  alt=""
                  aria-hidden="true"
                  className="range-card-bg-img"
                  loading="lazy"
                />
              </div>
              <div className="range-card-content">
                <div className="process-step-num">03</div>
                <h4 className="process-step-title">Fruits &amp; Vegetables Powder</h4>
                <p className="process-step-desc">
                  A wide selection of nutrient-dense dehydrated fruit and vegetable superfood powders to fulfil diverse market requirements.
                </p>
              </div>
            </div>

            <div className="process-step-card range-step-card animate-right">
              {/* Blurred Background Image at Right Side */}
              <div className="range-card-bg-wrap">
                <img
                  src="/images/range/herbs_range.png"
                  alt=""
                  aria-hidden="true"
                  className="range-card-bg-img"
                  loading="lazy"
                />
              </div>
              <div className="range-card-content">
                <div className="process-step-num">04</div>
                <h4 className="process-step-title">Herbs Powder</h4>
                <p className="process-step-desc">
                  A diversified range of single-origin Ayurvedic herbal powders with complete options for bulk supply and customized requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
