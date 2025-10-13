import { type DefineComponent } from "vue";

import type { ISlideMenu } from "./types/SlideMenu.interface";

declare module "vue" {
  export interface GlobalComponents {
    CmpSlideMenu: DefineComponent<ISlideMenu>;
  }
}

export * from "./types/MenuItem.interface";
