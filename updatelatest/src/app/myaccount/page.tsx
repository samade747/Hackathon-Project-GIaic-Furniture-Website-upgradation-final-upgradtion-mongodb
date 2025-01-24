"use client";
import React from "react";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";

import AccountBanner from "../components/AccountBanner";

import FeaturesSection from "../components/FeaturesSection";

const Myaccount = () => {
  return (
    <>
      <AccountBanner />

      <SignedOut>
        <div className="text-center mt-6">
          <h2 className="text-lg font-semibold mb-4">You are signed out!</h2>
          <div className="flex justify-center space-x-4">
            <Link href="/sign-in">
              <button className="px-4 py-2 bg-indigo-500 text-white rounded">
                Sign In
              </button>
            </Link>
            <Link href="/sign-up">
              <button className="px-4 py-2 bg-green-500 text-white rounded">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        <Myaccount />
      </SignedIn>

      <FeaturesSection />
    </>
  );
};

export default Myaccount;



// import React from 'react'
// import AccountBanner from '../components/AccountBanner'
// import Account from '../components/Account'
// import FeaturesSection from '../components/FeaturesSection'

// const Myaccount = () => {
//   return (
//     <>
    
//     <AccountBanner />
  
//     <FeaturesSection />
   



//     </>
//   )
// }

// export default Myaccount