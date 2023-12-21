type checkBoxDisabled<T> = {
  [key in keyof T]: { value: T[key]; isDisabled: boolean };
};
type checkFull<T> = {
  [key in keyof T]: { value: T[key]; isFull: boolean };
};

export type { checkBoxDisabled, checkFull };
