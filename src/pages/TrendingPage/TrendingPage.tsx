import React from 'react';
import { SkeletonFeedList } from 'tiktuk-loading';

import FeedPostList from '../../components/FeedPostsList';
import { renderErrorAlert } from '../../components/ErrorAlert/ErrorAlert';
import { TrendingFeedList, ErrorObject } from '../../domain/trendingFeedTypes';
import { Endpoint } from '../../api/constants';
import { useFetch } from '../../api/useFetch';
import { POSTS_PER_PAGE } from '../../constants';

const TrendingPage = () => {
  const { data: posts, isLoading, isError } = useFetch(Endpoint.TrendingFeed);

  if (isLoading) {
    return <SkeletonFeedList postsPerPage={POSTS_PER_PAGE} />;
  }

  if (!Array.isArray(posts) || isError) {
    return renderErrorAlert(posts as ErrorObject);
  }

  return <FeedPostList allPosts={posts as TrendingFeedList} />;
};

export default TrendingPage;
