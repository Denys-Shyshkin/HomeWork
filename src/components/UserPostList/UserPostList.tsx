import React, { useState, MouseEvent } from 'react';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import useMediaQuery from '@mui/material/useMediaQuery';
import { SkeletonPostsList } from 'tiktuk-loading';

import UserPost from './UserPost';
import ErrorAlert from '../ErrorAlert';
import {
  MAX_POSTS,
  POSTS_PER_PAGE,
  MEDIA_QUERY,
  ErrorMessages,
} from '../../constants';
import { UserFeedList, UserFeedItem } from '../../domain/userFeedTypes';
import usePageHandler from '../../services/usePageHandler';
import { StyledGridContainer, StyledDiv } from './styles';

type Props = {
  allPosts: UserFeedList;
  isLoading: boolean;
};

const UserPostList = ({ allPosts, isLoading }: Props) => {
  const [error, setError] = useState<string | null>(null);

  const matches = useMediaQuery(MEDIA_QUERY);
  const { posts, setCurrentPage } = usePageHandler(allPosts);

  if (isLoading || !allPosts?.length) {
    return <SkeletonPostsList postsPerPage={POSTS_PER_PAGE} />;
  }

  const clickHandler = (event: MouseEvent) => {
    const clickTarget = event.target as HTMLElement;
    setCurrentPage(+clickTarget.innerText);
  };

  return (
    <div>
      {error && <ErrorAlert message={ErrorMessages.VideoError} />}
      <StyledGridContainer isMobile={matches} container spacing={1}>
        {(posts as UserFeedList).map((userPost: UserFeedItem) => {
          return (
            <Grid key={userPost.id} item>
              <UserPost data={userPost} error={error} setError={setError} />
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

export default UserPostList;
