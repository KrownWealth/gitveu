//import React from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Header from "@/components/Header";



const Error = () => {
  return (
    <div>
      <Nav />
      <Header />
      <div className="error-container">
        <h1>Oops...</h1>
        <p>404 page not found</p>
        <Link href="/" className="button">Back to home</Link>
      
     </div>
    </div>
  )
}

export default Error
