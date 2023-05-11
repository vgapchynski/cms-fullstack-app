import * as D from "duck";
import { QueryClient, QueryFunctionContext } from "react-query";

const defaultQueryFn = async ({ queryKey }: QueryFunctionContext) => {
  const { data } = await D.axios.get(`${queryKey[0]}`);
  return data;
};

export const QUERY_CLIENT = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});
