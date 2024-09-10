import buildClient from './setup/clientSetup';
import { apiClientFactory } from '@vue-storefront/middleware';
import { MiddlewareConfig } from './index';
import sessionHeaderExtension from './extensions/sessionHeaderExtension ';
import * as apiEndpoints from './api';

const onCreate = (settings: MiddlewareConfig) => {
  const client = buildClient(settings);

  return {
    config: settings,
    client
  };
};

const { createApiClient } = apiClientFactory({
  onCreate,
  api: apiEndpoints,
  extensions: [
    sessionHeaderExtension
  ]
});

export { createApiClient };
