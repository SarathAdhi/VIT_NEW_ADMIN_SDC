import Form from "@components/Form";
import Input from "@elements/Input";
import { H2 } from "@elements/Text";
import { PageLayout } from "@layouts/PageLayout";
import axios from "@lib/axios";
import { appStore } from "@utils/store";
import { showSuccessToast } from "@utils/toast";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import * as y from "yup";

const schema = y.object().shape({
  id: y.string().required("Enter the Username"),
  password: y.string().required("Enter the Password"),
});

const initialValue = {
  id: "",
  password: "",
};

const Home = () => {
  const router = useRouter();
  const { isAuth, setIsAuth, getProfile } = appStore();

  useEffect(() => {
    if (isAuth) router.replace("/dashboard");
    else router.replace("/admin");
  }, []);

  return (
    <PageLayout
      title="Admin Login"
      className="flex-1 flex flex-col items-center gap-5"
    >
      <img src="/assets/vit-color-logo.png" className="max-w-full w-72" />

      <div className="max-w-md w-full mt-20">
        <H2 className="mb-5 text-center !font-black">Admin Login</H2>

        <Form
          schema={schema}
          initialValues={initialValue}
          className="bg-white p-3 sm:p-10 rounded-lg shadow"
          submitButton={{
            title: "Login",
          }}
          onSubmit={async (values) => {
            const res = await axios.post("/auth/login", values);

            if (res?.message) {
              localStorage.setItem("token", res.token);

              showSuccessToast(res.message);
              await getProfile();
              setIsAuth(true);

              router.replace("/dashboard");
            }
          }}
        >
          <Input label="Employee ID" name="id" required />
          <Input label="Password" name="password" type="password" required />
        </Form>
      </div>
    </PageLayout>
  );
};

export default Home;
