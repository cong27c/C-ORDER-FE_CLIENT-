export const APP_APIs = {
  AUTH: {
    LOGIN_FIREBASE: {
      method: "POST",
      url: "/auth/login/firebase",
    },

    LOGIN_PROVIDER: {
      method: "POST",
      url: "/auth/login/provider",
    },

    LOGOUT: {
      method: "POST",
      url: "/auth/logout",
    },

    REFRESH_TOKEN: {
      method: "POST",
      url: "/auth/refresh-token",
    },
  },
};
