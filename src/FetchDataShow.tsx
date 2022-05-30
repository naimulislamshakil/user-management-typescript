import React, { useEffect, useState } from "react";
import User from "./User";

interface UserData {
  name: string;
  email: string;
}
const FetchDataShow = () => {
  const [users, setUser] = useState<UserData>({});

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
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </div>
  );
};

export default FetchDataShow;
