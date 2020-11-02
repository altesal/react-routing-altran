import { useAuthContext } from "../../context/AuthContext";

export function LogoutBtn() {
  const { setState } = useAuthContext();
  const handleClick = () => {
    localStorage.removeItem("user");
    setState({
      email: "",
      isLoggedIn: false,
    });
  };
  return <button onClick={handleClick}>Logout</button>;
}
