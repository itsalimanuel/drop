type InputTypes<T> = {
  [key in keyof T]: {
    value: T[key];
    type:
      | "email"
      | "number"
      | "tel"
      | "password"
      | "text"
      | "url"
      | "date"
      | "datetime-local"
      | "search"
      | "file";
  };
};

type InputSize<T> = {
  [key in keyof T]: {
    value: T[key];
    size: "small" | "medium" | "default" | "large";
  };
};
type InputDisabled<T> = {
  [key in keyof T]: { value: T[key]; isDisabled: boolean };
};
type InputPlaceholder<T> = {
  [key in keyof T]: { value: T[key]; placeholder: string };
};

export type { InputTypes, InputSize, InputDisabled, InputPlaceholder };
