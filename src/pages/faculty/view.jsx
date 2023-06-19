import Form from "@components/Form";
import Input from "@elements/Input";
import { H6 } from "@elements/Text";
import withAdmin from "@hoc/withAdmin";
import { PageLayout } from "@layouts/PageLayout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import * as y from "yup";

const schema = y.object().shape({
  id: y.string().required("Enter the Employee Id"),
});

const initialValue = {
  id: "",
};

const ViewFaculty = () => {
  const router = useRouter();

  return (
    <PageLayout
      title="View Faculty"
      className="grid justify-items-center gap-5"
    >
      <div className="mt-10 w-full max-w-[500px] rounded-md overflow-hidden">
        <div className="bg-[#1e4b8e] py-2 px-4">
          <H6 className="text-white">Enter to Edit / View Faculty</H6>
        </div>

        <Form
          schema={schema}
          initialValues={initialValue}
          className="py-4 px-4 border border-gray-400 rounded-b-md place-items-center"
          submitButton={{
            title: "View Faculty",
            className: "bg-[#0d6efd] hover:bg-[#0d6efd] text-sm text-white p-2",
          }}
          onSubmit={async (values) => {
            router.push(`/faculty/update/${values.id}`);
            // const res = await axios.get(`/faculty/${values.id}`);
            // setFaculty(res);
          }}
        >
          <Input
            className="w-full"
            label="Employee Id"
            name="id"
            placeholder="Search for faculty by ID"
          />
        </Form>
      </div>
    </PageLayout>
  );
};

export default withAdmin(ViewFaculty);
