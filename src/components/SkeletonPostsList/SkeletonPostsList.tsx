import React from 'react';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';

import SkeletonPostItem from './SkeletonPostItem';
import { StyledGridContainer } from './styles';

type Props = {
  postsPerPage: number;
  mediaQuery: string;
  videoHeight: number;
};

const SkeletonPostsList = ({
  postsPerPage,
  mediaQuery,
  videoHeight,
}: Props) => {
  const matches = useMediaQuery(mediaQuery);

  const skeletonArray = Array(postsPerPage).fill(
    <SkeletonPostItem videoHeight={videoHeight} />
  );

  return (
    <StyledGridContainer isMobile={matches} container spacing={1}>
      {skeletonArray.map((skeletonItem, index) => {
        return (
          <Grid key={index} item>
            {skeletonItem}
          </Grid>
        );
      })}
    </StyledGridContainer>
  );
};

export default SkeletonPostsList;
