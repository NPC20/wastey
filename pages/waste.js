import { useState, useEffect, useMemo } from "react";
import Router from "next/router";
import Link from 'next/link';
import Image from 'next/image';
import Footer from "../components/Footer";
import { getUserWasteFoodList, updateUserWasteList } from "../src/foodData";
import { convertObjectToNestArray } from "../src/utils";
import { convertObjectToNestArray } from "../src/utils";
import { useAuth } from "../src/useAuth";

export default function Home() {
  const [wasteItems, setWasteItems] = useState();
  const wasteItemsArray = useMemo(() => {
    if (!wasteItems) {
      return;
    }
    return convertObjectToNestArray(wasteItems);
  }, [wasteItems]);

  const { user, loading } = useAuth();

  // if (!user) {
  //   typeof window !== "undefined" && Router.push("/signup");
  // }

  useEffect(async () => {
    if (user) {
      const userWasteList = await getUserWasteFoodList(user.uid);
      if (userWasteList) {
        setWasteItems(userWasteList);
      }
    }
  }, [user]);

  return (
    <div className='mainCont'>
      <Image src='/binIcon.svg' alt='img' width={100} height={100} layout='fixed' />
      <h1>Wasted Food</h1>
      <ul>
        {wasteItemsArray &&
          wasteItemsArray.map((keyVal, index) => (
            <li key={index}>
              {keyVal[0]}
              <button
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
        onClick={() => {
          console.log("update", wasteItems);
          console.log("user id", user.uid);
          updateUserWasteList(user.uid, wasteItems);
        }}
      >
        Update Waste List
      </button>
        <Footer />
    </div>
  );
}
