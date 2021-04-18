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
      <h2 className='table__title'>YOUR STATS TO DATE</h2>
      <div className='details'>
        {/* <Image
        src="/results.svg"
        alt="img"
        width={100}
        height={100}
        layout="fixed"
      /> */}

        <Charts data={data} />

        <table>
          <thead>
            <tr>
              <th scope='col' id='vzebra-comedy'>
                Food Item
              </th>
              <th scope='col' id='vzebra-comedy'>
                status
              </th>
            </tr>
            <tr>
              <td>Potatoes</td>

              <td>Wasted</td>
            </tr>
            <tr>
              <td>Tomatoes</td>
              <td>used</td>
            </tr>{" "}
            <tr>
              <td>Bread</td>
              <td>used</td>
            </tr>{" "}
            <tr>
              <td>Carrots</td>
              <td>used</td>
            </tr>
          </thead>
          ...
        </table>
      </div>
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
