import React from "react";
import { loginUser } from "../../service/api";
import { useAuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

const styles = {
  form: {
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    width: "400px",
    margin: "20px auto",
    padding: "40px",
  },
};

export function Form() {
  const { push } = useHistory();
  const initialState = { email: "", password: "" };
  const [state, setState] = React.useState(initialState);
  const ctx = useAuthContext();
  const handleChange = ({ target }) => {
    setState((state) => ({
      ...state,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser(state);
      ctx.setState({ ...user, isLoggedIn: true });
      saveUserToLocalStorage(user);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" onChange={handleChange} />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

function saveUserToLocalStorage(user) {
  localStorage.setItem(
    "user",
    JSON.stringify({ email: user.email, isLoggedIn: true })
  );
}
