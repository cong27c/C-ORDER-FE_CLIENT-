"use server";

import { APP_APIs } from "@/core/constants/api.constants";
import type { THttpMethod } from "@/core/types";
import { sendRequest } from "./_sendRequest";

/* ======================= AUTH ======================= */

export const loginWithFirebase = async (idToken: string) => {
  const { method, url } = APP_APIs.AUTH.LOGIN_FIREBASE;

  return sendRequest<{
    accessToken: string;
    refreshToken: string;
  }>(method as THttpMethod, url, {
    data: { idToken },
  });
};

export const loginWithProvider = async (data: {
  provider: "GOOGLE" | "FACEBOOK";
  providerId: string;
  profile: {
    email?: string;
    fullName?: string;
  };
}) => {
  const { method, url } = APP_APIs.AUTH.LOGIN_PROVIDER;

  return sendRequest<{
    accessToken: string;
    refreshToken: string;
  }>(method as THttpMethod, url, {
    data,
  });
};

export const refreshToken = async (refreshToken: string) => {
  const { method, url } = APP_APIs.AUTH.REFRESH_TOKEN;

  return sendRequest<{
    accessToken: string;
    refreshToken: string;
  }>(method as THttpMethod, url, {
    data: { refreshToken },
  });
};

export const logout = async (refreshToken: string) => {
  const { method, url } = APP_APIs.AUTH.LOGOUT;

  return sendRequest<void>(method as THttpMethod, url, {
    data: { refreshToken },
  });
};
