import { db } from "./connection";

const foodData = {
  fruit: ["tomatoes", "bananas", "potatoes", "lettuce"],
  carbs: ["bread", "pasta"],
};

export function updateGenericFoodList() {
  return db
    .collection("foodAPI")
    .doc("testFoodData")
    .set(foodData)
    .then(() => {
      console.log("successfully updated generic food list");
    })
    .catch((error) => {
      console.log("Error writing document: ", error);
    });
}

export function getGenericFoodList() {
  return db
    .collection("foodAPI")
    .doc("testFoodData")
    .get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data();
      } else {
        console.log("no such document!");
      }
    })
    .catch((error) => {
      console.log("Error writing document: ", error);
    });
}

export function sendDataToDB(itemsChosen) {
  return db
    .collection("users")
    .doc("001")
    .collection("food")
    .doc("week1")
    .set(itemsChosen)
    .then(() => {
      console.log("successfully updated user food list");
    })
    .catch((error) => {
      console.log("Error writing document: ", error);
    });
}

export function addNewUser(username, doc) {
  return db.collection("users").doc(doc).set({ name: username });
}
