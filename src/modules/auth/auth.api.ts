import { APP_APIs } from "@/core/constants/api.constants";
import type { THttpMethod } from "@/core/types";
import { sendRequest } from "@/core/http/_sendRequest";

/* ======================= AUTH API ======================= */

export const authApi = {
  loginWithFirebase: (idToken: string) => {
    const { method, url } = APP_APIs.AUTH.LOGIN_FIREBASE;

    return sendRequest<{
      accessToken: string;
      refreshToken: string;
    }>(method as THttpMethod, url, {
      data: { idToken },
    });
  },

  loginWithProvider: (data: {
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
  },

  refreshToken: (refreshToken: string) => {
    const { method, url } = APP_APIs.AUTH.REFRESH_TOKEN;

    return sendRequest<{
      accessToken: string;
      refreshToken: string;
    }>(method as THttpMethod, url, {
      data: { refreshToken },
    });
  },

  logout: (refreshToken: string) => {
    const { method, url } = APP_APIs.AUTH.LOGOUT;

    return sendRequest<void>(method as THttpMethod, url, {
      data: { refreshToken },
    });
  },
};
