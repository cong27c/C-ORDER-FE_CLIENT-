"use client";

import { useEffect, useRef, useState } from "react";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  ConfirmationResult,
} from "firebase/auth";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { firebaseAuth } from "@/core/config/firebase.client";
import { useAuth } from "./useAuth";
import { useToast } from "@/core/hooks/useToast";

export function AuthForm() {
  const { loginWithFirebase, loading } = useAuth();
  const { success, error } = useToast();

  const [step, setStep] = useState<"PHONE" | "OTP">("PHONE");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const confirmationResultRef = useRef<ConfirmationResult | null>(null);
  const recaptchaRef = useRef<RecaptchaVerifier | null>(null);

  /* ================= INIT RECAPTCHA ================= */

  useEffect(() => {
    if (!recaptchaRef.current) {
      recaptchaRef.current = new RecaptchaVerifier(
        firebaseAuth,
        "recaptcha-container",
        {
          size: "invisible",
        }
      );
    }

    return () => {
      recaptchaRef.current?.clear();
      recaptchaRef.current = null;
    };
  }, []);

  /* ================= REQUEST OTP ================= */

  const handleSendOtp = async () => {
    try {
      if (!recaptchaRef.current) return;

      const result = await signInWithPhoneNumber(
        firebaseAuth,
        phone,
        recaptchaRef.current
      );

      confirmationResultRef.current = result;
      setStep("OTP");

      success("OTP đã được gửi", "Vui lòng kiểm tra tin nhắn");
    } catch (err: any) {
      error("Không thể gửi OTP", err.message);
    }
  };

  /* ================= VERIFY OTP ================= */

  const handleVerifyOtp = async () => {
    try {
      if (!confirmationResultRef.current) return;

      const credential = await confirmationResultRef.current.confirm(otp);
      const idToken = await credential.user.getIdToken();

      const result = await loginWithFirebase(idToken);

      success("Đăng nhập thành công", "Chào mừng bạn 🎉");

      // TODO: lưu accessToken / refreshToken
      // result.accessToken
      // result.refreshToken
    } catch (err: any) {
      error("OTP không hợp lệ", err.message);
    }
  };

  return (
    <div className="space-y-6">
      {/* Firebase Recaptcha */}
      <div id="recaptcha-container" />

      {step === "PHONE" && (
        <>
          <div className="space-y-2">
            <Label>Số điện thoại</Label>
            <Input
              placeholder="+84xxxxxxxxx"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <Button
            className="w-full cursor-pointer"
            onClick={handleSendOtp}
            disabled={loading}
          >
            Gửi mã OTP
          </Button>
        </>
      )}

      {step === "OTP" && (
        <>
          <p className="text-sm text-muted-foreground">
            Mã OTP đã được gửi tới <b>{phone}</b>
          </p>

          <Input
            placeholder="Nhập mã OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <Button
            className="w-full cursor-pointer"
            onClick={handleVerifyOtp}
            disabled={loading}
          >
            Xác nhận
          </Button>
        </>
      )}
    </div>
  );
}
