import { PRIVATE_ROUTE } from './private';
import { PUBLIC_ROUTE } from './public';

export const ROUTE = {
  ...PUBLIC_ROUTE,
  ...PRIVATE_ROUTE,
};
