import { env as dev } from './dev.env';
import { env as mock } from './mock.env';
import { env as prod } from './prod.env';
import { Environment } from './environment';

const getEnv = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return prod;
    case 'development':
      return dev;
    case 'mock':
    default:
      return mock;
  }
};

export const environment: Environment = getEnv();
