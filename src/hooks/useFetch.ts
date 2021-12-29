import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchData } from '../api';
import { currentUser, Endpoint } from '../api/constants';
import { TrendingFeedList, ErrorObject } from '../types/trendingFeedTypes';
import { UserInfo } from '../types/userInfoTypes';
import { UserFeedList } from '../types/userFeedTypes';

type DataType = TrendingFeedList | UserInfo | UserFeedList | ErrorObject;

export const useFetch = (endpoint: string) => {
  const [data, setData] = useState<DataType>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const params = useParams();
  const chosenUser = params.uniqueId;
  const user = chosenUser || currentUser;

  let adjustedEndpoint = endpoint;
  const dependancyArray = [];
  const userFeed = require('../user-feed.json');

  const resultCheck = (result: DataType) => {
    if (endpoint === Endpoint.UserFeed && !Array.isArray(result)) {
      setData(userFeed.itemList);
    } else {
      setData(result);
    }
  };

  if (endpoint === Endpoint.UserFeed || endpoint === Endpoint.UserInfo) {
    adjustedEndpoint += user;
    dependancyArray.push(user);
  }

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    fetchData(adjustedEndpoint, controller)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setIsLoading(false);
        resultCheck(result);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
    return () => controller.abort();
  }, dependancyArray);

  return { data, isLoading, isError };
};
