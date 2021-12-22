import Grid, { GridProps } from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import { isMobile } from '../../constants';

interface StyledGridContainerProps extends GridProps {
  isMobile?: boolean
}

const StyledGridContainer = styled(Grid, {
  shouldForwardProp: (prop) => prop !== isMobile,
})<StyledGridContainerProps>(({ isMobile }) => ({
  marginTop: 50,
  marginBottom: 50,
  width: isMobile ? 230 : 700,
  marginLeft: 'auto',
  marginRight: 'auto',
}));

const StyledDiv = styled('div')(() => ({
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: 20,
}));

export { StyledGridContainer, StyledDiv };
