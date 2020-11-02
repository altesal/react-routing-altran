import { Link } from "react-router-dom";
import { LogoutBtn } from "../LogoutBtn/LogoutBtn";

export function Nav() {
  return (
    <div style={styles.container}>
      <h1>Navbar</h1>
      <Link
        style={styles.link}
        to={{ pathname: "/users", state: { name: "tomas" } }}
      >
        users
      </Link>
      <Link style={styles.link} to="/user/2">
        user
      </Link>
      <Link style={styles.link} to="/">
        login
      </Link>
      <LogoutBtn />
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "lightgray",
    padding: "20px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "baseline",
  },
  link: {
    margin: "10px",
  },
};
