import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("../home/home.module").then((m) => m.HomePageModule),
      },
      {
        path: "news",
        loadChildren: () =>
          import("../news/news.module").then((m) => m.NewsPageModule),
      },
      // {
      //   path: "profile",
      //   loadChildren: () =>
      //     import("../profile/profile.module").then((m) => m.ProfilePageModule),
      // },
      {
        path: "news/details",
        loadChildren: () =>
          import("../news-item/news-item.module").then(
            (m) => m.NewsItemPageModule
          ),
      },
      {
        path: "menu",
        loadChildren: () =>
          import("../menu/menu.module").then((m) => m.MenuPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
