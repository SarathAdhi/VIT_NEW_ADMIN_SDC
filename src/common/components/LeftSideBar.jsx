import { LinkedItem } from "@elements/LinkedItem";
import { H6 } from "@elements/Text";
import {
  CheckCircleIcon,
  PresentationChartBarIcon,
  UserAddIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/solid";
import clsx from "clsx";
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { appStore } from "@utils/store";

const pages = [
  {
    name: "Dashboard",
    href: "/dashboard",
    Icon: PresentationChartBarIcon,
    visibility: ["ADMIN", "FACULTY"],
  },
  {
    name: "View Approvals",
    href: "/approvals",
    Icon: CheckCircleIcon,
    visibility: ["ADMIN"],
  },
  {
    name: "Add Faculty",
    href: "/faculty/add",
    Icon: UserAddIcon,
    visibility: ["ADMIN"],
  },
  {
    name: "Edit / View Faculty",
    href: "/faculty/view",
    Icon: UserGroupIcon,
    visibility: ["ADMIN"],
  },
  {
    name: "Edit My Profile",
    href: "/profile",
    Icon: UserIcon,
    visibility: ["ADMIN", "FACULTY"],
  },
];

const SlideOver = ({ isLeftSideBarOpen, setIsLeftSideBarOpen }) => {
  const {
    user: { role },
  } = appStore();

  console.log({ role });

  return (
    <Drawer
      isOpen={isLeftSideBarOpen}
      placement="left"
      onClose={() => setIsLeftSideBarOpen(false)}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>
          <DrawerCloseButton />
          <H6>CORE LINKS</H6>
        </DrawerHeader>

        <DrawerBody mt={5}>
          <div className="grid gap-5">
            {pages.map(
              ({ name, href, Icon, visibility }) =>
                visibility.includes(role) && (
                  <LinkedItem
                    key={name}
                    href={href}
                    className="text-gray-600 font-semibold text-xl flex items-center gap-2"
                  >
                    <Icon className="w-6 h-6" />
                    {name}
                  </LinkedItem>
                )
            )}
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export const LeftSideBar = ({ isLeftSideBarOpen, setIsLeftSideBarOpen }) => {
  return (
    <SlideOver
      isLeftSideBarOpen={isLeftSideBarOpen}
      setIsLeftSideBarOpen={setIsLeftSideBarOpen}
    />
  );
};
