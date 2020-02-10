import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { FormControl } from '@material-ui/core';

const Top = () => {
  const [state, setState] = React.useState({
    checked: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <Container fixed>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checked}
              onChange={handleChange('checkedA')}
              value="checkedB"
              color="primary"
            />
          }
          label="Primary"
        />
      </FormGroup>
    </Container>
  )
}
export default Top;