type AbortCtrl = {
  readonly signal: AbortSignal;
  abort: () => void;
};

export const fetchData = (endpoint: string, controller: AbortCtrl) => {
  return fetch((process.env.REACT_APP_BASE_URL as string) + endpoint, {
    signal: controller.signal,
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_PUBLIC_KEY as string,
    },
  });
};
