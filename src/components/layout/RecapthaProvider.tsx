"use client";
import React from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

type Props = {
  children: React.ReactNode;
};

const RecapthaProvider = ({ children }: Props) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
};

export default RecapthaProvider;
