import { AxiosError, AxiosResponse } from "axios";
import * as D from "duck";
import { UseMutationOptions, useMutation } from "react-query";

const useSignInMutation = (
  options?: UseMutationOptions<
    AxiosResponse<{
      token: string;
    }>,
    AxiosError<D.ApiResponseErrors>,
    { email: string; password: string }
  >
) => {
  return useMutation({
    ...options,
    mutationKey: "sign-in",
    mutationFn: async (variables) => await D.axios.post("sign-in", variables),
  });
};
export default useSignInMutation;
