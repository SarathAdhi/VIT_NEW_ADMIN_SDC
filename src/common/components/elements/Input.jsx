import clsx from "clsx";
import React from "react";
import { ErrorMessage, useField, useFormikContext } from "formik";

const Input = ({
  name,
  id = name,
  label,
  className,
  inputClassName,
  isValueChanged,
  ...inputProps
}) => {
  const [input, { initialValue }] = useField(name);
  const { isSubmitting } = useFormikContext();

  return (
    <div className={className}>
      {!!label && (
        <label
          htmlFor={id}
          className="block mb-1 text-left text-sm font-semibold text-gray-700"
        >
          {label}{" "}
          {inputProps.required && <span className="text-red-500">*</span>}
        </label>
      )}

      <input
        id={id}
        {...input}
        {...inputProps}
        disabled={
          inputProps.disabled !== undefined
            ? inputProps.disabled
            : isSubmitting || initialValue
        }
        className={clsx(
          "block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none sm:text-sm",
          !inputProps.disabled &&
            !inputProps.readOnly &&
            "focus:ring-primary-500 focus:border-primary-500",
          isValueChanged && "bg-yellow-100",
          inputClassName
        )}
      />

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

export default Input;
