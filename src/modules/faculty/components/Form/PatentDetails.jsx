import React, { useState } from "react";
import Form from "@components/Form";
import Input from "@elements/Input";
import { FieldArray } from "formik";
import { H5 } from "@elements/Text";
import clsx from "clsx";
import { Divider } from "@modules/faculty/AddFacultyForm";
import { PlusIcon } from "@heroicons/react/solid";
import { Badge } from "@chakra-ui/react";

export const PatentDetails = ({
  initialValues,
  isUpdate,
  updatedDifference,
}) => {
  const [patentPublishedDetailsCount, setPatentPublishedDetailsCount] =
    useState(initialValues.patentPublishedDetails.length || 1);

  const [patentGrantedDetailsCount, setPatentGrantedDetailsCount] = useState(
    initialValues.patentGrantedDetails.length || 1
  );

  return (
    <>
      <div className="bg-[#6e747d] p-2 rounded-md flex items-center justify-between">
        <H5 className="!font-semibold text-white">
          Selected Patent Published Details
        </H5>

        <div className="flex items-center gap-1">
          {updatedDifference["patentPublishedDetails"] && (
            <Badge colorScheme="yellow">MODIFIED</Badge>
          )}

          <PlusIcon className="ml-2 w-5 h-5 text-white" />
          <select
            onChange={(e) =>
              setPatentPublishedDetailsCount(parseInt(e.target.value))
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

      <FieldArray name="patentPublishedDetails">
        {(arrayHelpers) => (
          <div className="grid gap-5 justify-items-start">
            <Form.Row
              className={clsx(
                "w-full",
                patentPublishedDetailsCount === 1 && "!grid-cols-1"
              )}
            >
              {[...Array(patentPublishedDetailsCount)].map((_, index) => {
                const isDetailsFromDraft = Object.values(
                  updatedDifference["patentPublishedDetails"] || []
                )?.some((e) =>
                  Object.keys(e || []).some(
                    (x) => initialValues.patentPublishedDetails[index][x]
                  )
                );

                return (
                  <div
                    key={"patentPublishedDetails" + index}
                    className="w-full grid gap-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      {(index !== 0 || isUpdate) && (
                        <button
                          type="button"
                          className="underline"
                          onClick={() => {
                            setPatentPublishedDetailsCount((pre) => pre - 1);
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
                        label="Patent Published Title"
                        name={`patentPublishedDetails[${index}].title`}
                        isValueChanged={isDetailsFromDraft}
                      />

                      <Input
                        className="w-full"
                        label="Patent Published Application No."
                        name={`patentPublishedDetails[${index}].applicationNumber`}
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
          Selected Patent Granted Details
        </H5>

        <div className="flex items-center gap-1">
          {updatedDifference["patentGrantedDetails"] && (
            <Badge colorScheme="yellow">MODIFIED</Badge>
          )}

          <PlusIcon className="ml-2 w-5 h-5 text-white" />
          <select
            onChange={(e) =>
              setPatentGrantedDetailsCount(parseInt(e.target.value))
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

      <FieldArray name="patentGrantedDetails">
        {(arrayHelpers) => (
          <div className="grid gap-5 justify-items-start">
            <Form.Row
              className={clsx(
                "w-full",
                patentGrantedDetailsCount === 1 && "!grid-cols-1"
              )}
            >
              {[...Array(patentGrantedDetailsCount)].map((_, index) => {
                const isDetailsFromDraft = Object.values(
                  updatedDifference["patentGrantedDetails"] || []
                )?.some((e) =>
                  Object.keys(e || []).some(
                    (x) => initialValues.patentGrantedDetails[index][x]
                  )
                );

                return (
                  <div
                    key={"patentGrantedDetails" + index}
                    className="w-full grid gap-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      {(index !== 0 || isUpdate) && (
                        <button
                          type="button"
                          className="underline"
                          onClick={() => {
                            setPatentGrantedDetailsCount((pre) => pre - 1);
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
                        label="Patent Granted Title"
                        name={`patentGrantedDetails[${index}].title`}
                        isValueChanged={isDetailsFromDraft}
                      />

                      <Input
                        className="w-full"
                        label="Patent Granted Application No."
                        name={`patentGrantedDetails[${index}].applicationNumber`}
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
    </>
  );
};
