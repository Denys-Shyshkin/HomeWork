import React from 'react';

import FeedPostList from '../../components/FeedPostsList';
import SkeletonFeedList from '../../components/SkeletonFeedList';
import { renderErrorAlert } from '../../components/ErrorAlert/ErrorAlert';
import { TrendingFeedList, ErrorObject } from '../../types/trendingFeedTypes';
import { Endpoint } from '../../api/constants';
import { useFetch } from '../../hooks/useFetch';

const TrendingPage = () => {
  const { data: posts, isLoading, isError } = useFetch(Endpoint.TrendingFeed);

  if (isLoading) {
    return <SkeletonFeedList />;
  }

  if (!Array.isArray(posts) || isError) {
    return renderErrorAlert(posts as ErrorObject);
  }

  return <FeedPostList allPosts={posts as TrendingFeedList} />;
};

export default TrendingPage;
