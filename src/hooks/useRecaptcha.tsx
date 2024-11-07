import React, { useEffect } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const useRecaptcha = (key?: string) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [error, setError] = React.useState<string | null>(null);

  const execute = async () => {
    try {
      if (!executeRecaptcha) {
        console.log("not available to execute recaptcha");
        return;
      }

      const token = await executeRecaptcha(key || "recaptcha-action");

      console.log("token:", token);

      const res = await fetch("/api/recaptchaSubmit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gRecaptchaToken: token }),
      });

      console.log(res);
    } catch (error) {
      console.error(error);
      setError("error");
    }
  };

  return { execute, error };
};

export default useRecaptcha;
