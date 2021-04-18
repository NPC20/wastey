import React from "react";
import Link from "next/link";
import HomeBtn from "../components/HomeBtn";
import LogoutBtn from "../components/LogoutBtn";
import { StyledFooter } from "./../src/styledComponents/reusables";
import { useAuth } from "../src/useAuth";

export default function Footer() {
  const { signout } = useAuth();

  return (
    <StyledFooter>
      <Link href='/#' passHref>
        <HomeBtn />
      </Link>
      <Link href='/' onClick={() => signout()} passHref>
        <LogoutBtn />
      </Link>
    </StyledFooter>
  );
}
