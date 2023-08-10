import { ApolloQueryResult, FetchResult } from '@apollo/client';
import { OdooIntegrationContext } from '..';
import { Product, Category, QueryProductArgs, QueryCountryArgs, QueryProductsArgs, QueryCategoryArgs, QueryCategoriesArgs, QueryProductVariantArgs, ProductVariant, Countries,
  MutationCartAddItemArgs,
  Order,
  CartData,
  MutationCartRemoveItemArgs,
 } from '../../gql/graphql';
import { CustomQuery } from '@vue-storefront/middleware';
/**
 * Definition of all API-client methods available in {@link https://docs.vuestorefront.io/v2/advanced/context.html#context-api | context}.
 */
export interface Endpoints {

  /**
   * Here you can find an example endpoint definition. Based on this example, you should define how your endpoint will look like.
   * This description will appear in the API extractor, so try to document all endpoints added here.
   */
  getProductTemplate(context: OdooIntegrationContext, params: QueryProductArgs, customQuery?: CustomQuery<'getProductTemplate'>): Promise<ApolloQueryResult<{ product: Product }>>;
  getProductTemplateList(context: OdooIntegrationContext, params?: QueryProductsArgs, customQuery?: CustomQuery<'getProductTemplateList'>): Promise<ApolloQueryResult<{ products: { products: Product[] } }>>;
  getProductVariant(context: OdooIntegrationContext, params: QueryProductVariantArgs, customQuery?: CustomQuery<'getProductVariant'>): Promise<ApolloQueryResult<{ product: ProductVariant }>>;

  getCategory(context: OdooIntegrationContext, params: QueryCategoryArgs, customQuery?: CustomQuery<'getCategory'>): Promise<ApolloQueryResult<{ category: Category }>>;
  getCategoryList(context: OdooIntegrationContext, params?: QueryCategoriesArgs, customQuery?: CustomQuery<'getCategoryList'>): Promise<ApolloQueryResult<{ categories: { categories: Category[] } }>>;
  
  cartRemove(context: OdooIntegrationContext, params: MutationCartRemoveItemArgs, customQuery?: CustomQuery<'cartRemove'>): Promise<FetchResult<{ cartRemoveItem: { order: Order } }>>;
  cartAdd(context: OdooIntegrationContext, params: MutationCartAddItemArgs, customQuery?: CustomQuery<'cartAdd'>): Promise<FetchResult<{ cartAddItem: { order: Order } }>>;
  cartLoad(context: OdooIntegrationContext, customQuery?: CustomQuery<'cartLoad'>): Promise<ApolloQueryResult<{ cart: CartData }>>;
  getCountries(context: OdooIntegrationContext, params?: QueryCountryArgs, customQuery?: CustomQuery<'getCountries'>): Promise<ApolloQueryResult<{ countries: Countries }>>;

}
