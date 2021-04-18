// import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import Link from "next/link";
import Image from "next/image";
import { HomeTabs, Footer } from "./../src/styledComponents/reusables";
import { useAuth } from "../src/useAuth";

export default function Home() {
  const { signout } = useAuth();

  return (
    <div className='mainCont'>
      <Image src='/profileImg.svg' alt='img' width={100} height={100} layout='fixed' />
      <Link href='shopping'>
        <HomeTabs>ADD ITEMS</HomeTabs>
      </Link>
      <Link href='/waste'>
        <HomeTabs>ADD WASTE</HomeTabs>
      </Link>
      <Link href='/stats'>
        <HomeTabs>STATS</HomeTabs>
      </Link>
      <Footer>
        <Link href='/'>
          <Image src='/homeButton.svg' alt='img' width={100} height={100} layout='fixed' />
        </Link>
        <Link href='/' onClick={() => signout()}>
          <Image src='/logoutButton.svg' alt='img' width={100} height={100} layout='fixed' />
        </Link>
      </Footer>
    </div>
  );
}
