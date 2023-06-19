import { appStore } from "@utils/store";
import { useRouter } from "next/router";
import React from "react";

const withAdmin = (Component) =>
  function App({ ...pageProps }) {
    const router = useRouter();
    const { isAuth, isAdmin } = appStore();

    if (isAuth && isAdmin) return <Component {...pageProps} />;
    else {
      localStorage.removeItem("token");
      router.replace("/admin");
    }
  };

withAdmin.displayName = "withAdmin";
export default withAdmin;
