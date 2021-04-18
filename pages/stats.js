import Link from 'next/link';
import Image from 'next/image';
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="resultCont">
      <Image
        src="/results.svg"
        alt="img"
        width={100}
        height={100}
        layout="fixed"
      />
    <Footer />
    </div>
  );
}
