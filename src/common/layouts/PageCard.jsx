import { Divider } from "@chakra-ui/react";
import { H3 } from "@elements/Text";
import React from "react";

export const PageCard = ({ title, children, ...rest }) => {
  return (
    <section className="grid gap-4">
      <H3>{title}</H3>

      <Divider color={"gray.400"} borderY={"1px"} />

      <div {...rest}>{children}</div>
    </section>
  );
};
