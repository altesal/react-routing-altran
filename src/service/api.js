import axios from "axios";

const api = axios.create({
  baseURL: "https://reqres.in/api/",
});

export async function loginUser(user) {
  try {
    const { data: loggedUser } = await api.post("/users", user);
    return loggedUser;
  } catch (e) {
    console.error(e);
  }
}

export async function getUsers() {
  try {
    const { data: users } = await api.get("/users");
    console.log("users", users);
    return users;
  } catch (e) {
    console.error(e);
  }
}

export async function getUser(id) {
  try {
    const { data: user } = await api.get(`/users/${id}`);

    return user;
  } catch (e) {
    console.error(e);
  }
}
