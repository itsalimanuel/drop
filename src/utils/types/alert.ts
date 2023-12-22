import Vue from "vue";

type TitleProps<T> = {
  title?: T;
};
type MessageProps<T> = {
  message?: T;
};
type IconProps<T> = {
  [key in keyof T]: { value: T[key]; icon: Vue.Component | String };
};
type AlertPlacement<T> = {
  [key in keyof T]: {
    value: T[key];
    placement: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  };
};
export type { TitleProps, MessageProps, IconProps, AlertPlacement };
