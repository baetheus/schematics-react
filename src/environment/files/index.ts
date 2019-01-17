import { Environment } from './environment';
import { env as production } from './production.env';
import { env as development } from './development.env';
import { env as mock } from './mock.env';

/* prettier-ignore */
export const environment: Environment =
  process.env.NODE_ENV === 'production' ? production :
  process.env.NODE_ENV === 'mock' ? mock :
  development;
