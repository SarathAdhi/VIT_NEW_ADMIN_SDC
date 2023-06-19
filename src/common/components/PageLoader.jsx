import { Spinner } from "@chakra-ui/react";
import React from "react";

export const PageLoader = () => {
  return (
    <div className="h-screen w-full grid place-content-center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.600"
        size={"lg"}
      />
    </div>
  );
};
