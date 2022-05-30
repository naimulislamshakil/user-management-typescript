import { toNamespacedPath } from "node:path/win32";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import UserDetils from "./Type/models";
import User from "./User";

const FetchDataShow = () => {
  const [users, setUser] = useState<UserDetils[]>([]);
  const [team, setTeam] = useState<UserDetils[]>([]);

  //   const user = (e:FormEvent<HTMLFormElement>) => {
  //     e.preventDefauit();
  //     const userData = {
  //       name: "jon",
  //       job: "dev",
  //     };
  //     setUser(userData);
  //     };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const addUser = (user: UserDetils): void => {
    for (const per of team) {
      console.log(per);
      if (per.id === user.id) {
        toast.error("Alrady add");
        return;
      }
    }
    const newTeam = [...team, user];
    setTeam(newTeam);
  };
  console.log(team);
  return (
    <div>
      <h2>Users</h2>
      <h3>Team mumber {team.length}</h3>
      {users.map((user) => (
        <User key={user.id} user={user} addUser={addUser}></User>
      ))}
    </div>
  );
};

export default FetchDataShow;
