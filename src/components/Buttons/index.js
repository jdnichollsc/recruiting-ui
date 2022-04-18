import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import { TextButton, Button } from './styles';

const SaveButton = ({ saved, onSave, onRemove, className }) => {
  const [state, setState] = useState(saved);
  return state ? (
    <TextButton
      data-testid="remove-button"
      className={className}
      onClick={() => {
        onRemove();
        setState(false);
      }}
    >
      <Icon icon="check" /> Saved to List
    </TextButton>
  ) : (
    <Button
      data-testid="save-button"
      className={className}
      onClick={() => {
        onSave();
        setState(true);
      }}
    >
      <Icon icon="plus" /> Save to list
    </Button>
  );
};

SaveButton.propTypes = {
  saved: PropTypes.bool,
  onSave: PropTypes.func,
  onRemove: PropTypes.func,
  className: PropTypes.string,
};

export { SaveButton, Button };
