import { Button } from "@chakra-ui/react";
import { PageLoader } from "@components/PageLoader";
import { H2 } from "@elements/Text";
import withAdmin from "@hoc/withAdmin";
import { PageLayout } from "@layouts/PageLayout";
import axios from "@lib/axios";
import { appStore } from "@utils/store";
import { showSuccessToast } from "@utils/toast";
import { useRouter } from "next/router";
import { InternalStaffForm } from "pages/faculty/add";
import React, { useEffect, useState } from "react";

const FacultyApprovalPage = () => {
  const router = useRouter();
  const [facultyDetails, setFacultyDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { getNotifications } = appStore();

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

  const approveFaculty = async () => {
    const { message } = await axios.put(
      `/faculty/approve/${facultyDetails.id}`
    );

    setFacultyDetails({ ...facultyDetails, isApproved: true });

    getNotifications();

    showSuccessToast(message);
  };

  const unApproveFaculty = async () => {
    const { message } = await axios.put(
      `/faculty/un-approve/${facultyDetails.id}`
    );

    setFacultyDetails({ ...facultyDetails, isApproved: false });

    getNotifications();

    showSuccessToast(message);
  };

  const isApproved = facultyDetails.isApproved;

  return (
    <PageLayout title={id}>
      {!facultyDetails ? (
        <H2 className="text-center">Faculty not found with ID: {id}</H2>
      ) : (
        <>
          <InternalStaffForm
            initialValues={facultyDetails}
            submitButtonTitle="Update Faculty"
            isUpdate
          />

          <div className="flex flex-col items-end px-3 mt-5">
            <Button
              bgColor={isApproved ? "red" : "green"}
              _hover={{ bgColor: isApproved ? "red.600" : "green.600" }}
              _active={{ bgColor: isApproved ? "red.500" : "green.500" }}
              color={"white"}
              onClick={isApproved ? unApproveFaculty : approveFaculty}
            >
              {isApproved ? "Un-approve" : "Approve"}
            </Button>
          </div>
        </>
      )}
    </PageLayout>
  );
};

export default withAdmin(FacultyApprovalPage);
