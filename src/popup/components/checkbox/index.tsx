import React from 'react';
import './index.scss';

type Props = {
  isChecked: boolean;
  handleChange: () => void;
  label: String;
};

const ToggleCheckbox = ({ isChecked, handleChange, label }: Props) => {
  return (
    <div className="toggle_checkbox">
      <label className="switch">
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        <div className="slider"></div>
      </label>
      <span>{label}</span>
    </div>
  );
};

export default ToggleCheckbox;
