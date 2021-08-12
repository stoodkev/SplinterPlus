import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { toggleClaimSPS } from './actions';
import './App.scss';
import ToggleCheckbox from './components/checkbox';
import { RootState } from './store';

const App = ({ toggleClaimSPS, shouldClaimSps }: PropsFromRedux) => {
  return (
    <div className="App">
      <div id="title">
        <img src="/assets/img/icon.png" />
        <span id="text">
          Splinter<span id="plus">Plus</span>
        </span>
      </div>
      <ToggleCheckbox
        isChecked={shouldClaimSps}
        handleChange={toggleClaimSPS}
        label="Claim SPS"
      />
    </div>
  );
};
const mapStateToProps = (state: RootState) => ({
  shouldClaimSps: state.shouldClaimSps,
});
const connector = connect(mapStateToProps, { toggleClaimSPS });
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(App);
