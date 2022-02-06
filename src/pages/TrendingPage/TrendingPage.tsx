import React from 'react';
import { SkeletonFeedList } from 'tiktuk-skeleton-loading';

import FeedPostList from '../../components/FeedPostsList';
import { renderErrorAlert } from '../../components/ErrorAlert/ErrorAlert';
import { TrendingFeedList, ErrorObject } from '../../domain/trendingFeedTypes';
import { Endpoint } from '../../api/constants';
import { useFetch } from '../../api/useFetch';
import { MEDIA_QUERY, POSTS_PER_PAGE, VIDEO_HEIGHT } from '../../constants';

const TrendingPage = () => {
  const { data: posts, isLoading, isError } = useFetch(Endpoint.TrendingFeed);

  if (isLoading) {
    return (
      <SkeletonFeedList
        postsPerPage={POSTS_PER_PAGE}
        mediaQuery={MEDIA_QUERY}
        videoHeight={+VIDEO_HEIGHT}
      />
    );
  }

  if (!Array.isArray(posts) || isError) {
    return renderErrorAlert(posts as ErrorObject);
  }

  return <FeedPostList allPosts={posts as TrendingFeedList} />;
};

export default TrendingPage;
