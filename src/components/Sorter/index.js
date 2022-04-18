import React from 'react';
import PropTypes from 'prop-types';

export default function Sorter({ onChange, value }) {
  return (
    <label>
      Sort by&nbsp;
      <select
        data-testid="sorter"
        onChange={e => onChange(e.target.value)}
        value={value}
      >
        <option>title</option>
        <option>author</option>
      </select>
    </label>
  );
}

Sorter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
