import { claimSPSAction } from '@popup/reducers/claimSps.types';
import { Actions } from './types';

export const toggleClaimSPS = (): claimSPSAction => {
  return {
    type: Actions.CLAIM_SPS,
  };
};
