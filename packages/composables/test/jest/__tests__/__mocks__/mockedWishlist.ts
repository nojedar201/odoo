import { Wishlist} from '@vue-storefront/odoo-api/src/types/types';
import { mockedProducts } from './mockedProducts';
export const mockedWishlist: Wishlist = {
  wishlistItems: [
    {
      id: 1,
      product: mockedProducts[0]
    },
    {
      id: 2,
      product: mockedProducts[1]
    }
  ]
};
