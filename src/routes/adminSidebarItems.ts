// import AddTour from "@/pages/Admin/AddTour";
// import AddTourType from "@/pages/Admin/AddTourType";
import AddDivision from "@/pages/Admin/AddDivision";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const Analytics=lazy(()=>import("@/pages/Admin/Analytics"))
const AddTourType=lazy(()=>import("@/pages/Admin/AddTourType"))
const AddTour=lazy(()=>import("@/pages/Admin/AddTour"))

export const adminSidebarItems : ISidebarItem[]=[
    {
      title: "Dashboard",
      items: [
        {
          title: "Analytics",
          url: "/admin/analytics",
          component:Analytics
        },
      ],
    },
    {
      title: "Tour Management",
      items: [
         {
          title: "Add Tour",
          url: "/admin/add-tour",
          component:AddTour
        },
        {
        title: "Add Tour Type",
        url: "/admin/add-tour-type",
        component: AddTourType,
      },
        {
        title: "Add Division",
        url: "/admin/add-division",
        component: AddDivision,
      },
       
      ],
    },
  ]


// const Analytics = lazy(() => import("@/pages/Admin/Analytics"));

// export const adminSidebarItems: ISidebarItem[] = [
//   {
//     title: "Dashboard",
//     items: [
//       {
//         title: "Analytics",
//         url: "/admin/analytics",
//         component: Analytics,
//       },
//     ],
//   },
//   {
//     title: "Tour Management",
//     items: [
//       {
//         title: "Add Tour Type",
//         url: "/admin/add-tour-type",
//         component: AddTourType,
//       },
//       {
//         title: "Add Tour",
//         url: "/admin/add-tour",
//         component: AddTour,
//       },
//       {
//         title: "Habi Jabi",
//         url: "/admin/habijabi",
//         component: AddTour,
//       },
//     ],
//   },
// ];