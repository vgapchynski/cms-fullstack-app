import { AxiosResponse } from "axios";
import * as D from "duck";
import { QueryKey, UseQueryOptions, useQuery } from "react-query";

const useMeQuery = (options?: UseQueryOptions<AxiosResponse<D.User>>) =>
  useQuery({
    ...options,
    queryKey: "me" as QueryKey,
  });

export default useMeQuery;
