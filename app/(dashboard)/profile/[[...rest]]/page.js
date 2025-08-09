import React from "react";
import { UserProfile } from "@clerk/nextjs";
const Profile = () => {
  return (
    <div className="px-8 py-12">
      <UserProfile />
    </div>
  );
};

export default Profile;
