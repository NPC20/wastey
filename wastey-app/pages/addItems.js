import { useState } from "react";
import {
  updateGenericFoodList,
  getGenericFoodList,
  sendDataToDB,
} from "../src/foodData";

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

export default function AddItems({ genericFoodList }) {
  const [chosenItems, setChosenItems] = useState({});
  console.log(chosenItems);

  // { tomatoes: 2, bread: 3 }

  console.log(genericFoodList.fruit);
  return (
    <div>
      <h1>FoodList</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target.food.value);
          const itemName = e.target.food.value;
          setChosenItems({ ...chosenItems, [itemName]: 0 });
        }}
      >
        <input type="text" list="food" name="food" />
        <button type="submit">Add Item</button>
      </form>
      <datalist id="food">
        {genericFoodList.fruit.map((list, index) => (
          <option key={index} value={list}>
            {list}
          </option>
        ))}
      </datalist>
      <ul>
        {Object.keys(chosenItems)
          .map((key) => [key, chosenItems[key]])
          .map((keyVal, index) => (
            <li key={index}>{keyVal[0]}</li>
          ))}
      </ul>
      <button onClick={() => sendDataToDB(chosenItems)}>Submit</button>
    </div>
  );
}
