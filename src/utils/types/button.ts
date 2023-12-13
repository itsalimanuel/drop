import Vue from "vue";
// disabled
type ButtonDisabled<T> = {
  [key in keyof T]: { value: T[key]; isDisabled: boolean };
};
// size
type Sizeing = "small" | "medium" | "default" | "large";
type ButtonSize<T> = {
  [key in keyof T]: { value: T[key]; size: Sizeing };
};
// void || function
type ButtonVoid<T> = {
  [key in keyof T]: { onClick?: () => void | undefined; value: T[key] };
};
type ButtonIcon<T> = {
  [key in keyof T]: { value: T[key]; icon: Vue.Component | String };
};
type ButtonIconDirection = "left" | "right";

//  export types
export type {
  ButtonDisabled,
  ButtonSize,
  ButtonVoid,
  ButtonIcon,
  ButtonIconDirection,
};
