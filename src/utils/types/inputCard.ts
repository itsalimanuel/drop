// Date: 27/12/2023
type Sizeing = "small" | "medium" | "default" | "large";

type InputCardSize<T> = {
  [key in keyof T]: { value: T[key]; size: Sizeing };
};

type InputCardDesabled<T> = {
  [key in keyof T]: { value: T[key]; isDisabled: boolean };
};
type InpurRequired<T> = {
  [key in keyof T]: { value: T[key]; isReadOnly: boolean };
};

export type { InputCardSize, InputCardDesabled, Required };
