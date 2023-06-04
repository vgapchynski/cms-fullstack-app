import { AxiosError, AxiosResponse } from "axios";
import * as D from "duck";
import { UseMutationOptions, useMutation } from "react-query";

const useSignUpMutation = (
  options?: UseMutationOptions<
    AxiosResponse<{
      _id: string;
      email: string;
    }>,
    AxiosError<D.ApiResponseErrors>,
    { email: string; password: string }
  >
) => {
  return useMutation({
    ...options,
    mutationKey: "sign-up",
    mutationFn: async (variables) => await D.axios.post("sign-up", variables),
  });
};
export default useSignUpMutation;
