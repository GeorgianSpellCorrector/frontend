import { useState } from "react";
import {
  StyledContainer,
  StyledList,
  StyledListItem,
  StyledSpan,
} from "./styles";

interface ICheckedComponent {
  initialText: string;
  suggestions: string[];
}

const CheckedComponent = ({ initialText, suggestions }: ICheckedComponent) => {
  const [text, setText] = useState(() => initialText);
  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <StyledContainer onClick={() => setShow((prev) => !prev)} checked={checked}>
      {show && (
        <StyledSpan>
          <StyledList>
            {suggestions.map((sugestion, index) => (
              <StyledListItem
                key={index}
                onClick={() => {
                  setText(sugestion);
                  setChecked(true);
                }}
              >
                {sugestion}
              </StyledListItem>
            ))}
          </StyledList>
        </StyledSpan>
      )}
      {text}
    </StyledContainer>
  );
};

export default CheckedComponent;
