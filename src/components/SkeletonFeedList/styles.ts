import Grid, { GridProps } from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import { MobileProp } from '../../constants';

interface StyledGridContainerProps extends GridProps {
  isMobile?: boolean
}

const StyledGridContainer = styled(Grid, {
  shouldForwardProp: (prop) => prop !== MobileProp,
})<StyledGridContainerProps>(({ isMobile }) => ({
  paddingLeft: isMobile ? 10 : '30vw',
  marginTop: 50,
  marginBottom: 50,
}));

export { StyledGridContainer };
