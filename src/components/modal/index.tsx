import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { SearchTextModel } from "../../interfaces";
import { StyledModalContainer } from "./styles";

interface ISearchModal {
  isOpen: boolean;
  handleClose: () => void;
  search: SearchTextModel;
}

function SearchModal({ isOpen, handleClose, search }: ISearchModal) {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModalContainer>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Corrected: {search.corrected_text_cleaned}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Input: {search.text}
          </Typography>
        </StyledModalContainer>
      </Modal>
    </div>
  );
}

export default SearchModal;
