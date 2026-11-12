/**
 * ============================================================================
 * CATEGORY: INDIAN SPICES POWDER
 * ============================================================================
 * Folder: src/data/products/spices/
 * Category ID: 'spices'
 * Category Name: 'Indian Spices Powder'
 *
 * FULL SINGLE PRODUCT DATA SCHEMA:
 * {
 *   id: 'unique_id',
 *   name: 'Product Name',
 *   subtitle: 'Weight & Pack Info',
 *   price: 149,
 *   usdPrice: 3.49,
 *   image: '/images/...',
 *   category: 'spices',
 *   categoryName: 'Indian Spices Powder',
 *   featured: true / false,
 *   description: 'Full overview...',
 *   benefits: ['Benefit 1', 'Benefit 2', ...],
 *   usage: 'Recommended usage instructions...',
 *   specifications: {
 *     usage: '...',
 *     purity: '...',
 *     productType: '...',
 *     shape: 'Powder',
 *     processing: '...',
 *     grade: '...',
 *     shelfLife: '...',
 *     weight: '...',
 *     storage: '...'
 *   },
 *   faqs: [
 *     { q: 'Question 1', a: 'Answer 1' },
 *     { q: 'Question 2', a: 'Answer 2' }
 *   ]
 * }
 */

export const spicesProducts = [
  {
    id: 'chilli',
    name: 'Red Chilli Powder',
    subtitle: 'Cayenne Stemless 100g',
    price: 149,
    usdPrice: 3.49,
    image: '/images/saraj/chilli_powder.png',
    category: 'spices',
    categoryName: 'Indian Spices Powder',
    featured: true,
    description: 'Sun-dried premium whole stemless red chillies, stone-ground without adulterants or artificial colors for genuine aroma, vibrant natural color, and traditional culinary heat.',
    benefits: ['Stimulates digestive metabolism', 'Rich in natural capsaicin', 'Authentic Indian culinary aroma & color'],
    usage: 'Use as desired in curries, spice rubs, soups, and daily culinary preparations.',
    specifications: {
      usage: 'Food Spices / Culinary Preparations / Tadka',
      purity: '95% To 99%',
      productType: 'Fresh / Sun-Dried Whole Chillies',
      shape: 'Powder',
      processing: 'Stone Ground / Stemless',
      grade: 'Food Grade A+',
      shelfLife: '12 Months',
      weight: '100 Grams (g)',
      storage: 'Room Temperature in Airtight Container'
    },
    faqs: [
      {
        q: 'Is Saraj Red Chilli Powder free from added synthetic dyes and Sudan red?',
        a: 'Yes, 100%. Our red chilli powder is pure stone-ground stemless chillies with zero added colors, artificial preservatives, or chemical adulterants.'
      },
      {
        q: 'What is the spice level / heat profile of this chilli powder?',
        a: 'It offers a medium-high authentic Indian heat paired with vibrant natural red color and deep pungent aroma, ideal for daily gravies and curries.'
      },
      {
        q: 'Can restaurants and food catering businesses buy in bulk (25kg/50kg)?',
        a: 'Yes, Saraj Exim is a registered manufacturer and bulk supplier. We provide bulk 25kg/50kg bags at wholesale pricing. Contact us on WhatsApp (07971190288).'
      },
      {
        q: 'How should I preserve the freshness and color of this chilli powder?',
        a: 'Store in an airtight container away from direct sunlight and moisture. Avoid using wet spoons to keep the natural aroma fresh for up to 12 months.'
      }
    ]
  },
  {
    id: 'turmeric',
    name: 'Lakadong Turmeric Powder',
    subtitle: 'High Curcumin (7-9%) 100g',
    price: 189,
    usdPrice: 4.49,
    image: '/images/saraj/chilli_powder.png',
    category: 'spices',
    categoryName: 'Indian Spices Powder',
    featured: false,
    description: 'Grown in the pristine hills of Meghalaya, known worldwide for its extraordinary 7-9% natural curcumin content. Potent anti-inflammatory and golden healer.',
    benefits: ['Highest natural curcumin content', 'Powerful antioxidant & joint health support', 'Deep natural golden color & earthy aroma'],
    usage: 'Add 1/2 teaspoon to warm golden milk with a pinch of black pepper, or use in daily cooking.',
    specifications: {
      usage: 'Culinary Spices / Golden Milk / Ayurvedic Health',
      purity: '100% Pure Single-Origin',
      productType: 'Raw Lakadong Rhizomes',
      shape: 'Ultra-Fine Powder',
      processing: 'Traditional Stone Ground / Unpolished',
      grade: 'Therapeutic / Food Grade',
      shelfLife: '12-18 Months',
      weight: '100 Grams (g)',
      storage: 'Store in cool, dark place away from moisture'
    },
    faqs: [
      {
        q: 'What makes Lakadong Turmeric different from ordinary market turmeric?',
        a: 'Lakadong Turmeric is grown exclusively in the Jaintia Hills of Meghalaya and contains an exceptional 7% to 9% natural curcumin content, compared to only 2% to 3% in regular turmeric.'
      },
      {
        q: 'How should I take Lakadong Turmeric for maximum absorption?',
        a: 'Curcumin is fat-soluble. For best absorption, stir 1/2 teaspoon into warm milk or warm water with a dash of pure black pepper and a drop of ghee or virgin coconut oil.'
      },
      {
        q: 'Is this turmeric unpolished and lead-free?',
        a: 'Yes. Saraj Exim turmeric is strictly laboratory tested, unpolished, non-irradiated, and completely free from lead chromate or synthetic color polish.'
      },
      {
        q: 'Can I use this Lakadong Turmeric for face packs and skin glow?',
        a: 'Yes, thanks to its high antioxidant profile, you can blend a pinch with sandalwood powder and rose water or yogurt for glowing, revitalized skin.'
      }
    ]
  }
];

export default spicesProducts;

