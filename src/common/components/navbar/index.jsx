import { LinkedItem } from "@elements/LinkedItem";
import { H4, Label } from "@elements/Text";
import { appStore } from "@utils/store";
import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import {
  BellIcon,
  ChevronDownIcon,
  MenuIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { useRouter } from "next/router";

export const Navbar = ({ setIsLeftSideBarOpen }) => {
  const router = useRouter();
  const { user, logout, isAuth, isAdmin, notificationCount } = appStore();

  if (!isAuth) return;

  return (
    <header className="z-50 px-4 py-2 fixed w-full bg-[#004c93] flex justify-between gap-2 flex-row items-center">
      <div className="flex items-center justify-between sm:justify-start gap-5">
        <button onClick={() => setIsLeftSideBarOpen((pre) => !pre)}>
          <MenuIcon className="w-6 h-6 text-white" />
        </button>

        <H4 className="hidden sm:block text-white !font-medium">
          VIT Directory | Admin
        </H4>
      </div>

      <div className="flex items-center gap-5">
        {isAdmin && (
          <LinkedItem
            href="/approvals"
            className="flex relative items-center p-2"
          >
            <BellIcon className="w-6 h-6 text-white" />

            <span className="absolute top-0 right-0 text-xs bg-red-500 w-5 h-5 grid place-content-center text-white rounded-full">
              {notificationCount}
            </span>
          </LinkedItem>
        )}

        <Menu placement="bottom">
          <MenuButton as={"button"}>
            <div className="flex items-center gap-2 text-white">
              {user?.image ? (
                <img src={user?.image} className="w-8 h-8 rounded-full" />
              ) : (
                <UserIcon className="w-6 h-6" />
              )}

              <div className="hidden sm:flex">
                <Label className="!text-white">{user?.name}</Label>

                <ChevronDownIcon className="w-5 h-5" />
              </div>
            </div>
          </MenuButton>

          <MenuList className="!p-0" zIndex={999}>
            <MenuItem
              onClick={() => {
                logout();
                router.replace("/admin");
              }}
              className="font-medium text-lg"
            >
              Sign out
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </header>
  );
};
