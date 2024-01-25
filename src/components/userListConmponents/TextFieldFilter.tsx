import React from 'react';
import { Grid, TextField, MenuItem } from '@mui/material';

interface TextFieldFilterProps {
  value: string;
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  classes: {
    textFieldRoot: string;
    textFieldInput: string;
    textFieldLabel: string;
    textFieldLabelFocused: string;
  };
}

const TextFieldFilter: React.FC<TextFieldFilterProps> = ({ value, onChange, classes }) => (
  <Grid container spacing={2} justifyContent="center">
    <Grid item xs={12} sm={6}>
      <TextField
        label="Gender"
        select
        fullWidth
        value={value}
        onChange={onChange}
        InputProps={{
          classes: {
            root: classes.textFieldRoot,
            input: classes.textFieldInput,
          },
        }}
        InputLabelProps={{
          classes: {
            root: classes.textFieldLabel,
            focused: classes.textFieldLabelFocused,
          },
        }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
      </TextField>
    </Grid>
  </Grid>
);

export default TextFieldFilter;
