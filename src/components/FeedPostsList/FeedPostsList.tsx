import React, { useState, MouseEvent } from 'react';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import useMediaQuery from '@mui/material/useMediaQuery';

import FeedPost from './FeedPost';
import ErrorAlert from '../ErrorAlert';
import {
  MAX_POSTS,
  POSTS_PER_PAGE,
  MEDIA_QUERY,
  ErrorMessages,
} from '../../constants';
import { TrendingFeedList, FeedPostItem } from '../../domain/trendingFeedTypes';
import usePageHandler from '../../services/usePageHandler';
import { StyledGridContainer, StyledDiv } from './styles';

type Props = {
  allPosts: TrendingFeedList;
};

const FeedPostsList = ({ allPosts }: Props) => {
  const [error, setError] = useState<string | null>(null);

  const matches = useMediaQuery(MEDIA_QUERY);
  const { posts, setCurrentPage } = usePageHandler(allPosts);

  const clickHandler = (event: MouseEvent) => {
    const clickTarget = event.target as HTMLElement;
    setCurrentPage(+clickTarget.innerText);
  };

  return (
    <div>
      {error && <ErrorAlert message={ErrorMessages.VideoError} />}
      <StyledGridContainer isMobile={matches} container spacing={6}>
        {(posts as TrendingFeedList).map((post: FeedPostItem) => {
          return (
            <Grid key={post.id} item xs={12}>
              <FeedPost data={post} error={error} setError={setError} />
            </Grid>
          );
        })}
      </StyledGridContainer>
      <StyledDiv>
        <Pagination
          count={MAX_POSTS / POSTS_PER_PAGE}
          onClick={(event) => clickHandler(event)}
        />
      </StyledDiv>
    </div>
  );
};

export default FeedPostsList;
