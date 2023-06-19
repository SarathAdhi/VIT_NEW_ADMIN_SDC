import withAuth from "@hoc/withAuth";
import { appStore } from "@utils/store";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const { isAuth } = appStore();

  if (isAuth) router.replace("/dashboard");
  else router.replace("/admin");
};

export default withAuth(Home);
