import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { getUser } from "../service/api";
import qs from "query-string";

export function Username() {
  const params = useParams();
  const { search } = useLocation();
  console.log("search", search);
  const values = qs.parse(search);
  console.log("values", values);
  const [user, setUser] = React.useState({});
  React.useEffect(() => {
    getUser(params.id).then(({ data: user }) => setUser(user));
  }, []);

  return (
    <div>
      <h1>User</h1>
      <img src={user.avatar} alt={user.first_name} />
      <h2>{user.first_name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

/* ejemplo ---> /user/:id/:date/:status

/user/1223/10-10-2020/active

const params = useParams()

params = {
    id: 1223,
    date: 10-10-2020,
    status: active
}

*/
