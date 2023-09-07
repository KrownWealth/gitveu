//import React from "react";
import Link from "next/link";
//import { Link } from "react-router-dom";
import { useRouter } from "next/navigation";
import InputField from "./InputField";

const Nav = (props) => {
  const router = useRouter();

  return (
    <div className="nav-container">
      <nav className="nav">
        <div className="logo">
          <Link href="/">
            Git<span>Veu</span>
          </Link>
        </div>
        <ul>
          <li className="nav-link">
            <Link href="/" className={router.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/user"
              className={router.pathname === `/user` ? "active" : ""}
            >
              User
            </Link>
          </li>
        </ul>
        <div className="inputFieldContainer hide-on-mobile">
          <InputField {...props} />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
