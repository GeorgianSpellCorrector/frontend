import { CheckedTextModel } from "../../interfaces";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import CheckedComponent from "../checkedComponent";

interface ICheckedText {
  texts: string[];
  errors: CheckedTextModel[];
  isLoading: boolean;
}

const CheckedText = ({ texts, errors, isLoading }: ICheckedText) => {
  if (isLoading)
    return (
      <CircularProgress
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        variant="indeterminate"
      />
    );

  return (
    <Box>
      {texts.map((text, index) => {
        let correct: string[] = [];
        errors.forEach((error) => {
          if (error.bad === text) correct = error.better;
          return;
        });
        if (correct.length)
          return (
            <>
              {" "}
              <CheckedComponent
                initialText={text}
                suggestions={correct}
                key={index}
              />
            </>
          );
        return <span key={index}> {text}</span>;
      })}
    </Box>
  );
};

export default CheckedText;
