import React, { useState } from "react";
import Form from "@components/Form";
import Input from "@elements/Input";
import { FieldArray } from "formik";
import { H5 } from "@elements/Text";
import clsx from "clsx";
import { Divider } from "@modules/faculty/AddFacultyForm";
import { PlusIcon } from "@heroicons/react/solid";
import { Badge } from "@chakra-ui/react";

export const AwardsAndCollaborations = ({
  initialValues,
  isUpdate,
  updatedDifference,
}) => {
  const [bookPublishedDetailsCount, setBookPublishedDetailsCount] = useState(
    initialValues.bookPublishedDetails.length || 1
  );

  const [awardDetailsCount, setAwardDetailsCount] = useState(
    initialValues.awardDetails.length || 1
  );

  const [
    majorInternationalCollaborationsDetailsCount,
    setMajorInternationalCollaborationsDetailsCount,
  ] = useState(
    initialValues.majorInternationalCollaborationsDetails.length || 1
  );

  const [
    majorIndustryCollaborationsDetailsCount,
    setMajorIndustryCollaborationsDetailsCount,
  ] = useState(initialValues.majorIndustryCollaborationsDetails.length || 1);

  return (
    <>
      <div className="bg-[#6e747d] p-2 rounded-md flex items-center justify-between">
        <H5 className="!font-semibold text-white">
          Selected Book / Book Chapter Published Details
        </H5>

        <div className="flex items-center gap-1">
          {updatedDifference["bookPublishedDetails"] && (
            <Badge colorScheme="yellow">MODIFIED</Badge>
          )}

          <PlusIcon className="ml-2 w-5 h-5 text-white" />
          <select
            onChange={(e) =>
              setBookPublishedDetailsCount(parseInt(e.target.value))
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

      <FieldArray name="bookPublishedDetails">
        {(arrayHelpers) => (
          <div className="grid gap-5 justify-items-start">
            <Form.Row
              className={clsx(
                "w-full",
                bookPublishedDetailsCount === 1 && "!grid-cols-1"
              )}
            >
              {[...Array(bookPublishedDetailsCount)].map((_, index) => (
                <div
                  key={"bookPublishedDetails" + index}
                  className="w-full grid gap-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    {(index !== 0 || isUpdate) && (
                      <button
                        className="underline"
                        onClick={() => {
                          setBookPublishedDetailsCount((pre) => pre - 1);
                          arrayHelpers.remove(index);
                        }}
                      >
                        Remove
                      </button>
                    )}
                  </div>

                  <Form.Grid3>
                    <Input
                      className="w-full"
                      label="Title"
                      name={`bookPublishedDetails[${index}].title`}
                    />

                    <Input
                      className="w-full"
                      label="Publisher"
                      name={`bookPublishedDetails[${index}].publisher`}
                    />

                    <Input
                      className="w-full"
                      placeholder="Y Y Y Y"
                      maxLength="4"
                      label="Year"
                      name={`bookPublishedDetails[${index}].year`}
                    />
                  </Form.Grid3>
                </div>
              ))}
            </Form.Row>
          </div>
        )}
      </FieldArray>

      <Divider />

      <div className="bg-[#6e747d] p-2 rounded-md flex items-center justify-between">
        <H5 className="!font-semibold text-white">
          Selected Awards & Recognition Details
        </H5>

        <div className="flex items-center gap-1">
          {updatedDifference["awardDetails"] && (
            <Badge colorScheme="yellow">MODIFIED</Badge>
          )}

          <PlusIcon className="w-5 h-5 text-white" />
          <select
            onChange={(e) => setAwardDetailsCount(parseInt(e.target.value))}
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

      <FieldArray name="awardDetails">
        {(arrayHelpers) => (
          <div className="grid gap-5 justify-items-start">
            <Form.Row
              className={clsx(
                "w-full",
                awardDetailsCount === 1 && "!grid-cols-1"
              )}
            >
              {[...Array(awardDetailsCount)].map((_, index) => (
                <div key={"awardDetails" + index} className="w-full grid gap-2">
                  <div className="flex items-center justify-between gap-2">
                    {(index !== 0 || isUpdate) && (
                      <button
                        className="underline"
                        onClick={() => {
                          setAwardDetailsCount((pre) => pre - 1);
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
                      label="Awards & Recognition"
                      name={`awardDetails[${index}]`}
                    />
                  </Form.Grid2>
                </div>
              ))}
            </Form.Row>
          </div>
        )}
      </FieldArray>

      <Divider />

      <div className="bg-[#6e747d] p-2 rounded-md flex items-center justify-between">
        <H5 className="!font-semibold text-white">
          Major International Collaborations
        </H5>

        <div className="flex items-center gap-1">
          {updatedDifference["majorInternationalCollaborationsDetails"] && (
            <Badge colorScheme="yellow">MODIFIED</Badge>
          )}

          <PlusIcon className="w-5 h-5 text-white" />
          <select
            onChange={(e) =>
              setMajorInternationalCollaborationsDetailsCount(
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

      <FieldArray name="majorInternationalCollaborationsDetails">
        {(arrayHelpers) => (
          <div className="grid gap-5 justify-items-start">
            <Form.Row
              className={clsx(
                "w-full",
                majorInternationalCollaborationsDetailsCount === 1 &&
                  "!grid-cols-1"
              )}
            >
              {[...Array(majorInternationalCollaborationsDetailsCount)].map(
                (_, index) => (
                  <div
                    key={"majorInternationalCollaborationsDetails" + index}
                    className="w-full grid gap-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      {(index !== 0 || isUpdate) && (
                        <button
                          className="underline"
                          onClick={() => {
                            setMajorInternationalCollaborationsDetailsCount(
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
                        label="International Collaboration Details"
                        name={`majorInternationalCollaborationsDetails[${index}]`}
                      />
                    </Form.Grid2>
                  </div>
                )
              )}
            </Form.Row>
          </div>
        )}
      </FieldArray>

      <Divider />

      <div className="bg-[#6e747d] p-2 rounded-md flex items-center justify-between">
        <H5 className="!font-semibold text-white">
          Major Industry Collaborations
        </H5>

        <div className="flex items-center gap-1">
          {updatedDifference["majorIndustryCollaborationsDetails"] && (
            <Badge colorScheme="yellow">MODIFIED</Badge>
          )}

          <PlusIcon className="w-5 h-5 text-white" />
          <select
            onChange={(e) =>
              setMajorIndustryCollaborationsDetailsCount(
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

      <FieldArray name="majorIndustryCollaborationsDetails">
        {(arrayHelpers) => (
          <div className="grid gap-5 justify-items-start">
            <Form.Row
              className={clsx(
                "w-full",
                majorIndustryCollaborationsDetailsCount === 1 && "!grid-cols-1"
              )}
            >
              {[...Array(majorIndustryCollaborationsDetailsCount)].map(
                (_, index) => (
                  <div
                    key={"majorIndustryCollaborationsDetails" + index}
                    className="w-full grid gap-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      {(index !== 0 || isUpdate) && (
                        <button
                          className="underline"
                          onClick={() => {
                            setMajorIndustryCollaborationsDetailsCount(
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
                        label="Industry Collaboration Details"
                        name={`majorIndustryCollaborationsDetails[${index}]`}
                      />
                    </Form.Grid2>
                  </div>
                )
              )}
            </Form.Row>
          </div>
        )}
      </FieldArray>
    </>
  );
};
