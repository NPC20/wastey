import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HomeTabs, StyledFooter } from "./../src/styledComponents/reusables";
import Charts from "../components/Charts";
import { getUserBoughtFoodList, getUserWasteFoodList } from "../src/foodData";
import { useAuth } from "../src/useAuth";
import { convertObjectToNestArray } from "../src/utils";

const data = [
  { name: "Food wasted", value: 300 },
  { name: "Food used", value: 400 },
];

export default function Home() {
  const [boughtItems, setBoughtItems] = useState();
  const [wasteItems, setWasteItems] = useState();
  // const [data, setData] = useState();

  const { user, loading } = useAuth();

  useEffect(async () => {
    if (user) {
      const boughtList = await getUserBoughtFoodList(user.uid);
      const wasteList = await getUserWasteFoodList(user.uid);

      if (boughtList) {
        setBoughtItems(boughtList);
      }
      if (wasteList) {
        setWasteItems(wasteList);
      }
    }
  }, [user]);

  useEffect(() => {
    if (boughtItems && wasteItems) {
      const bought = convertObjectToNestArray(boughtItems);
      const waste = convertObjectToNestArray(wasteItems);
    }
  }, []);

  console.log(boughtItems, wasteItems);

  return (
    <div className='resultCont'>
      <h2 className='table__title'>YOUR STATS TO DATE</h2>{" "}
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
              <td> Potatoes</td>

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
      <StyledFooter>
        <Link href='/'>
          <Image src='/homeButton.svg' alt='img' width={100} height={100} layout='fixed' />
        </Link>
        <Link href='/'>
          <Image src='/logoutButton.svg' alt='img' width={100} height={100} layout='fixed' />
        </Link>
      </StyledFooter>
    </div>
  );
}
