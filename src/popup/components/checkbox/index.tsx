import React from 'react';

type Props = {
  isChecked: boolean;
  handleChange: () => void;
};
const Toggle = ({ isChecked, handleChange }: Props) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <div className="slider"></div>
    </label>
  );
};

export default Toggle;
