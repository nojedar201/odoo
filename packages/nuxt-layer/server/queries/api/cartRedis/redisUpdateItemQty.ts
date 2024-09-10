/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Context } from '@vue-storefront/core';
import { Logger } from 'winston';
import { populateCartRedis } from './helper';
import cartUpdateItemQty from '../cartUpdateItemQty';

export default async function redisUpdateItemQty(context: Context, orderId: number, quantity: 1, odooOrderLineId?: number): Promise<any> {
  const logger : Logger = (process as any).winstonLog;

  if (!orderId) {
    logger.warn('Missing order id');
    return { data: context.req.session.cart, error: 'Missing order id' };
  }

  const previousAddedItem = context.req.session.cart.orderLines?.find(item => item.id === orderId);

  if (previousAddedItem) {
    previousAddedItem.quantity = quantity;

    populateCartRedis(context.req.session.cart);

    if (odooOrderLineId) {
      await cartUpdateItemQty(context, { lineId: odooOrderLineId, quantity });
    }

    return { data: context.req.session.cart };
  }

  logger.warn(`Order Item not found for id ${orderId}`);
  return { data: context.req.session.cart, error: `Order Item not found for id ${orderId}` };
}
