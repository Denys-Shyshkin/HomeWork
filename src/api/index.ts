type AbortCtrl = {
  readonly signal: AbortSignal;
  abort: () => void;
};

export const fetchData = (
  endpoint: string,
  controller: AbortCtrl,
  setIsLoading: (a: boolean) => void,
  setData: (a: any) => void,
  setIsError: (a: boolean) => void
) => {
  setIsLoading(true);
  fetch((process.env.REACT_APP_BASE_URL as string) + endpoint, {
    signal: controller.signal,
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_PUBLIC_KEY as string,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setIsLoading(false);
      setData(data);
    })
    .catch(() => {
      setIsLoading(false);
      setIsError(true);
    });
};
