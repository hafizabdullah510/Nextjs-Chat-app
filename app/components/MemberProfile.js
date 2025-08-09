import React from "react";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
const MemberProfile = async () => {
  const user = await currentUser();
  return (
    <div className="flex items-center px-4 gap-2 py-4 bg-base-200 rounded-lg mx-auto">
      <UserButton />
      <div>
        <p className="text-sm font-semibold">
          {user?.firstName} {user?.lastName}
        </p>
        <p className="text-sm">{user?.emailAddresses[0].emailAddress}</p>
      </div>
    </div>
  );
};

export default MemberProfile;
