import { Actions } from '@popup/actions/types';
import { claimSPS, claimSPSAction } from './claimSps.types';

export default (state: claimSPS = false, { type }: claimSPSAction) => {
  switch (type) {
    case Actions.CLAIM_SPS:
      return !state;
    default:
      return state;
  }
};
