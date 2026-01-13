"use client";

import { useState } from "react";
import { authApi } from "./auth.api";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* ================= FIREBASE ================= */

  const loginWithFirebase = async (idToken: string) => {
    try {
      setLoading(true);
      setError(null);
      return await authApi.loginWithFirebase(idToken);
    } catch (err: any) {
      setError(err.message ?? "Đăng nhập thất bại");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /* ================= OAUTH ================= */

  const loginWithProvider = async (data: {
    provider: "GOOGLE" | "FACEBOOK";
    providerId: string;
    profile: {
      email?: string;
      fullName?: string;
    };
  }) => {
    try {
      setLoading(true);
      setError(null);
      return await authApi.loginWithProvider(data);
    } catch (err: any) {
      setError(err.message ?? "Đăng nhập OAuth thất bại");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /* ================= SESSION ================= */

  const logout = async (refreshToken: string) => {
    try {
      setLoading(true);
      await authApi.logout(refreshToken);
    } finally {
      setLoading(false);
    }
  };

  return {
    loginWithFirebase,
    loginWithProvider,
    logout,
    loading,
    error,
  };
}
