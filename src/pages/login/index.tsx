import Container from "@mui/material/Container";
import { useUser } from "../../context/indext";
import { register } from "../../api";
import { Navigate, useNavigate } from "react-router-dom";
import LoginForm from "../../components/loginForm";

export default function Login() {
  const { userId, setUserId } = useUser();
  const navigate = useNavigate();

  if (userId) {
    return <Navigate to="/spell_checker" />;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = new FormData(event.currentTarget).get("userName");
    if (!username) return;

    register({ username }).then(({ _id }) => {
      setUserId(_id);
      localStorage.setItem("userId", _id);
      navigate("/spell_checker");
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <LoginForm handleSubmit={handleSubmit} />
    </Container>
  );
}
