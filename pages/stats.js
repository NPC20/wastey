import Link from "next/link";
import Image from "next/image";
import { HomeTabs, Footer } from "./../src/styledComponents/reusables";
import Charts from "../components/Charts";
const data = [
  { name: "Food wasted", value: 300 },
  { name: "Food used", value: 300 },
];

export default function Home() {
  return (
    <div className='resultCont'>
      {/* <Image
        src="/results.svg"
        alt="img"
        width={100}
        height={100}
        layout="fixed"
      /> */}

      <Charts data={data} />

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
