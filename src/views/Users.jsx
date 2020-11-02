import React from "react";
import { useLocation, Link } from "react-router-dom";
import { getUsers } from "../service/api";

export function Users() {
  const [users, setUsers] = React.useState([]);
  const state = useLocation();
  console.log("state", state);
  React.useEffect(() => {
    getUsers().then(({ data }) => setUsers(data));
  }, []);
  function displayUsers() {
    return users.map(mapUsers);
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          maxWidth: "700px",
          margin: "10px auto",
        }}
      >
        {displayUsers()}
      </div>
    </div>
  );
}

function mapUsers(user) {
  return <UserCard key={user.id} {...user} />;
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid black",
    margin: "20px",
    maxWidth: "200px",
    padding: "20px",
    alignItems: "center",
  },
  img: {
    borderRadius: "50%",
    heigh: "60px",
    width: "60px",
  },
};

function UserCard({ first_name, last_name, avatar, id, email }) {
  return (
    <div style={styles.container}>
      <img style={styles.img} src={avatar} alt={id} />
      <h2>{`${first_name} ${last_name}`}</h2>
      <p>id: {id}</p>
      <p>email: {email} </p>
      <Link to={`/user/${id}`}>More</Link>
    </div>
  );
}
