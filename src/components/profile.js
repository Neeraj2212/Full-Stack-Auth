import React, { useContext } from "react";
import { userContext } from "./../userProvider";

const Profile = () => {
  const user = useContext(userContext);

  return (
    <div>
      <code>{JSON.stringify(user)}</code>
    </div>
  );
};

export default Profile;
