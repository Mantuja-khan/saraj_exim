import React from 'react';
import {
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { PRODUCT_CATEGORIES, CATEGORIES, SARAJ_PRODUCTS } from '../data/sarajData';
import ProductCard from '../components/ProductCard';
import PageTopCtaBanner from '../components/PageTopCtaBanner';

export default function ProductsPage({
  selectedCategory,
  onSelectCategory,
  onSelectProduct,
  showToast
}) {
  const currentCategoryObj = PRODUCT_CATEGORIES.find(c => c.id === selectedCategory);
  const currentCatBannerObj = CATEGORIES.find(c => c.id === selectedCategory);

  const filteredProducts = selectedCategory
    ? SARAJ_PRODUCTS.filter(p => p.category === selectedCategory)
    : SARAJ_PRODUCTS;

  const scrollToProducts = () => {
    const el = document.getElementById('products-grid-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="saraj-page products-page">
      {/* TOP CHEVRON CTA BANNER (LEFT CATEGORY IMAGE, RIGHT CATEGORY NAME + CONTENT) */}
      <PageTopCtaBanner
        image={currentCatBannerObj ? currentCatBannerObj.image : '/images/category/herbel_powder.png'}
        imageAlt={currentCategoryObj ? currentCategoryObj.name : 'Our Botanical Products'}
        verticalTag={currentCategoryObj ? 'CATEGORY' : 'SARAJ EXIM'}
        title={currentCategoryObj ? currentCategoryObj.name : 'Botanical Products'}
        subtitle={currentCatBannerObj ? `${currentCatBannerObj.count} Collection` : '100% Pure & Natural Range'}
        description={
          currentCategoryObj
            ? currentCategoryObj.description
            : 'Explore our 100% pure single-origin herbal powders, cold-pressed oils, spice powders, and Ayurvedic wellness essentials.'
        }
        ctaLabel={currentCategoryObj ? 'Browse Range' : 'Explore All'}
        onCtaClick={scrollToProducts}
      />

      {/* PRODUCTS DISPLAY SECTION */}
      <section className="products-main-section" id="products-grid-section">
        <div className="container">
          {/* Active Filter Bar & Clean Category Dropdown (Replaces old drag section) */}
          <div className="products-results-header">
            {/* Category Dropdown Selector */}
            <div className="category-dropdown-filter-wrap">
              <label htmlFor="category-select" className="cat-dropdown-label">
                Filter by Category:
              </label>
              <div className="cat-select-custom-box">
                <select
                  id="category-select"
                  className="cat-select-dropdown"
                  value={selectedCategory || ''}
                  onChange={(e) => {
                    const val = e.target.value || null;
                    onSelectCategory(val);
                    if (showToast) {
                      const name = val ? PRODUCT_CATEGORIES.find(c => c.id === val)?.name : 'All Products';
                      showToast(`Browsing: ${name}`);
                    }
                  }}
                >
                  <option value="">All Products ({SARAJ_PRODUCTS.length})</option>
                  {PRODUCT_CATEGORIES.map(cat => {
                    const count = SARAJ_PRODUCTS.filter(p => p.category === cat.id).length;
                    return (
                      <option key={cat.id} value={cat.id}>
                        {cat.name} ({count})
                      </option>
                    );
                  })}
                </select>
                <ChevronDown size={16} className="cat-select-arrow" />
              </div>
            </div>

            <div className="results-count-wrap">
              <div className="results-count-text">
                Showing <strong>{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'product' : 'products'}
                {currentCategoryObj && (
                  <span> in <span className="cat-highlight-name">{currentCategoryObj.name}</span></span>
                )}
              </div>

              {selectedCategory && (
                <button
                  type="button"
                  className="clear-cat-btn"
                  onClick={() => onSelectCategory(null)}
                >
                  Clear Category Filter ✕
                </button>
              )}
            </div>
          </div>

          {/* Grid of Product Cards */}
          {filteredProducts.length === 0 ? (
            <div className="no-products-box">
              <Sparkles size={36} color="var(--green-brand)" style={{ margin: '0 auto 12px' }} />
              <h3>Products coming soon to this category!</h3>
              <p>We are currently harvesting and hand-processing this batch of herbs.</p>
              <button
                type="button"
                className="view-details-btn sharp-btn"
                style={{ width: 'auto', margin: '14px auto 0' }}
                onClick={() => onSelectCategory(null)}
              >
                Show All Available Products
              </button>
            </div>
          ) : (
            <div className="products-page-grid">
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelectProduct={onSelectProduct}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
