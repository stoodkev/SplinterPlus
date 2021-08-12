import { combineReducers } from 'redux';
import claimSps from './claimSps';

export default combineReducers({
  shouldClaimSps: claimSps,
});
