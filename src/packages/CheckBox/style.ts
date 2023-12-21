export const Style = {
  isCheckBox: "flex items-center gap-4 my-2",
  isStyle: "w-4 h-4 relative",
  isContainer: {
    className: "w-4 h-4 relative",
  },
  isInput: {
    className: "absolute z-[1] top-0 left-0 w-full h-full cursor-pointer bg-red-500",
  },
  isIcon: {
    className:
      "relative rounded-md w-full h-full shadow-sm before:absolute before:content-[''] before:top-0 before:left-0 before:rounded-full before:w-full before:h-full before:bg-[#5371f4] before:opacity-0 before:checked:opacity-100",
  },
  disabled: "opacity-50 cursor-not-allowed",
  isFullWidth: {
    input: "absolute inset-0 w-full h-full",
    label: "flex items-center justify-between w-full",
    inputContainer: "bg-blue-100 rounded-md w-full h-full",
  },
};
