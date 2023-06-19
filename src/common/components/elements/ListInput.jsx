import { ErrorMessage, useField, useFormikContext } from "formik";
import { useState } from "react";
import Select from "react-select";

const ListInput = ({
  name,
  id = name,
  className,
  label,
  options,
  isMulti = false,
  onChange,
  required = false,
  isDisabled = false
}) => {
  const [input, { value, initialValue }] = useField(name);

  const [selectedValue, setSelectedValue] = useState(
    input.value
      ? Array.isArray(value)
        ? value.map((v) => ({ value: v, label: v }))
        : { value: value, label: value }
      : ""
  );

  const { setFieldValue, isSubmitting } = useFormikContext();

  const handleSelectionChange = (data) => {
    setFieldValue(
      name,
      Array.isArray(data) ? data.map((d) => d.value) : data.value
    );

    setSelectedValue(data);
    onChange?.(data);
  };

  return (
    <div className={className}>
      {!!label && (
        <label
          htmlFor={id}
          className="block mb-1 text-left text-sm font-semibold text-gray-700"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div>
        <Select
          id={id}
          {...input}
          isDisabled={isDisabled || isSubmitting  || (initialValue)}
          menuPosition="fixed"
          className="block w-full text-left placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none sm:text-sm"
          styles={{
            control: (base) => ({
              ...base,
              border: "0",
              boxShadow: "0",
              "&:hover": {
                border: "0",
              },
            }),
          }}
          value={
            isMulti
              ? value.length !== 0
                ? selectedValue
                : "" // if isMulti and value is an empty array, set value to "" else set value to selectedValue
              : value
              ? selectedValue
              : "" // if not isMulti and value is an empty string, set value to "" else set value to selectedValue
          }
          placeholder={`Select a ${name}`}
          onChange={handleSelectionChange}
          options={options}
          isSearchable={true}
          isMulti={isMulti}
        />
      </div>

      <ErrorMessage name={name}>
        {(msg) => (
          <div
            role="alert"
            className="mt-0.5 text-sm font-semibold text-[#ff0000] -z-10"
          >
            {msg}
          </div>
        )}
      </ErrorMessage>
    </div>
  );
};

export default ListInput;
