type AbortCtrl = {
  readonly signal: AbortSignal;
  abort: () => void;
};

export const fetchData = (endpoint: string, controller: AbortCtrl) => {
  return fetch((process.env.REACT_APP_BASE_URL as string) + endpoint, {
    signal: controller.signal,
    method: 'GET',
    headers: {
      'x-rapidapi-host': process.env.REACT_APP_BASE_URL as string,
      'x-rapidapi-key': process.env.REACT_APP_PUBLIC_KEY as string,
    },
  });
};
