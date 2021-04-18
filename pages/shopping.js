import { useState } from "react";

import { updateGenericFoodList, getGenericFoodList, sendDataToDB } from "../src/foodData";
import Link from "next/link";
import Router from "next/router";
import Image from "next/image";
import { Footer } from "./../src/styledComponents/reusables";
import { useAuth } from "../src/useAuth";

export async function getStaticProps() {
  //  for My Hoa <3
  const { user } = useAuth();
  const userId = user.uid;

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
  const [chosenItems, setChosenItems] = useState({});

  const { user, loading } = useAuth();

  if (!user) {
    typeof window !== "undefined" && Router.push("/signup");
  }

  return (
    <div className='mainCont'>
      <Image src='/shoppingCart.svg' alt='img' width={100} height={100} layout='fixed' />

      <div>
        <h1>FoodList</h1>
        <form
          onSubmit={e => {
            e.preventDefault();
            console.log(e.target.food.value);
            const itemName = e.target.food.value;
            setChosenItems({ ...chosenItems, [itemName]: 0 });
          }}
        >
          <input type='text' list='food' name='food' />
          <button type='submit'>Add Item</button>
        </form>
        <datalist id='food'>
          {genericFoodList.fruit.map((list, index) => (
            <option key={index} value={list}>
              {list}
            </option>
          ))}
        </datalist>
        <ul>
          {Object.keys(chosenItems)
            .map(key => [key, chosenItems[key]])
            .map((keyVal, index) => (
              <li key={index}>
                {keyVal[0]}
                <button
                  onClick={() => {
                    setChosenItems({ ...chosenItems, [keyVal[0]]: keyVal[1] - 1 });
                  }}
                >
                  -
                </button>
                {keyVal[1]}
                <button
                  onClick={() => {
                    setChosenItems({ ...chosenItems, [keyVal[0]]: keyVal[1] + 1 });
                  }}
                >
                  +
                </button>
              </li>
            ))}
        </ul>
        <button onClick={() => sendDataToDB(chosenItems)}>Submit</button>
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
