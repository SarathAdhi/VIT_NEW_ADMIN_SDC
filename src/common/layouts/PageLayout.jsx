import React, { useState } from "react";
import clsx from "clsx";
import { PageWrapper } from "./PageWrapper";
import { Navbar } from "@components/navbar";
import { appStore } from "@utils/store";
import { LeftSideBar } from "@components/LeftSideBar";
import { Footer } from "@components/Footer";

export const PageLayout = ({ title = "", children, className = "" }) => {
  const { isAuth } = appStore();
  const [isLeftSideBarOpen, setIsLeftSideBarOpen] = useState(false);

  return (
    <PageWrapper title={title} className="flex flex-col items-center">
      <Navbar setIsLeftSideBarOpen={setIsLeftSideBarOpen} />

      {isAuth && (
        <LeftSideBar
          isLeftSideBarOpen={isLeftSideBarOpen}
          setIsLeftSideBarOpen={setIsLeftSideBarOpen}
        />
      )}

      <div
        className={clsx(
          "max-w-full w-[1440px] flex-1 flex flex-col gap-5 mt-16 md:mt-14"
        )}
      >
        <div className={clsx("w-full flex-1 p-2 md:p-4", className)}>
          {children}
        </div>

        {isAuth && <Footer />}
      </div>
    </PageWrapper>
  );
};
