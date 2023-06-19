import clsx from "clsx";
import React from "react";
import { ErrorMessage, useField, useFormikContext } from "formik";

const Select = ({
  name,
  id = name,
  label,
  className,
  inputClassName,
  options = [],
  ...inputProps
}) => {
  const [input] = useField(name);
  const { isSubmitting } = useFormikContext();

  return (
    <div className={className}>
      {!!label && (
        <label
          htmlFor={id}
          className="block mb-1 text-left text-[14px] font-semibold text-black"
        >
          {label}{" "}
          {inputProps.required && <span className="text-red-500">*</span>}
        </label>
      )}

      <select
        id={id}
        {...input}
        disabled={isSubmitting}
        {...inputProps}
        className={clsx(
          "block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none sm:text-sm",
          !inputProps.disabled &&
            !inputProps.readOnly &&
            "focus:ring-primary-500 focus:border-primary-500",
          inputClassName
        )}
      >
        {options.map((option, index) => (
          <option key={option + index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <ErrorMessage name={name}>
        {(msg) => (
          <div
            role="alert"
            className="mt-1 text-base text-[#ff0000] animate-slide-down -z-10"
          >
            {msg}
          </div>
        )}
      </ErrorMessage>
    </div>
  );
};

export default Select;
