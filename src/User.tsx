import React, { FC } from "react";
import UserDetils from "./Type/models";

interface Props {
  user: UserDetils;
  addUser: (user: UserDetils) => void;
}
const User: FC<Props> = ({ user, addUser }) => {
  const { name, username, email } = user;
  return (
    <div className="d-flex flex-column justify-content-center mt-3">
      <h1>{name}</h1>
      <h3>{username}</h3>
      <h4>{email}</h4>
      <button
        className="w-25 mx-auto btn btn-success"
        onClick={() => addUser(user)}
      >
        Add Me
      </button>
    </div>
  );
};

export default User;
