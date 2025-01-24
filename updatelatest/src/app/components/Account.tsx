// src/app/components/Account.tsx
"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";

const Account = () => {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn || !user) {
    return <div>You are not signed in.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded mt-6">
      <h2 className="text-2xl font-bold mb-4">My Account</h2>
      <div className="mb-4">
        <strong>Name:</strong> {user.firstName} {user.lastName}
      </div>
      <div className="mb-4">
        <strong>Email:</strong> {user.emailAddresses[0]?.emailAddress}
      </div>
      {/* Add more user details or account management options here */}
      <div className="mt-6">
        <button
          onClick={() => {
            // Optionally, you can add functionality here, like updating user info
            alert("Edit account functionality not implemented yet!");
          }}
          className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
        >
          Edit Account
        </button>
      </div>
    </div>
  );
};

export default Account;
