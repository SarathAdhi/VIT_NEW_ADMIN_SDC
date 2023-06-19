import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { appStore } from "@utils/store";
import { PageLoader } from "@components/PageLoader";

const theme = extendTheme({
  fonts: {
    body: `'Poppins', sans-serif`,
    heading: `'Poppins', sans-serif`,
  },
});

const MyApp = ({ Component, pageProps }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { getProfile } = appStore();

  const fetchAuth = async () => {
    await getProfile();
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAuth();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      {isLoading ? <PageLoader /> : <Component {...pageProps} />}
    </ChakraProvider>
  );
};

export default MyApp;
