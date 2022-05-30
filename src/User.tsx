import React, { FC } from "react";
import UserDetils from "./Type/models";

interface Props {
  user: UserDetils;
  addUser: () => void;
}
const User: FC<Props> = ({ user, addUser }) => {
  const { name, userName, email } = user;
  return (
    <div className="d-flex flex-column justify-content-center">
      <h1>{name}</h1>
      <h3>{userName}</h3>
      <h4>{email}</h4>
      <button>Add Me</button>
    </div>
  );
};

export default User;
