/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { RegisterPayload, RegisterResponse, LoginPayload, LoginResponse } from "@/app/auth/interface";
import { axiosClient } from "@/lib/axiosClient";
import { useRouter } from "next/navigation";
import { useToast } from "@/hook/useToast";
import { use } from "react";
 
export const useAuthModule = () => {
  const { toastError, toastSuccess, toastWarning } = useToast();
  const router = useRouter();
  const register = async (
    payload: RegisterPayload
  ): Promise<RegisterResponse> => {
    return axiosClient.post("/auth/register", payload).then((res) => res.data);
  };
 
  const useRegister = () => {
    const { mutate, isPending: isLoading } = useMutation<RegisterResponse, Error, RegisterPayload>(
    //   (payload: RegisterPayload) => register(payload),
      {
        mutationFn: (payload: RegisterPayload) => register(payload),
        onSuccess: (response: RegisterResponse) => {
          toastSuccess(response.message);
          router.push("/auth/login");
        },
        onError: () => {
          toastError();
        },
      }
    );
    return { mutate, ispending: isLoading };
  };

  const login = async (payload: LoginPayload): Promise<LoginResponse> => {
    return axiosClient.post("/auth/login", payload).then((res) => res.data);
  };
 
  const useLogin = () => {
    const { mutate, isPending: isLoading } = useMutation(
    //   (payload: LoginPayload) => login(payload),
      {
        mutationFn: (payload: LoginPayload) => login(payload),
        onSuccess: async (response: { message: string; }) => {
          toastSuccess(response.message);
          router.push("/admin");
        },
        onError: (error: any) => {
          if (error.response.status == 422) {
            toastWarning(error.response.data.message);
          } else {
            toastError();
          }
        },
      }
    );
    return { mutate, isLoading };
  };
 
  return { useRegister, useLogin };
};

export default useAuthModule;