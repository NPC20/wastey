// import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../components/Button';
import HomeBtn from '../components/HomeBtn';
import LogoutBtn from '../components/LogoutBtn';
import { HomeTabs, Footer } from './../src/styledComponents/reusables';

export default function Home() {
  return (
    <div className="mainCont">
      <Image
        src="/profileImg.svg"
        alt="img"
        width={100}
        height={100}
        layout="fixed"
      />
      <Link href="/shopping" passHref>
        <Button>add items</Button>
      </Link>
      <Link href="/waste" passHref>
        <Button>add waste</Button>
      </Link>
      <Link href="/stats" passHref>
        <Button>stats</Button>
      </Link>
      <Footer>
        <Link href="/#">
          <HomeBtn/>
          {/* <Image
            src="/homeButton.svg"
            alt="img"
            width={100}
            height={100}
            layout="fixed"
          /> */}
        </Link>
        <Link href="/">
          <LogoutBtn />
          {/* <Image
            src="/logoutButton.svg"
            alt="img"
            width={100}
            height={100}
            layout="fixed"
          /> */}
        </Link>
      </Footer>
    </div>
  );
}
