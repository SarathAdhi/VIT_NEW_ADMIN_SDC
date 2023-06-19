import React, { useState } from "react";
import Form from "@components/Form";
import Input from "@elements/Input";
import { FieldArray } from "formik";
import { H5 } from "@elements/Text";
import clsx from "clsx";
import { Divider } from "@modules/faculty/AddFacultyForm";
import { PlusIcon } from "@heroicons/react/solid";
import { Badge } from "@chakra-ui/react";

export const ProjectDetails = ({
  initialValues,
  isUpdate,
  updatedDifference,
}) => {
  const [
    onGoingConsultancyProjectDetailsCount,
    setOnGoingConsultancyProjectDetailsCount,
  ] = useState(initialValues.ongoingConsultancyProjectDetails.length || 1);

  const [
    completedConsultancyProjectDetailsCount,
    setCompletedConsultancyProjectDetailsCount,
  ] = useState(initialValues.completedConsultancyProjectDetails.length || 1);

  const [
    ongoingFundedProjectDetailsCount,
    setOngoingFundedProjectDetailsCount,
  ] = useState(initialValues.ongoingFundedProjectDetails.length || 1);

  const [
    completedFundedProjectDetailsCount,
    setCompletedFundedProjectDetailsCount,
  ] = useState(initialValues.completedFundedProjectDetails.length || 1);

  return (
    <>
      <div className="bg-[#6e747d] p-2 rounded-md flex items-center justify-between">
        <H5 className="!font-semibold text-white">
          Selected On-going Consultancy Project Details
        </H5>

        <div className="flex items-center gap-1">
          {updatedDifference["ongoingConsultancyProjectDetails"] && (
            <Badge colorScheme="yellow">Modified</Badge>
          )}

          <PlusIcon className="ml-2 w-5 h-5 text-white" />
          <select
            onChange={(e) =>
              setOnGoingConsultancyProjectDetailsCount(parseInt(e.target.value))
            }
          >
            <option value="1">Add</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>

      <FieldArray name="ongoingConsultancyProjectDetails">
        {(arrayHelpers) => (
          <div className="grid gap-5 justify-items-start">
            <Form.Row
              className={clsx(
                "w-full",
                onGoingConsultancyProjectDetailsCount === 1 && "!grid-cols-1"
              )}
            >
              {[...Array(onGoingConsultancyProjectDetailsCount)].map(
                (_, index) => {
                  const isDetailsFromDraft = Object.values(
                    updatedDifference["ongoingConsultancyProjectDetails"] || []
                  )?.some((e) =>
                    Object.keys(e || []).some(
                      (x) =>
                        initialValues.ongoingConsultancyProjectDetails[index][x]
                    )
                  );

                  return (
                    <div
                      key={"ongoingConsultancyProjectDetails" + index}
                      className="w-full grid gap-2"
                    >
                      <div className="flex items-center justify-between gap-2">
                        {(index !== 0 || isUpdate) && (
                          <button
                            className="underline"
                            onClick={() => {
                              setOnGoingConsultancyProjectDetailsCount(
                                (pre) => pre - 1
                              );
                              arrayHelpers.remove(index);
                            }}
                          >
                            Remove
                          </button>
                        )}
                      </div>

                      <Form.Grid2>
                        <Input
                          className="w-full"
                          label="Ongoing Title"
                          name={`ongoingConsultancyProjectDetails[${index}].title`}
                          isValueChanged={isDetailsFromDraft}
                        />

                        <Input
                          className="w-full"
                          label="Ongoing Funding Agency"
                          name={`ongoingConsultancyProjectDetails[${index}].fundingAgency`}
                          isValueChanged={isDetailsFromDraft}
                        />
                      </Form.Grid2>
                    </div>
                  );
                }
              )}
            </Form.Row>
          </div>
        )}
      </FieldArray>

      <Divider />

      <div className="bg-[#6e747d] p-2 rounded-md flex items-center justify-between">
        <H5 className="!font-semibold text-white">
          Selected Completed Consultancy Project Details
        </H5>

        <div className="flex items-center gap-1">
          {updatedDifference["completedConsultancyProjectDetails"] && (
            <Badge colorScheme="yellow">Modified</Badge>
          )}

          <PlusIcon className="ml-2 w-5 h-5 text-white" />
          <select
            onChange={(e) =>
              setCompletedConsultancyProjectDetailsCount(
                parseInt(e.target.value)
              )
            }
          >
            <option value="1">Add</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>

      <FieldArray name="completedConsultancyProjectDetails">
        {(arrayHelpers) => (
          <div className="grid gap-5 justify-items-start">
            <Form.Row
              className={clsx(
                "w-full",
                completedConsultancyProjectDetailsCount === 1 && "!grid-cols-1"
              )}
            >
              {[...Array(completedConsultancyProjectDetailsCount)].map(
                (_, index) => {
                  const isDetailsFromDraft = Object.values(
                    updatedDifference["completedConsultancyProjectDetails"] ||
                      []
                  )?.some((e) =>
                    Object.keys(e || []).some(
                      (x) =>
                        initialValues.completedConsultancyProjectDetails[index][
                          x
                        ]
                    )
                  );

                  return (
                    <div
                      key={"completedConsultancyProjectDetails" + index}
                      className="w-full grid gap-2"
                    >
                      <div className="flex items-center justify-between gap-2">
                        {(index !== 0 || isUpdate) && (
                          <button
                            className="underline"
                            onClick={() => {
                              setCompletedConsultancyProjectDetailsCount(
                                (pre) => pre - 1
                              );
                              arrayHelpers.remove(index);
                            }}
                          >
                            Remove
                          </button>
                        )}
                      </div>

                      <Form.Grid2>
                        <Input
                          className="w-full"
                          label="Completed Title"
                          name={`completedConsultancyProjectDetails[${index}].title`}
                          isValueChanged={isDetailsFromDraft}
                        />

                        <Input
                          className="w-full"
                          label="Completed Funding Agency"
                          name={`completedConsultancyProjectDetails[${index}].fundingAgency`}
                          isValueChanged={isDetailsFromDraft}
                        />
                      </Form.Grid2>
                    </div>
                  );
                }
              )}
            </Form.Row>
          </div>
        )}
      </FieldArray>

      <Divider />

      <div className="bg-[#6e747d] p-2 rounded-md flex items-center justify-between">
        <H5 className="!font-semibold text-white">
          Selected Ongoing Funded Project Details
        </H5>

        <div className="flex items-center gap-1">
          {updatedDifference["ongoingFundedProjectDetails"] && (
            <Badge colorScheme="yellow">Modified</Badge>
          )}

          <PlusIcon className="ml-2 w-5 h-5 text-white" />
          <select
            onChange={(e) =>
              setOngoingFundedProjectDetailsCount(parseInt(e.target.value))
            }
          >
            <option value="1">Add</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>

      <FieldArray name="ongoingFundedProjectDetails">
        {(arrayHelpers) => (
          <div className="grid gap-5 justify-items-start">
            <Form.Row
              className={clsx(
                "w-full",
                ongoingFundedProjectDetailsCount === 1 && "!grid-cols-1"
              )}
            >
              {[...Array(ongoingFundedProjectDetailsCount)].map((_, index) => {
                const isDetailsFromDraft = Object.values(
                  updatedDifference["ongoingFundedProjectDetails"] || []
                )?.some((e) =>
                  Object.keys(e || []).some(
                    (x) => initialValues.ongoingFundedProjectDetails[index][x]
                  )
                );

                return (
                  <div
                    key={"ongoingFundedProjectDetails" + index}
                    className="w-full grid gap-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      {(index !== 0 || isUpdate) && (
                        <button
                          className="underline"
                          onClick={() => {
                            if (isUpdate) {
                              // deletePatentPublishedDetails(
                              //   initialValues.patentPublishedDetails[index]
                              //     ?.id
                              // );
                            }

                            setOngoingFundedProjectDetailsCount(
                              (pre) => pre - 1
                            );
                            arrayHelpers.remove(index);
                          }}
                        >
                          Remove
                        </button>
                      )}
                    </div>

                    <Form.Grid2>
                      <Input
                        className="w-full"
                        label="On going Title"
                        name={`ongoingFundedProjectDetails[${index}].title`}
                        isValueChanged={isDetailsFromDraft}
                      />

                      <Input
                        className="w-full"
                        label="On going Funding Agency"
                        name={`ongoingFundedProjectDetails[${index}].fundingAgency`}
                        isValueChanged={isDetailsFromDraft}
                      />
                    </Form.Grid2>
                  </div>
                );
              })}
            </Form.Row>
          </div>
        )}
      </FieldArray>

      <Divider />

      <div className="bg-[#6e747d] p-2 rounded-md flex items-center justify-between">
        <H5 className="!font-semibold text-white">
          Selected Completed Funded Project Details
        </H5>

        <div className="flex items-center gap-1">
          {updatedDifference["completedFundedProjectDetails"] && (
            <Badge colorScheme="yellow">Modified</Badge>
          )}

          <PlusIcon className="ml-2 w-5 h-5 text-white" />
          <select
            onChange={(e) =>
              setCompletedFundedProjectDetailsCount(parseInt(e.target.value))
            }
          >
            <option value="1">Add</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>

      <FieldArray name="completedFundedProjectDetails">
        {(arrayHelpers) => (
          <div className="grid gap-5 justify-items-start">
            <Form.Row
              className={clsx(
                "w-full",
                completedFundedProjectDetailsCount === 1 && "!grid-cols-1"
              )}
            >
              {[...Array(completedFundedProjectDetailsCount)].map(
                (_, index) => {
                  const isDetailsFromDraft = Object.values(
                    updatedDifference["completedFundedProjectDetails"] || []
                  )?.some((e) =>
                    Object.keys(e || []).some(
                      (x) =>
                        initialValues.completedFundedProjectDetails[index][x]
                    )
                  );

                  return (
                    <div
                      key={"completedFundedProjectDetails" + index}
                      className="w-full grid gap-2"
                    >
                      <div className="flex items-center justify-between gap-2">
                        {(index !== 0 || isUpdate) && (
                          <button
                            className="underline"
                            onClick={() => {
                              setCompletedFundedProjectDetailsCount(
                                (pre) => pre - 1
                              );
                              arrayHelpers.remove(index);
                            }}
                          >
                            Remove
                          </button>
                        )}
                      </div>

                      <Form.Grid2>
                        <Input
                          className="w-full"
                          label="Completed Title"
                          name={`completedFundedProjectDetails[${index}].title`}
                          isValueChanged={isDetailsFromDraft}
                        />

                        <Input
                          className="w-full"
                          label="Completed Funding Agency"
                          name={`completedFundedProjectDetails[${index}].fundingAgency`}
                          isValueChanged={isDetailsFromDraft}
                        />
                      </Form.Grid2>
                    </div>
                  );
                }
              )}
            </Form.Row>
          </div>
        )}
      </FieldArray>
    </>
  );
};
