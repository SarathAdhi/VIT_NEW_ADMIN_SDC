import React, { useEffect, useState } from "react";
import Form from "@components/Form";
import Input from "@elements/Input";
import { Badge, StackDivider } from "@chakra-ui/react";
import { H4, H5, P } from "@elements/Text";
import { EducationalDetails } from "./components/Form/EducationalDetails";
import { ProjectDetails } from "./components/Form/ProjectDetails";
import { PatentDetails } from "./components/Form/PatentDetails";
import { AwardsAndCollaborations } from "./components/Form/AwardsAndCollaborations";
import { DESIGNATION, FACULTYROLE, SALUTATION } from "@utils/constants";
import ListInput from "@elements/ListInput";
import { appStore } from "@utils/store";
import axios from "@lib/axios";
import { detailedDiff } from "deep-object-diff";
import { PageLoader } from "@components/PageLoader";

// const department = DEPARTMENT.map((value) => ({ value, label: value }));
const designation = DESIGNATION.map((value) => ({ value, label: value }));
const facultyRole = FACULTYROLE.map((value) => ({ value, label: value }));
const salutation = SALUTATION.map((value) => ({ value, label: value }));

export const Divider = () => <StackDivider p={2} />;

export const AddFacultyForm = ({
  initialValues,
  handleSubmit,
  isUpdate,
  submitBtnTitle = "",
}) => {
  const { isAdmin } = appStore();
  const [oldFacultyDetails, setOldFacultyDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(isUpdate ? true : false);

  useEffect(() => {
    if (isUpdate)
      axios
        .get(`/faculty/${initialValues.id}?originalData=true`)
        .then((res) => {
          setOldFacultyDetails({
            ...res,
            researchDetails: {
              ...res.researchDetails,
              specialization: res.researchDetails?.specialization?.join(","),
            },
          });

        })
        .finally(() => setIsLoading(false));
  }, []);

  let updatedDifference = isUpdate
    ? detailedDiff(oldFacultyDetails, initialValues)
    : {};

  console.log({ updatedDifference });



  updatedDifference = {
    ...updatedDifference?.added,
    ...updatedDifference?.deleted,
    ...updatedDifference?.updated,
  };

  let entries = Object.entries(updatedDifference);

  entries = entries.map((e) => {
    let x = typeof e[1] === "string" ? e[1] : { ...e[1], changed: true };
    return [e[0], x];
  });

  updatedDifference = isUpdate ? Object.fromEntries(entries) : {};

  console.log({ updatedDifference });

  if (isLoading) return <PageLoader />;

  return (
    <div className="w-full grid gap-2 border">
      <div className="bg-[#1e4b8e] py-2 px-4">
        <H4 className="text-white">Faculty Profile</H4>
      </div>

      <Form
        className="px-3"
        actionClassName="flex justify-end"
        onSubmit={(values, reset) => {
          handleSubmit({ values, reset });
        }}
        initialValues={initialValues}
        submitButton={{
          title: submitBtnTitle
            ? submitBtnTitle
            : isUpdate
            ? "Update Faculty"
            : "Add Faculty",
          className: "bg-[#008000] hover:bg-[#408557] text-white px-4 py-2",
        }}
      >
        <P className="!font-semibold">
          Note: <span className="text-red-500">*</span> are Mandatory |{" "}
          <span className="text-red-500">
            Do not enter NIT,-,NA ffor no data available fields, leave them
            blank.
          </span>
        </P>

        <div className="bg-[#6e747d] p-2 rounded-md flex items-center justify-between">
          <H5 className="!font-semibold text-white">Employee Details</H5>

          {(updatedDifference["id"] ||
            updatedDifference["salutation"] ||
            updatedDifference["name"] ||
            updatedDifference["email"] ||
            updatedDifference["designation"] ||
            updatedDifference["school"]) && (
            <Badge colorScheme="yellow">MODIFIED</Badge>
          )}
        </div>

        <Form.Grid3>
          <Input
            label="Employee Id"
            name="id"
            isValueChanged={updatedDifference["id"]}
            required
            disabled={isUpdate}
          />

          <ListInput
            label="Salutation"
            name="salutation"
            options={salutation}
            isValueChanged={updatedDifference["salutation"]}
            required
          />

          <Input
            label="Name"
            name="name"
            isValueChanged={updatedDifference["name"]}
            required
          />

          <Input
            label="Email"
            name="email"
            disabled={isUpdate}
            isValueChanged={updatedDifference["email"]}
            required
          />

          <ListInput
            label="Designation"
            name="designation"
            options={designation}
            isValueChanged={updatedDifference["designation"]}
            required
          />

          <Input
            label="School / Center"
            name="school"
            isValueChanged={updatedDifference["school"]}
            required
          />

          {/* <ListInput
            options={department}
            name="department"
            label="Department"
            required
          /> */}

          {isAdmin && (
            <ListInput
              options={facultyRole}
              label="Role"
              name="role"
              required
            />
          )}
        </Form.Grid3>

        <Divider />

        <EducationalDetails
          initialValues={initialValues}
          isValueChanged={updatedDifference["educationalDetails"]}
          isUpdate={isUpdate}
        />

        <Divider />

        <div className="bg-[#6e747d] p-2 rounded-md flex items-center justify-between">
          <H5 className="!font-semibold text-white">
            Post Doctoral Experience Details
          </H5>

          {updatedDifference["postDoctoralExperience"] && (
            <Badge colorScheme="yellow">MODIFIED</Badge>
          )}
        </div>

        <Input
          className="w-full"
          label="Post Doctoral Experience (if any)"
          name="postDoctoralExperience"
          isValueChanged={updatedDifference["postDoctoralExperience"]}
        />

        <Divider />

        <div className="bg-[#6e747d] p-2 rounded-md flex items-center justify-between">
          <H5 className="!font-semibold text-white">Research Details</H5>

          {updatedDifference["researchDetails"] && (
            <Badge colorScheme="yellow">MODIFIED</Badge>
          )}
        </div>

        <Form.Grid3>
          <div>
            <Input
              className="w-full"
              label="Specialization"
              name="researchDetails.specialization"
              isValueChanged={
                updatedDifference["researchDetails"]?.specialization
              }
            />
            {"[Specify a max. of 5 areas with comma]"}
          </div>

          <Input
            className="w-full"
            label="ORCID ID"
            name="researchDetails.orcid"
            isValueChanged={updatedDifference["researchDetails"]?.orcid}
            required
          />

          <Input
            className="w-full"
            label="Scopus ID"
            name="researchDetails.scopus"
            isValueChanged={updatedDifference["researchDetails"]?.scopus}
            required
          />

          <Input
            type="number"
            className="w-full"
            label="h Index"
            name="researchDetails.hIndex"
            isValueChanged={updatedDifference["researchDetails"]?.hIndex}
          />

          <Input
            className="w-full"
            label="Google Scholar ID"
            name="researchDetails.googleScholar"
            isValueChanged={updatedDifference["researchDetails"]?.googleScholar}
            required
          />

          <Input
            type="number"
            className="w-full"
            label="i10 Index"
            name="researchDetails.i10Index"
            isValueChanged={updatedDifference["researchDetails"]?.i10Index}
          />
        </Form.Grid3>

        <Divider />

        <ProjectDetails
          initialValues={initialValues}
          updatedDifference={updatedDifference}
          isUpdate={isUpdate}
        />

        <Divider />

        <PatentDetails
          initialValues={initialValues}
          updatedDifference={updatedDifference}
          isUpdate={isUpdate}
        />

        <Divider />

        <AwardsAndCollaborations
          initialValues={initialValues}
          updatedDifference={updatedDifference}
          isUpdate={isUpdate}
        />
        <Divider />

        <div className="bg-[#6e747d] p-2 rounded-md flex items-center justify-between">
          <H5 className="!font-semibold text-white">Other Details</H5>

          {(updatedDifference["editorialExperience"] ||
            updatedDifference["personalWebsite"]) && (
            <Badge colorScheme="yellow">MODIFIED</Badge>
          )}
        </div>

        <Form.Grid2>
          <Input
            className="w-full"
            label="Editorial Experience (if any)"
            name="editorialExperience"
            isValueChanged={updatedDifference["editorialExperience"]}
          />

          <Input
            className="w-full"
            label="Personal Website (if any)"
            name="personalWebsite"
            isValueChanged={updatedDifference["personalWebsite"]}
          />
        </Form.Grid2>

        <Divider />

        <div className="bg-[#6e747d] p-2 rounded-md flex items-center justify-between">
          <H5 className="!font-semibold text-white">Photo Link</H5>

          {updatedDifference["image"] && (
            <Badge colorScheme="yellow">MODIFIED</Badge>
          )}
        </div>

        <Form.Grid2>
          <Input
            label="Photo Link"
            name="image"
            isValueChanged={updatedDifference["image"]}
          />
        </Form.Grid2>

        <Divider />
      </Form>
    </div>
  );
};
