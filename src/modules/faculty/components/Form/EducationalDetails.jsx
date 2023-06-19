import { Badge } from "@chakra-ui/react";
import Form from "@components/Form";
import Input from "@elements/Input";
import { H5 } from "@elements/Text";
import { PlusCircleIcon } from "@heroicons/react/solid";
import axios from "@lib/axios";
import { appStore } from "@utils/store";
import { showSuccessToast } from "@utils/toast";
import clsx from "clsx";
import { FieldArray } from "formik";
import React, { useState } from "react";

async function deleteEducationalDetails(id) {
  if (id) {
    const { message } = await axios.delete(
      `/faculty/educational-details/${id}`
    );

    showSuccessToast(message);
  }
}

export const EducationalDetails = ({
  initialValues,
  isUpdate,
  isValueChanged,
}) => {
  const { isAdmin } = appStore();

  const [educationalDetailsCount, setEducationalDetailsCount] = useState(
    initialValues.educationalDetails.length || 1
  );

  const _ed = Object.values(isValueChanged || []);

  console.log({ _ed });

  return (
    <>
      <div className="bg-[#6e747d] p-2 rounded-md flex items-center justify-between">
        <H5 className="!font-semibold text-white">Educational Details</H5>

        <div className="flex gap-3 items-center">
          {isValueChanged && <Badge colorScheme="yellow">MODIFIED</Badge>}

          <button
            type="button"
            onClick={() => setEducationalDetailsCount((pre) => pre + 1)}
            className="flex items-center gap-1 p-1 font-semibold bg-yellow-500"
          >
            <PlusCircleIcon className="w-6 h-6" />
            Add More
          </button>
        </div>
      </div>

      <FieldArray name="educationalDetails">
        {(arrayHelpers) => (
          <div className="grid gap-5 justify-items-start">
            <Form.Row
              className={clsx(
                "w-full",
                educationalDetailsCount === 1 && "!grid-cols-1"
              )}
            >
              {[...Array(educationalDetailsCount)].map((_, index) => {
                const isDetailsFromDraft = _ed?.some(
                  (e) => e === initialValues.educationalDetails[index]
                );

                return (
                  <div
                    key={"educationalDetails" + index}
                    className="w-full grid gap-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      {(index !== 0 || isUpdate) && isAdmin && (
                        <button
                          type="button"
                          className="underline"
                          onClick={() => {
                            if (isUpdate) {
                              deleteEducationalDetails(
                                initialValues.educationalDetails[index]?.id
                              );
                            }

                            setEducationalDetailsCount((pre) => pre - 1);
                            arrayHelpers.remove(index);
                          }}
                        >
                          Remove
                        </button>
                      )}
                    </div>

                    <Form.Grid4>
                      <Input
                        className="w-full"
                        label="Degree"
                        name={`educationalDetails[${index}].degree`}
                        isValueChanged={isDetailsFromDraft}
                        required
                      />

                      <Input
                        className="w-full"
                        placeholder="Y Y Y Y"
                        maxLength={4}
                        label="Passed Out Year"
                        name={`educationalDetails[${index}].graduatedYear`}
                        isValueChanged={isDetailsFromDraft}
                        required
                      />

                      <Input
                        className="w-full"
                        label="Specialization"
                        name={`educationalDetails[${index}].specialization`}
                        isValueChanged={isDetailsFromDraft}
                        required
                      />

                      <Input
                        className="w-full"
                        label="Institute / University / College"
                        name={`educationalDetails[${index}].university`}
                        isValueChanged={isDetailsFromDraft}
                        required
                      />
                    </Form.Grid4>
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
