import { PageLayout } from "@layouts/PageLayout";
import React from "react";
import { AddFacultyForm } from "@modules/faculty/AddFacultyForm";
import { showErrorToast, showSuccessToast } from "@utils/toast";
import axios from "@lib/axios";
import { initialFacultyValues } from "@utils/initialValues";
import { showSuccessAlert } from "@utils/alert";
import { useRouter } from "next/router";
import withAdmin from "@hoc/withAdmin";

const handleSubmit = async ({ values, reset, isUpdate, router }) => {
  const newValues = {
    ...values,
    educationalDetails:
      values.educationalDetails.length !== 0 ? values.educationalDetails : [],

    patentPublishedDetails:
      values.patentPublishedDetails.length !== 0
        ? values.patentPublishedDetails
        : [],

    researchDetails: {
      ...values.researchDetails,
      specialization:
        values.researchDetails.specialization?.length > 0
          ? values.researchDetails.specialization
              .split(",")
              .map((item) => item.trim())
          : [],
    },

    password:
      values.role === "ADMIN"
        ? "$2b$10$dtCpr4PhfoHomfAAgaLoc.HOWAISJEGvqzFEbzkEIH2i7Q2TY0jhm"
        : "$2b$10$DqkPSuFsxHQcZzDMFXjlI.KdIETO9k6yL30N2UEGrFyYG10VnAQdK",
  };

  // Password for admin - admin
  // Password for faculty - faculty

  if (isUpdate) {
    try {
      const { message } = await axios.put(`/faculty/${values.id}`, {
        ...newValues,
      });

      showSuccessToast(message);
    } catch ({ error }) {
      showErrorToast(error);
    }

    return;
  }

  try {
    await axios.post("/faculty/create", {
      ...newValues,
    });

    reset();

    showSuccessAlert(
      "Faculty added successfully",
      "",
      "Add more Faculty",
      () => {},
      "View Faculty",
      () => router.push("/faculty")
    );
  } catch (error) {}
};

const InternalStaffForm = ({
  initialValues,
  isUpdate = false,
  router,
  submitBtnTitle = "",
}) => (
  <AddFacultyForm
    initialValues={initialValues}
    isUpdate={isUpdate}
    submitBtnTitle={submitBtnTitle}
    handleSubmit={(props) => handleSubmit({ ...props, isUpdate, router })}
  />
);

const AddStaff = ({ initialValues = initialFacultyValues }) => {
  const router = useRouter();

  return (
    <PageLayout title="Add Faculty">
      <InternalStaffForm initialValues={initialValues} router={router} />
    </PageLayout>
  );
};

export { InternalStaffForm };

export default withAdmin(AddStaff);
