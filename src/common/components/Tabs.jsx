import React from "react";
import {
  Tabs as ChakraTabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

export const Tabs = ({ tabLists = [], tabPanels = [] }) => {
  return (
    <ChakraTabs variant="unstyled">
      <TabList>
        {tabLists.map((list) => (
          <Tab key={list} _selected={{ color: "white", bg: "#224c9c" }}>
            {list}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {tabPanels.map((Pannel, index) => (
          <TabPanel key={index}>
            <Pannel />
          </TabPanel>
        ))}
      </TabPanels>
    </ChakraTabs>
  );
};
