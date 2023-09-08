// pages/user/[login].js
'use client'

import UserDetail from "@/components/UserDetail";


export default function UserDetailsPage( { login }) {
  
  return <UserDetail login={login} />;
}
