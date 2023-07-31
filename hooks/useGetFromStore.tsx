import { useEffect, useState } from "react";

const useGetFromStore = (store: Function, callback: Function) => {
  const result = store(callback);
  const [state, setState] = useState();

  useEffect(() => {
    setState(result);
  }, [result]);

  return state;
};

export default useGetFromStore;
