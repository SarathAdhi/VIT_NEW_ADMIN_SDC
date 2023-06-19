import clsx from "clsx";
import React from "react";

export const H1 = ({ className, children }) => {
  return (
    <h1 className={clsx("text-4xl md:text-5xl font-semibold", className)}>
      {children}
    </h1>
  );
};

export const H2 = ({ className, children }) => {
  return (
    <h2 className={clsx("text-3xl md:text-4xl font-semibold", className)}>
      {children}
    </h2>
  );
};

export const H3 = ({ className, children }) => {
  return (
    <h3 className={clsx("text-2xl md:text-3xl font-semibold", className)}>
      {children}
    </h3>
  );
};

export const H4 = ({ className, children }) => {
  return (
    <h4 className={clsx("text-xl md:text-2xl font-semibold", className)}>
      {children}
    </h4>
  );
};

export const H5 = ({ className, children }) => {
  return (
    <h5 className={clsx("text-lg md:text-xl font-semibold", className)}>
      {children}
    </h5>
  );
};

export const H6 = ({ className, children }) => {
  return (
    <h6 className={clsx("text-md md:text-lg font-semibold", className)}>
      {children}
    </h6>
  );
};

export const P = ({ className, children }) => {
  return (
    <p className={clsx("text-sm md:text-base font-normal", className)}>
      {children}
    </p>
  );
};

export const Label = ({ className, children }) => {
  return (
    <label
      className={clsx(
        "block text-xs md:text-sm font-medium text-gray-700",
        className
      )}
    >
      {children}
    </label>
  );
};
