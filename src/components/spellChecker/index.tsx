import TextInput from "../../components/textInput";
import CheckedText from "../../components/checkedText";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import { checkText } from "../../api";
import { useUser } from "../../context/indext";
import { CheckedTextModel } from "../../interfaces";

const SpellChecker = () => {
  const { userId } = useUser();
  const [texts, setTexts] = useState<string[]>([]);
  const [errors, setErrors] = useState<CheckedTextModel[]>([]);
  const [checked, setChecked] = useState<string[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);

  const handleCheck = () => {
    const cleanedText = texts.filter((text) => text);
    const inputText = cleanedText.join(" ");

    if (!cleanedText.length) {
      setChecked([]);
      return;
    }

    if (userId) {
      setIsloading(true);
      checkText(inputText, userId).then((errors) => {
        setErrors(errors);
        setChecked(texts);
        setIsloading(false);
      });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "70vh",
        padding: "50px",
      }}
    >
      <Box
        sx={{
          width: "80%",
          gap: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <TextInput handleChange={setTexts} />
          <Button onClick={handleCheck}>Check</Button>
        </Box>
        <Box
          sx={{
            width: "45%",
            position: "relative",
            border: "1px solid #E0E3E7",
            borderRadius: "8px",
            padding: "20px",
          }}
        >
          <CheckedText texts={checked} errors={errors} isLoading={isLoading} />
        </Box>
      </Box>
    </Box>
  );
};

export default SpellChecker;
