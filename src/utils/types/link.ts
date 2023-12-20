/**
 * @file link-types.ts
 * @description This file contains the Link interface definition.
 * @author Ali Khalouf
 * @date 2022-10-20
 */
import Vue from "vue";

type TypeProps<T> = {
  [key in keyof T]: {
    value: T[key];
    type: "primary" | "success" | "info" | "warning" | "danger" | "text";
  };
};

type LinkDisabled<T> = {
  [key in keyof T]: { value: T[key]; isDisabled: boolean };
};

type UnderlineProps<T> = {
  [key in keyof T]: { value: T[key]; isUnderline: boolean };
};

type LinkIcon<T> = {
  [key in keyof T]: { value: T[key]; icon: Vue.Component | String };
};

type LinkIconDirection<T> = {
  [key in keyof T]: { value: T[key]; iconDirection: "left" | "right" };
};

export type {
  TypeProps,
  LinkDisabled,
  UnderlineProps,
  LinkIcon,
  LinkIconDirection,
};
