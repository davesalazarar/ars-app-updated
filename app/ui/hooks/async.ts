import {useEffect, useState} from 'react';

export const useAsync = (
  asyncFn: () => Promise<any>,
  successFunction: Function,
  returnFunction: Function,
  dependencies: any[] = [],
) => {
  useEffect(() => {
    let isActive = true;
    asyncFn().then(result => {
      if (isActive) {
        successFunction(result);
      }
    });
    return () => {
      returnFunction && returnFunction();
      isActive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};

export const useFetchAndLoad = () => {
  const [loading, setLoading] = useState(false);
  const controller = new AbortController();

  const callEndpoint = async (promise: Promise<any>) => {
    setLoading(true);
    let result = {} as Promise<any>;
    try {
      result = await promise;
      controller.signal.addEventListener('abort', () => {
        Promise.reject();
      });
    } catch (err: any) {
      setLoading(false);
      throw err;
    }
    setLoading(false);
    return result;
  };

  const cancelEndpoint = () => {
    setLoading(false);
    controller && controller.abort();
  };

  useEffect(() => {
    return () => {
      cancelEndpoint();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {loading, callEndpoint};
};
