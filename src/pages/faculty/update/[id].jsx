import { PageLoader } from "@components/PageLoader";
import { H2 } from "@elements/Text";
import withAdmin from "@hoc/withAdmin";
import { PageLayout } from "@layouts/PageLayout";
import axios from "@lib/axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { InternalStaffForm } from "../add";

const UpdateFaculty = () => {
  const router = useRouter();
  const [facultyDetails, setFacultyDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = router.query;

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
  }, [id]);

  if (isLoading) return <PageLoader />;

  return (
    <PageLayout title={id}>
      {!facultyDetails ? (
        <H2 className="text-center">Faculty not found with ID: {id}</H2>
      ) : (
        <InternalStaffForm
          initialValues={facultyDetails}
          submitButtonTitle="Update Faculty"
          isUpdate
        />
      )}
    </PageLayout>
  );
};

export default withAdmin(UpdateFaculty);
