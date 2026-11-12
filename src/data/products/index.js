/**
 * ============================================================================
 * SARAJ EXIM - CENTRAL PRODUCTS REGISTRY
 * ============================================================================
 * This master registry aggregates all products from their dedicated category
 * folders. To add, edit, or remove products, simply edit the corresponding
 * category file in its own folder:
 *
 *  - Spices:             src/data/products/spices/products.js
 *  - Flower Powder:      src/data/products/flower/products.js
 *  - Fruit & Veg:        src/data/products/fruit_veg/products.js
 *  - Herbal Powder:      src/data/products/herbal/products.js
 *  - Walnut Shell:       src/data/products/walnut_shell/products.js
 *  - Cow Dung Powder:    src/data/products/cow_dung/products.js
 *  - Indian Pickle:      src/data/products/pickle/products.js
 *  - Edible Oils:        src/data/products/edible_oils/products.js
 * ============================================================================
 */

import { spicesProducts } from './spices/products';
import { flowerProducts } from './flower/products';
import { fruitVegProducts } from './fruit_veg/products';
import { herbalProducts } from './herbal/products';
import { walnutShellProducts } from './walnut_shell/products';
import { cowDungProducts } from './cow_dung/products';
import { pickleProducts } from './pickle/products';
import { edibleOilsProducts } from './edible_oils/products';

// Export individual category product arrays
export {
  spicesProducts,
  flowerProducts,
  fruitVegProducts,
  herbalProducts,
  walnutShellProducts,
  cowDungProducts,
  pickleProducts,
  edibleOilsProducts
};

// All Categories Definition
export const PRODUCT_CATEGORIES = [
  { id: 'spices', name: 'Indian Spices Powder', description: 'Sun-dried, authentic stone-ground Indian spices with no artificial colors or additives.' },
  { id: 'flower', name: 'Flower Powder', description: 'Pure dried botanical flower powders for natural beauty, herbal teas, and skincare therapy.' },
  { id: 'fruit_veg', name: 'Fruit and Vegetable Powder', description: 'Nutrient-dense dehydrated fruits and superfood vegetable powders rich in vital enzymes.' },
  { id: 'herbal', name: 'Herbal Powder', description: '100% pure single-origin Ayurvedic herbs harvested and ground according to traditional Vedic methods.' },
  { id: 'walnut_shell', name: 'Walnut Shell Powder', description: 'Natural cosmetic grade exfoliating granules free from microplastics for radiant skin.' },
  { id: 'cow_dung', name: 'Cow Dung Powder', description: 'Purified sun-dried Desi Gir cow dung powder for sacred Vedic havans, organic farming & dhoop.' },
  { id: 'pickle', name: 'Indian Pickle', description: 'Traditional homemade Indian pickles matured in cold-pressed mustard oil with heritage recipes.' },
  { id: 'edible_oils', name: 'Edible Oils', description: '100% pure cold-pressed (Kachi Ghani / wood-pressed) edible cooking oils preserving vital nutrients.' }
];

export const CATEGORIES = [
  { id: 'spices', name: 'Indian Spices Powder', image: '/images/category/spices_powder.png', count: '100% Pure' },
  { id: 'flower', name: 'Flower Powder', image: '/images/category/flower_powder.png', count: 'Damask Grade' },
  { id: 'fruit_veg', name: 'Fruit & Veg Powder', image: '/images/category/fruit_veg_powder.png', count: 'Vitamin Rich' },
  { id: 'herbal', name: 'Herbal Powder', image: '/images/category/herbel_powder.png', count: 'Ayurvedic' },
  { id: 'walnut_shell', name: 'Walnut Shell Powder', image: '/images/category/shell_powder.png', count: 'Bio Exfoliant' },
  { id: 'cow_dung', name: 'Cow Dung Powder', image: '/images/category/cow_dung_powder.png', count: 'Vedic Pure' },
  { id: 'pickle', name: 'Indian Pickle', image: '/images/category/india_pickle.png', count: 'Cold Pressed Oil' },
  { id: 'edible_oils', name: 'Edible Oils', image: '/images/category/edible_oil.png', count: 'Wood Churned' }
];

// Unified catalog combining all category products
export const ALL_PRODUCTS = [
  ...herbalProducts,
  ...flowerProducts,
  ...spicesProducts,
  ...fruitVegProducts,
  ...walnutShellProducts,
  ...cowDungProducts,
  ...pickleProducts,
  ...edibleOilsProducts
];

// Default alias for backwards compatibility
export const SARAJ_PRODUCTS = ALL_PRODUCTS;

export default ALL_PRODUCTS;

