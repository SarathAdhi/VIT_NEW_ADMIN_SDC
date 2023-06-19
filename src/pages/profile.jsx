import { PageLoader } from "@components/PageLoader";
import { H2 } from "@elements/Text";
import withAuth from "@hoc/withAuth";
import { PageLayout } from "@layouts/PageLayout";
import axios from "@lib/axios";
import { appStore } from "@utils/store";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { InternalStaffForm } from "./faculty/add";

const UpdateProfile = () => {
  const router = useRouter();
  const [facultyDetails, setFacultyDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { user } = appStore();
  const { id } = user;

  async function getFaculty() {
    const faculty = await axios.get(`/faculty/${id}`);

    setFacultyDetails({
      ...faculty,
      researchDetails: {
        ...faculty.researchDetails,
        specialization: faculty.researchDetails?.specialization?.join(","),
      },
    });

    setIsLoading(false);
  }

  useEffect(() => {
    if (id) getFaculty();
  }, []);

  if (isLoading) return <PageLoader />;

  return (
    <PageLayout title={id}>
      {!facultyDetails ? (
        <H2 className="text-center">Faculty not found with ID: {id}</H2>
      ) : (
        <InternalStaffForm
          initialValues={facultyDetails}
          submitBtnTitle="Update Profile"
          isUpdate
        />
      )}
    </PageLayout>
  );
};

export default withAuth(UpdateProfile);
