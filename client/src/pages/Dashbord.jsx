import { useContext } from "react";
import { userContext } from "../../context/userContext";

export default function Dashbord() {
  const { user } = useContext(userContext);

  return (
    <div>
      <h1>Dashboard</h1>
      {!!user && <h1>hi {user.name}</h1>}
    </div>
  );
}
