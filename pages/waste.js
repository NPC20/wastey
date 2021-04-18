import { useState } from "react";
import { getUserWasteFoodList, updateUserWasteList } from "../src/foodData";
import { convertObjectToNestArray } from "../src/utils";
import Link from "next/link";
import Image from "next/image";
import { HomeTabs, Footer } from "./../src/styledComponents/reusables";
import styles from "../styles/shopping.module.css";

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
      <ul className={styles.list}>
        {wasteItemArray.map((keyVal, index) => (
          <li key={index} className={styles.listItem}>
            {keyVal[0]}
            <button
              className={styles.qBtn}
              onClick={() => {
                setWasteItems({
                  ...wasteItems,
                  [keyVal[0]]: keyVal[1] - 1,
                });
              }}
            >
              -
            </button>
            {keyVal[1]}
            <button
              className={styles.qBtn}
              onClick={() => {
                setWasteItems({
                  ...wasteItems,
                  [keyVal[0]]: keyVal[1] + 1,
                });
              }}
            >
              +
            </button>
          </li>
        ))}
      </ul>
      <button
        className={styles.submitBtn}
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
