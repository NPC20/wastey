import Link from 'next/link';
import Image from 'next/image';
import { HomeTabs, Footer } from './../src/styledComponents/reusables';

export default function Home() {
  return (
    <div className="resultCont">
      {/* <Image
        src="/results.svg"
        alt="img"
        width={100}
        height={100}
        layout="fixed"
      /> */}

      <Footer>
        <Link href="/">
          <Image
            src="/homeButton.svg"
            alt="img"
            width={100}
            height={100}
            layout="fixed"
          />
        </Link>
        <Link href="/">
          <Image
            src="/logoutButton.svg"
            alt="img"
            width={100}
            height={100}
            layout="fixed"
          />
        </Link>
      </Footer>
    </div>
  );
}
