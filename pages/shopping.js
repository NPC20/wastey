import { useState, useMemo, useEffect } from "react";
import { updateGenericFoodList, getGenericFoodList, updateUserBoughtList, getUserBoughtFoodList } from "../src/foodData";
import Link from "next/link";
import Router from "next/router";
import Image from "next/image";
import Footer from "../components/Footer";
import HomeBtn from "../components/HomeBtn";
import LogoutBtn from "../components/LogoutBtn";
import { useAuth } from "../src/useAuth";
import { convertObjectToNestArray } from "../src/utils";
import styles from "../styles/shopping.module.css";

export async function getStaticProps() {
  try {
    const updateFoodList = await updateGenericFoodList();
    const genericFoodList = await getGenericFoodList();

    return {
      props: { genericFoodList },
    };
  } catch (e) {
    console.log("uh oh", e);
  }
}

export default function Home({ genericFoodList }) {
  const [chosenItems, setChosenItems] = useState();
  const chosenItemsArray = useMemo(() => {
    if (!chosenItems) {
      return;
    }
    return convertObjectToNestArray(chosenItems);
  }, [chosenItems]);

  const { user, loading } = useAuth();

  // if (!user) {
  //   typeof window !== "undefined" && Router.push("/signup");
  // }

  useEffect(async () => {
    if (user) {
      const boughtList = await getUserBoughtFoodList(user.uid);
      if (boughtList) {
        setChosenItems(boughtList);
      }
    }
  }, [user]);

  return (
    <div className='mainCont'>
      <Image src='/shoppingCart.svg' alt='img' width={100} height={100} layout='fixed' />

      <div>
        <h1 className={styles.center}>FoodList</h1>
        <form
          onSubmit={e => {
            e.preventDefault();
            console.log(e.target.food.value);
            const itemName = e.target.food.value;
            setChosenItems({ ...chosenItems, [itemName]: 0 });
          }}
        >
          <input type='text' list='food' name='food' className={styles.search} />
          <button className={styles.addBtn} type='submit'>
            Add Item
          </button>
        </form>
        <datalist id='food'>
          {genericFoodList.fruit.map((list, index) => (
            <option key={index} value={list}>
              {list}
            </option>
          ))}
        </datalist>
        <ul className={styles.list}>
          {chosenItemsArray &&
            chosenItemsArray.map((keyVal, index) => (
              <li key={index} className={styles.listItem}>
                {keyVal[0]}
                <button
                  className={styles.qBtn}
                  onClick={() => {
                    setChosenItems({ ...chosenItems, [keyVal[0]]: keyVal[1] - 1 });
                  }}
                >
                  -
                </button>
                {keyVal[1]}
                <button
                  className={styles.qBtn}
                  onClick={() => {
                    setChosenItems({ ...chosenItems, [keyVal[0]]: keyVal[1] + 1 });
                  }}
                >
                  +
                </button>
              </li>
            ))}
        </ul>
        <button className={styles.submitBtn} onClick={() => updateUserBoughtList(user.uid, chosenItems)}>
          Submit
        </button>
      </div>
      <Footer />
    </div>
  );
}
