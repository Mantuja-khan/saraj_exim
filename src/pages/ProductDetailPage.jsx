import React, { useState } from 'react';
import {
  ShoppingCart,
  Share2,
  ArrowLeft,
  Check,
  ChevronDown,
  ChevronUp,
  Copy,
  ArrowRight
} from 'lucide-react';
import { SARAJ_PRODUCTS, PRODUCT_CATEGORIES } from '../data/sarajData';
import ProductCard from '../components/ProductCard';

export default function ProductDetailPage({
  product,
  onNavigate,
  onSelectProduct,
  onAddToCart,
  showToast
}) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [isShareDropdownOpen, setIsShareDropdownOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!product) {
    return (
      <div className="saraj-page">
        <div className="product-details-fluid-wrap" style={{ padding: '80px 24px', textAlign: 'center' }}>
          <h2>Product Not Found</h2>
          <p style={{ margin: '14px 0 24px', color: '#666' }}>
            The requested product could not be located.
          </p>
          <button
            type="button"
            className="view-details-btn sharp-btn"
            style={{ width: 'auto', margin: '0 auto' }}
            onClick={() => onNavigate('products')}
          >
            ← Back to All Products
          </button>
        </div>
      </div>
    );
  }

  // Calculate pricing & discount
  const originalPrice = Math.round(product.price * 1.35);
  const discountPercent = Math.round(((originalPrice - product.price) / originalPrice) * 100);
  const categoryObj = PRODUCT_CATEGORIES.find(c => c.id === product.category);

  // Related products (from same category or fallback)
  const relatedProducts = SARAJ_PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);
  const displayRelated = relatedProducts.length >= 2
    ? relatedProducts
    : SARAJ_PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  // Direct product share URL
  const productShareUrl = `${window.location.origin}${window.location.pathname}#product/${product.id}`;

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${product.name} (${product.subtitle}) | SARAJ EXIM`,
          text: `Check out ${product.name} from SARAJ EXIM!`,
          url: productShareUrl
        });
        if (showToast) showToast('Product shared successfully!');
        return;
      } catch {
        // Fallback to copy
      }
    }
    handleCopyLink();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(productShareUrl).then(() => {
      setCopiedLink(true);
      if (showToast) showToast('Product link copied to clipboard!');
      setTimeout(() => setCopiedLink(false), 3000);
    });
  };

  // WhatsApp enquiry link (Green button)
  const whatsappEnquiryMessage = encodeURIComponent(
    `Hello Saraj Exim, I am interested in inquiring about "${product.name}" (${product.subtitle}, Price: ₹${product.price}). Please share bulk/retail order details.\nProduct Link: ${productShareUrl}`
  );
  const whatsappUrl = `https://wa.me/917971190288?text=${whatsappEnquiryMessage}`;

  // WhatsApp share link
  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(
    `Check out ${product.name} (${product.subtitle}) from SARAJ EXIM: ${productShareUrl}`
  )}`;

  // Product-specific Specifications from data (with intelligent fallbacks)
  const specs = product.specifications || {};
  const specUsage = specs.usage || product.usage || 'Food Spices / Herbal Wellness / Culinary';
  const specPurity = specs.purity || '90% To 95%';
  const specProductType = specs.productType || 'Fresh / 100% Pure Organic';
  const specShape = specs.shape || 'Powder';
  const specProcessing = specs.processing || 'Fried / Shade-Dried & Stone Ground';
  const specGrade = specs.grade || 'Food Grade';
  const specShelfLife = specs.shelfLife || '6-12 Months';
  const specWeight = specs.weight || product.subtitle || '100 Grams (g)';
  const specStorage = specs.storage || 'Room Temperature';

  // Product-specific FAQs from product data (fallback to tailored defaults if empty)
  const productFaqs = (product.faqs && product.faqs.length > 0)
    ? product.faqs
    : [
        {
          q: `Is ${product.name} 100% pure and free from chemical additives?`,
          a: `Yes, absolutely. ${product.name} from Saraj Exim is pure and single-origin. It is harvested from quality farms and processed with zero artificial preservatives, starches, or synthetic dyes.`
        },
        {
          q: 'How should I consume or use this product for best results?',
          a: product.usage || 'Take as recommended by an Ayurvedic or culinary practitioner. Mix with warm water, milk, or fresh smoothies. For external applications, blend with pure rose water or aloe vera.'
        },
        {
          q: 'How should this product be stored once opened?',
          a: 'Store at room temperature in a cool, dry place. Keep the pouch sealed after every use, or transfer to an airtight glass container away from direct sunlight.'
        },
        {
          q: 'Can I purchase this in bulk wholesale or export quantities?',
          a: 'Yes, Saraj Exim is a specialized manufacturer, trader and supplier. We supply 25kg bags, bulk packaging, and customized client specifications. Click "Send Enquiry on WhatsApp" or call 07971190288.'
        },
        {
          q: 'How long does shipping and delivery take?',
          a: 'All orders are processed and dispatched within 24 to 48 hours from our Bhiwadi facility. Deliveries typically arrive within 3–5 business days via road logistics with tracking.'
        }
      ];

  return (
    <div className="saraj-page product-detail-page full-width-layout">
      {/* FULL WIDTH BREADCRUMB BAR */}
      <div className="product-breadcrumb-bar full-width-bar">
        <div className="product-details-fluid-wrap breadcrumb-inner">
          <div className="breadcrumb-path">
            <button type="button" className="bc-link" onClick={() => onNavigate('home')}>Home</button>
            <span className="bc-separator">›</span>
            <button type="button" className="bc-link" onClick={() => onNavigate('products')}>Our Products</button>
            {categoryObj && (
              <>
                <span className="bc-separator">›</span>
                <span className="bc-current-cat">{categoryObj.name}</span>
              </>
            )}
            <span className="bc-separator">›</span>
            <span className="bc-current-prod">{product.name}</span>
          </div>

          <button
            type="button"
            className="back-to-products-btn"
            onClick={() => onNavigate('products')}
          >
            <ArrowLeft size={14} />
            <span>Back to Products</span>
          </button>
        </div>
      </div>

      {/* FULL WIDTH MAIN SHOWCASE - COMPLETELY FREE OF RIGID BOXES */}
      <section className="product-main-showcase full-width-section">
        <div className="product-details-fluid-wrap">
          <div className="open-product-layout">
            {/* LEFT COLUMN: PRODUCT IMAGERY (INCREASED SIZE & UNBOXED) & ACTION BUTTONS */}
            <div className="product-visual-col unboxed-visual animate-left">
              <div className="product-visual-sticky-box">
                {/* Main Large Product Image Frame - Clean, Borderless & Tags Removed */}
                <div className="main-image-display-frame unboxed-img-frame enlarged-img-frame">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="main-product-img enlarged-product-img"
                  />
                </div>

                {/* DUAL ACTION BUTTONS ROW */}
                <div className="product-action-buttons-row">
                  {/* ADD TO CART BUTTON */}
                  <button
                    type="button"
                    className="fk-action-btn fk-add-cart-btn"
                    onClick={() => {
                      onAddToCart(product);
                      if (showToast) showToast(`Added ${product.name} to basket!`);
                    }}
                  >
                    <ShoppingCart size={19} />
                    <span>ADD TO CART</span>
                  </button>

                  {/* SEND ENQUIRY ON WHATSAPP BUTTON */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fk-action-btn fk-whatsapp-enquiry-btn"
                    title="Send instant product enquiry on WhatsApp"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="#ffffff" style={{ flexShrink: 0 }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z"/>
                    </svg>
                    <span>SEND ENQUIRY ON WHATSAPP</span>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: PRODUCT INFORMATION, SPECIFICATIONS & FAQS */}
            <div className="product-info-col unboxed-info animate-right">
              {/* Category Pill & Share Button Row */}
              <div className="product-top-meta-row">
                <span className="fk-category-pill">
                  {product.categoryName || categoryObj?.name || 'Ayurvedic Herbal Powder'}
                </span>

                {/* SHARE BUTTON WITH INTERACTIVE OPTIONS */}
                <div className="share-btn-wrapper">
                  <button
                    type="button"
                    className="fk-share-btn"
                    onClick={() => setIsShareDropdownOpen(prev => !prev)}
                    title="Share this product link"
                  >
                    <Share2 size={16} />
                    <span>Share</span>
                  </button>

                  {/* Share Dropdown Popover */}
                  {isShareDropdownOpen && (
                    <div className="share-popover-box">
                      <div className="share-popover-head">
                        <span>Share Product</span>
                        <button
                          type="button"
                          className="popover-close-btn"
                          onClick={() => setIsShareDropdownOpen(false)}
                        >
                          ✕
                        </button>
                      </div>

                      <div className="share-options-list">
                        <button
                          type="button"
                          className="share-opt-item copy-opt"
                          onClick={() => {
                            handleCopyLink();
                            setIsShareDropdownOpen(false);
                          }}
                        >
                          {copiedLink ? <Check size={16} color="#16a34a" /> : <Copy size={16} />}
                          <span>{copiedLink ? 'Link Copied!' : 'Copy Direct Link'}</span>
                        </button>

                        <a
                          href={whatsappShareUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="share-opt-item wa-opt"
                          onClick={() => setIsShareDropdownOpen(false)}
                        >
                          <svg viewBox="0 0 24 24" width="16" height="16" fill="#25d366">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z"/>
                          </svg>
                          <span>Share on WhatsApp</span>
                        </a>

                        <button
                          type="button"
                          className="share-opt-item native-opt"
                          onClick={() => {
                            handleNativeShare();
                            setIsShareDropdownOpen(false);
                          }}
                        >
                          <Share2 size={16} />
                          <span>More Sharing Apps</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Product Title & Subtitle */}
              <h1 className="fk-product-title enlarged-title">{product.name}</h1>
              <p className="fk-product-subtitle enlarged-subtitle">{product.subtitle}</p>

              {/* Price Section - Rupee Only */}
              <div className="fk-price-card unboxed-price-card">
                <span className="fk-special-price-tag">Special Price</span>
                <div className="fk-price-main-row">
                  <span className="fk-selling-price enlarged-price">₹{product.price}</span>
                  <span className="fk-original-price">₹{originalPrice}</span>
                  <span className="fk-discount-tag">{discountPercent}% off</span>
                </div>
              </div>

              {/* Product Detailed Description (Enlarged Font & Unboxed) */}
              <div className="fk-description-box unboxed-section-flow">
                <h3 className="fk-section-title enlarged-section-head">Product Description</h3>
                <p className="fk-description-text enlarged-body-text">{product.description}</p>
              </div>

              {/* SPECIFICATIONS TABLE (MATCHING USER SPECIFICATION IMAGE & ENLARGED FONT) */}
              <div className="fk-specifications-section unboxed-section-flow">
                <h3 className="fk-section-title enlarged-section-head">Specifications</h3>

                {/* Primary Specifications Table */}
                <div className="fk-spec-group">
                  <table className="fk-spec-table unboxed-table enlarged-spec-table">
                    <tbody>
                      <tr>
                        <td className="fk-spec-key">Usage</td>
                        <td className="fk-spec-val">{specUsage}</td>
                      </tr>
                      <tr>
                        <td className="fk-spec-key">Purity(%)</td>
                        <td className="fk-spec-val">{specPurity}</td>
                      </tr>
                      <tr>
                        <td className="fk-spec-key">Product Type</td>
                        <td className="fk-spec-val">{specProductType}</td>
                      </tr>
                      <tr>
                        <td className="fk-spec-key">Shape</td>
                        <td className="fk-spec-val">{specShape}</td>
                      </tr>
                      <tr>
                        <td className="fk-spec-key">Processing</td>
                        <td className="fk-spec-val">{specProcessing}</td>
                      </tr>
                      <tr>
                        <td className="fk-spec-key">Grade</td>
                        <td className="fk-spec-val">{specGrade}</td>
                      </tr>
                      <tr>
                        <td className="fk-spec-key">Shelf Life</td>
                        <td className="fk-spec-val">{specShelfLife}</td>
                      </tr>
                      <tr>
                        <td className="fk-spec-key">Weight</td>
                        <td className="fk-spec-val">{specWeight}</td>
                      </tr>
                      <tr>
                        <td className="fk-spec-key">Storage</td>
                        <td className="fk-spec-val">{specStorage}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Additional Commercial & Company Details */}
                <div className="fk-spec-group" style={{ marginTop: '28px' }}>
                  <div className="fk-spec-group-header enlarged-group-head">Manufacturing &amp; Commercial Details</div>
                  <table className="fk-spec-table unboxed-table enlarged-spec-table">
                    <tbody>
                      <tr>
                        <td className="fk-spec-key">Brand</td>
                        <td className="fk-spec-val">SARAJ EXIM</td>
                      </tr>
                      <tr>
                        <td className="fk-spec-key">Manufacturer / Supplier</td>
                        <td className="fk-spec-val">Saraj Exim (Ms. Monika, Proprietor)</td>
                      </tr>
                      <tr>
                        <td className="fk-spec-key">Registered Facility</td>
                        <td className="fk-spec-val">TC 524B, 5th Floor, Capital High Street, Bhiwadi - 301019, Rajasthan, India</td>
                      </tr>
                      <tr>
                        <td className="fk-spec-key">GST Number</td>
                        <td className="fk-spec-val">08AZOPS8823N2Z9</td>
                      </tr>
                      <tr>
                        <td className="fk-spec-key">Customer Support</td>
                        <td className="fk-spec-val">Phone: 07971190288 | Email: care@sarajherbal.com</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* FREQUENTLY ASKED QUESTIONS (FAQ) SECTION */}
              <div className="fk-faq-section unboxed-section-flow">
                <h3 className="fk-section-title enlarged-section-head">Frequently Asked Questions</h3>
                <div className="fk-faq-accordion unboxed-faq-list">
                  {productFaqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div key={idx} className={`fk-faq-item unboxed-faq-item ${isOpen ? 'open' : ''}`}>
                        <button
                          type="button"
                          className="fk-faq-question-btn enlarged-faq-q"
                          onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        >
                          <span className="faq-q-text">
                            <strong>Q:</strong> {faq.q}
                          </span>
                          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        {isOpen && (
                          <div className="fk-faq-answer-panel enlarged-faq-a">
                            <p><strong>A:</strong> {faq.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS SECTION BELOW (FULL WIDTH & CLEAN) */}
      <section className="related-products-section full-width-related">
        <div className="product-details-fluid-wrap">
          <div className="related-products-header">
            <div>
              <span className="section-eyebrow">EXPLORE MORE</span>
              <h2 className="related-title serif-heading">Related Products</h2>
              <p className="related-sub">Customers who viewed this item also explored these natural powders</p>
            </div>
            <button
              type="button"
              className="view-all-related-btn"
              onClick={() => onNavigate('products')}
            >
              <span>View All Products</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="products-grid-4">
            {displayRelated.map(item => (
              <ProductCard
                key={item.id}
                product={item}
                onSelectProduct={onSelectProduct}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
