import { useState } from "react";
import { getUserWasteFoodList, updateUserWasteList } from "../src/foodData";
import { convertObjectToNestArray } from "../src/utils";
import Link from "next/Link";
import Image from "next/image";
import { HomeTabs, Footer } from "./../src/styledComponents/reusables";

export async function getStaticProps() {
  try {
    const userWasteList = await getUserWasteFoodList();
    return {
      props: { userWasteList },
    };
  } catch (e) {
    console.log("uh oh", e);
  }
}

export default function Home({ userWasteList }) {
  const [wasteItems, setWasteItems] = useState(userWasteList);
  const wasteItemArray = convertObjectToNestArray(wasteItems);
  console.log(wasteItemArray);
  console.log(wasteItems);
  return (
    <div className="mainCont">
      <Image
        src="/binIcon.svg"
        alt="img"
        width={100}
        height={100}
        layout="fixed"
      />
      <h1>Wasted Food</h1>
      <ul>
        {wasteItemArray.map((itemAndQuantity, index) => (
          <li key={index}>{itemAndQuantity[0]}</li>
        ))}
      </ul>
      <button onClick={() => setWasteItems({ ...wasteItems, tomatoes: 3 })}>
        Add tomatoes
      </button>
      <button
        onClick={() => {
          updateUserWasteList(wasteItems);
        }}
      >
        Update Waste List
      </button>

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
