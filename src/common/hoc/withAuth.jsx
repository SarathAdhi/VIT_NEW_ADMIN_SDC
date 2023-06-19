import { appStore } from "@utils/store";
import { useRouter } from "next/router";
import React from "react";

const withAuth = (Component) =>
  function App({ ...pageProps }) {
    const router = useRouter();
    const { isAuth } = appStore();

    if (isAuth) return <Component {...pageProps} />;
    else {
      localStorage.removeItem("token");
      router.replace("/admin");
    }
  };

withAuth.displayName = "withAuth";
export default withAuth;
