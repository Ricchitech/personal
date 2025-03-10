"use client";

import { useSidebar } from "@/context/SidebarContext";
import AppHeader from "@/layout/AppHeader";
import AppSidebar from "@/layout/AppSidebar";
import Backdrop from "@/layout/Backdrop";
import React, { Suspense } from "react";
import { useRouter } from "next/navigation";
import Ecommerce from "./Ecommerce";
import Profile from "./Profile";

export default function DashboardAdmin({
  children,
}: {
  children: React.ReactNode;
}) {
  let router = useRouter();
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[290px]"
    : "lg:ml-[90px]";

  // const user = {
  //   id: props.data._id,
  //   name: props.data.name,
  //   email: props.data.email,
  //   isAdmin: props.data.isAdmin,
  //   wallet: props.data.wallet,
  // };

  return (
    <div className="min-h-screen xl:flex">
      {/* Sidebar and Backdrop */}
      <AppSidebar />
      <Backdrop />
      {/* Main Content Area */}
      <div
        className={`flex-1 transition-all  duration-300 ease-in-out ${mainContentMargin}`}
      >
        {/* Header */}
        <AppHeader />
        {/* Page Content */}
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
          <Suspense fallback={<p>Loading feed...</p>}>
            {/* <Ecommerce />
             */}
            <Profile />

          </Suspense>
        </div>
      </div>
    </div>
  );
}
