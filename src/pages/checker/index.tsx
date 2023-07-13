import { useEffect, useState } from "react";
import { useUser } from "../../context/indext";
import { getUser } from "../../api";
import { Navigate } from "react-router-dom";
import LoggedInHeader from "../../components/loggedInHeader";
import { Box } from "@mui/material";
import SpellChecker from "../../components/spellChecker";

const Checker = () => {
  const { userId } = useUser();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (userId) {
      getUser(userId).then(({ username }) => {
        setUserName(username);
      });
    }
  }, [userId]);

  if (!userId) return <Navigate to={"/login"} />;

  return (
    <>
      <LoggedInHeader userName={userName} />
      <Box>
        <SpellChecker />
      </Box>
    </>
  );
};

export default Checker;
