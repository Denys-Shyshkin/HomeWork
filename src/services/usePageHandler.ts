import React, { useState, useEffect } from 'react';
import { MAX_POSTS, POSTS_PER_PAGE } from '../constants';
import { TrendingFeedList } from '../domain/trendingFeedTypes';
import { UserFeedList } from '../domain/userFeedTypes';

type PageList = TrendingFeedList | UserFeedList;

type PageData = {
  posts: PageList;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const usePageHandler = (allPosts: PageList): PageData => {
  const displayedPosts = allPosts?.slice(0, MAX_POSTS);

  const [currentPage, setCurrentPage] = useState(1);
  const lastPostIndex = currentPage * POSTS_PER_PAGE;
  const firstPostindex = lastPostIndex - POSTS_PER_PAGE;
  const postsOnPage = displayedPosts?.slice(firstPostindex, lastPostIndex);
  const [posts, setPosts] = useState(postsOnPage);

  useEffect(() => {
    setPosts(postsOnPage);
    window.scrollTo(0, 0);
  }, [allPosts, currentPage]);

  return { posts, setCurrentPage };
};

export default usePageHandler;
