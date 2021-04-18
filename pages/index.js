// import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import Link from "next/Link";
import Image from "next/image";
import { HomeTabs, Footer } from "./../src/styledComponents/reusables";

export default function Home() {
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
        <Link href='/'>
          <Image src='/logoutButton.svg' alt='img' width={100} height={100} layout='fixed' />
        </Link>
      </Footer>
    </div>
  );
}
