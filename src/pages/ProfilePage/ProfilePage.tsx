import React from 'react';

import UserCard from '../../components/UserCard';
import UserPostList from '../../components/UserPostList';
import ErrorAlert, {
  renderErrorAlert,
} from '../../components/ErrorAlert/ErrorAlert';
import { ErrorMessages } from '../../constants';
import { UserInfo } from '../../types/userInfoTypes';
import { UserFeedList } from '../../types/userFeedTypes';
import { ErrorObject } from '../../types/trendingFeedTypes';
import { Endpoint } from '../../api/constants';
import { useFetch } from '../../hooks/useFetch';

const ProfilePage = () => {
  const {
    data: userPosts,
    isLoading: postsIsLoading,
    isError: postsIsError,
  } = useFetch(Endpoint.UserFeed);

  const {
    data: profile,
    isLoading: profileIsLoading,
    isError: profileIsError,
  } = useFetch(Endpoint.UserInfo);

  const definedError =
    profile && Object.keys(profile as ErrorObject).includes('message');

  const wrongPageError =
    profile && Object.keys(profile as ErrorObject).length === 0;

  const error = definedError || postsIsError || profileIsError;

  if (error) {
    return renderErrorAlert(profile as ErrorObject);
  }

  if (wrongPageError && !profileIsLoading) {
    return <ErrorAlert message={ErrorMessages.WrongPage} />;
  }

  return (
    <div>
      <UserCard profile={profile as UserInfo} isLoading={profileIsLoading} />
      <UserPostList
        data={userPosts as UserFeedList}
        isLoading={postsIsLoading}
      />
    </div>
  );
};

export default ProfilePage;
