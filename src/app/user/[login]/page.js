// pages/user/[login].js
'use client'
import UserDetail from "@/components/UserDetail";

export async function getServerSideProps({ params }) {
  const { login } = params;
  return {
    props: {
      login,
    },
  };
}

export default function UserDetailsPage({ login }) {
  return <UserDetail login={login} />;
}
