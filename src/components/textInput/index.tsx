import CustomInput from "../customInput";

interface ITextInput {
  handleChange: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function TextInput({ handleChange }: ITextInput) {
  return (
    <CustomInput
      aria-label="Demo input"
      multiline
      placeholder="Start typing…"
      onChange={(e) => handleChange(e.target.value.trim().split(" "))}
    />
  );
}
