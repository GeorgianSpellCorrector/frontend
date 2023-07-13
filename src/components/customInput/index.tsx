import { forwardRef } from "react";
import Input, { InputProps } from "@mui/base/Input";
import { StyledInputElement, StyledTextareaElement } from "./styles";

const CustomInput = forwardRef(function CustomInput(
  props: InputProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <Input
      slots={{ input: StyledInputElement, textarea: StyledTextareaElement }}
      {...props}
      ref={ref}
      style={{ height: "100%" }}
    />
  );
});

export default CustomInput;
