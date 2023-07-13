import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useUser } from "../../context/indext";
import {
  NavbarContainer,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  StyledSearchContainer,
  StyledListItem,
  StyledList,
} from "./styles";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { searchText } from "../../api";
import { SearchTextModel } from "../../interfaces";
import SearchModal from "../modal";

interface ILoggedInHeader {
  userName: string;
}

function LoggedInHeader({ userName }: ILoggedInHeader) {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchTextModel[] | []>(
    []
  );
  const [modalContent, setModalContent] = useState<SearchTextModel | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { userId, setUserId } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!search) {
      setSearchResults([]);
      setShowSearch(false);
    }
    const timeout = setTimeout(() => {
      if (userId && search)
        searchText(userId, search).then((data) => setSearchResults(data));
    }, 1000);
    return () => clearTimeout(timeout);
  }, [search, userId]);

  function handleLogout() {
    setUserId(null);
    localStorage.removeItem("userId");
  }

  return (
    <>
      {isModalOpen && modalContent && (
        <SearchModal
          handleClose={() => setIsModalOpen(false)}
          isOpen={isModalOpen}
          search={modalContent}
        />
      )}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ paddingInline: "2rem" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => navigate("/spell_checker")}
            >
              Georgian Spell Corrector
            </IconButton>
            <NavbarContainer>
              <Search sx={{ marginRight: "3rem" }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  onChange={(e) => {
                    setShowSearch(true);
                    setSearch(e.target.value);
                  }}
                  onClick={() => {
                    setShowSearch((prev) => !prev);
                  }}
                />

                {search.length > 0 && showSearch && (
                  <StyledSearchContainer>
                    {searchResults.length > 0 ? (
                      <StyledList>
                        {searchResults.map((result, index) => (
                          <StyledListItem
                            key={index}
                            onClick={() => {
                              setModalContent(result);
                              setIsModalOpen(true);
                            }}
                          >
                            {result.corrected_text_cleaned}
                          </StyledListItem>
                        ))}
                      </StyledList>
                    ) : (
                      <div>No results found...</div>
                    )}
                  </StyledSearchContainer>
                )}
              </Search>
              <Typography variant="h6" component="div">
                Hello, {userName}
              </Typography>
              <Button
                color="inherit"
                onClick={() => handleLogout()}
                sx={{ marginLeft: "3rem" }}
              >
                Logout
              </Button>
            </NavbarContainer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default LoggedInHeader;
