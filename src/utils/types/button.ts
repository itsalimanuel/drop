
// disabled
type ButtonDisabled<T> = {
  [key in keyof T]: { value: T[key]; isDisabled: boolean };
};
// size
type Sizeing = "small" | "medium" | "large";
type ButtonSize<T> = {
  [key in keyof T]: { value: T[key]; size: Sizeing };
};
// void || function
type ButtonVoid<T> = {
  [key in keyof T]: { onClick?: () => void | undefined; value: T[key] };
};
export type { ButtonDisabled, ButtonSize, ButtonVoid };
