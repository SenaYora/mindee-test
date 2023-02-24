import React from 'react';
import { Grid } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

export interface CenteredProps {
  /**
   * Custom style?
   */
  sx?: SxProps<Theme>;

  /**
   * children?
   */
  children: React.ReactNode;
}

/**
 * Component that display any element in the center of the screen
 */
const Centered: React.FC<CenteredProps> = ({ children, sx }) => (
  <Grid
    container
    justifyContent="center"
    direction="column"
    alignItems="center"
    sx={{ height: '100vh', ...sx }}
    data-testid="centered"
  >
    {children}
  </Grid>
);

Centered.defaultProps = {
  sx: [],
};

export default Centered;
